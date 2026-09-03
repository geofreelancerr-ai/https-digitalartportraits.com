import { catalogByHandle } from "./shared/catalog";

export interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  RECEIPTS: R2Bucket;
  ADMIN_PASSWORD: string;
  SESSION_SECRET: string;
  MEDIA_ORIGIN: string;
}

type OrderStatus = "pending_payment" | "proof_submitted" | "confirmed" | "cancelled";
type PaymentMethod = "whish_money" | "western_union" | "omt";

const corsHeaders = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
const validMethods = new Set<PaymentMethod>(["whish_money", "western_union", "omt"]);
const validStatuses = new Set<OrderStatus>(["pending_payment", "proof_submitted", "confirmed", "cancelled"]);

function json(data: unknown, status = 200) { return new Response(JSON.stringify(data), { status, headers: corsHeaders }); }
function error(message: string, status = 400) { return json({ error: message }, status); }
function getCookie(request: Request, name: string) { return request.headers.get("Cookie")?.split(";").map(value => value.trim()).find(value => value.startsWith(`${name}=`))?.slice(name.length + 1); }
function asText(value: unknown, max: number) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function emailValid(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function bytesEqual(first: Uint8Array, second: Uint8Array) { if (first.length !== second.length) return false; let output = 0; for (let index = 0; index < first.length; index++) output |= first[index] ^ second[index]; return output === 0; }

async function digest(value: string) { return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))); }
async function sessionSignature(value: string, secret: string) { const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]); const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value)); return btoa(String.fromCharCode(...new Uint8Array(signature))).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", ""); }
async function ownerSession(request: Request, env: Env) { const raw = getCookie(request, "dap_owner"); if (!raw) return false; const [value, signature] = raw.split("."); if (!value || !signature) return false; const expected = await sessionSignature(value, env.SESSION_SECRET); if (signature !== expected) return false; const expiresAt = Number(value.split(":")[0]); return Number.isFinite(expiresAt) && expiresAt > Date.now(); }
async function requireOwner(request: Request, env: Env) { return (await ownerSession(request, env)) ? null : error("Owner sign-in is required.", 401); }

function makeOrderNumber() { return `DAP-${new Date().getUTCFullYear()}-${crypto.randomUUID().replaceAll("-", "").slice(0, 7).toUpperCase()}`; }
function decodeDataUrl(dataUrl: string, expectedMime: string, maxBytes: number) { const prefix = `data:${expectedMime};base64,`; if (!dataUrl.startsWith(prefix)) throw new Error("The receipt file format is invalid."); const raw = atob(dataUrl.slice(prefix.length)); if (!raw || raw.length > maxBytes) throw new Error("Receipts must be smaller than 5 MB."); const bytes = new Uint8Array(raw.length); for (let index = 0; index < raw.length; index++) bytes[index] = raw.charCodeAt(index); return bytes; }

async function readOrder(env: Env, orderNumber: string) {
  const order = await env.DB.prepare("SELECT * FROM orders WHERE order_number = ?").bind(orderNumber).first<Record<string, unknown>>();
  if (!order) return null;
  const { results: items } = await env.DB.prepare("SELECT id, artwork_handle as artworkHandle, artwork_title as artworkTitle, quantity, unit_price_cents as unitPriceCents FROM order_items WHERE order_number = ? ORDER BY id").bind(orderNumber).all();
  return { id: order.id, orderNumber: order.order_number, customerName: order.customer_name, email: order.email, whatsapp: order.whatsapp, paymentMethod: order.payment_method, paymentReference: order.payment_reference, notes: order.notes, totalCents: order.total_cents, currency: order.currency, status: order.status, receiptFileName: order.receipt_file_name, hasReceipt: Boolean(order.receipt_key), createdAt: order.created_at, items };
}

async function createOrder(request: Request, env: Env) {
  const body = await request.json<Record<string, unknown>>();
  const customerName = asText(body.customerName, 160); const email = asText(body.email, 320).toLowerCase(); const whatsapp = asText(body.whatsapp, 48); const paymentMethod = body.paymentMethod as PaymentMethod; const notes = asText(body.notes, 1200) || null;
  if (customerName.length < 2 || !emailValid(email) || whatsapp.length < 7 || !validMethods.has(paymentMethod)) return error("Please provide your name, email, WhatsApp number, and payment preference.");
  if (!Array.isArray(body.items) || body.items.length < 1 || body.items.length > 12) return error("Select at least one portrait.");
  const items = body.items.map(item => {
    const line = item as { handle?: unknown; quantity?: unknown }; const artwork = typeof line.handle === "string" ? catalogByHandle.get(line.handle) : undefined; const quantity = Number(line.quantity);
    if (!artwork || !Number.isInteger(quantity) || quantity < 1 || quantity > 12) throw new Error("One selected portrait is no longer available.");
    return { artwork, quantity };
  });
  const totalCents = items.reduce((sum, item) => sum + item.artwork.priceCents * item.quantity, 0); const orderNumber = makeOrderNumber();
  const statements = [env.DB.prepare("INSERT INTO orders (order_number, customer_name, email, whatsapp, payment_method, notes, total_cents) VALUES (?, ?, ?, ?, ?, ?, ?)").bind(orderNumber, customerName, email, whatsapp, paymentMethod, notes, totalCents), ...items.map(item => env.DB.prepare("INSERT INTO order_items (order_number, artwork_handle, artwork_title, quantity, unit_price_cents) VALUES (?, ?, ?, ?, ?)").bind(orderNumber, item.artwork.handle, item.artwork.title, item.quantity, item.artwork.priceCents))];
  await env.DB.batch(statements);
  return json(await readOrder(env, orderNumber), 201);
}

async function submitProof(request: Request, env: Env, orderNumber: string) {
  const body = await request.json<Record<string, unknown>>(); const email = asText(body.email, 320).toLowerCase(); const order = await readOrder(env, orderNumber);
  if (!order || order.email !== email) return error("We could not find that order.", 404);
  if (order.status === "confirmed" || order.status === "cancelled") return error("This order can no longer receive a payment proof.");
  const mime = asText(body.receiptMimeType, 64); const allowed = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]); if (!allowed.has(mime)) return error("Choose a JPEG, PNG, WebP, or PDF receipt.");
  try {
    const bytes = decodeDataUrl(asText(body.receiptDataUrl, 7_000_000), mime, 5_000_000); const name = (asText(body.receiptFileName, 180) || "payment-proof").replace(/[^a-zA-Z0-9._-]/g, "-"); const key = `order-receipts/${orderNumber}/${crypto.randomUUID()}-${name}`;
    await env.RECEIPTS.put(key, bytes, { httpMetadata: { contentType: mime, contentDisposition: `attachment; filename="${name}"` } });
    await env.DB.prepare("UPDATE orders SET status = 'proof_submitted', payment_reference = ?, receipt_key = ?, receipt_file_name = ?, receipt_mime_type = ?, updated_at = CURRENT_TIMESTAMP WHERE order_number = ?").bind(asText(body.paymentReference, 256) || null, key, name, mime, orderNumber).run();
    return json(await readOrder(env, orderNumber));
  } catch (caught) { return error(caught instanceof Error ? caught.message : "The receipt could not be uploaded."); }
}

async function handleApi(request: Request, env: Env, url: URL) {
  const path = url.pathname; const method = request.method;
  if (method === "GET" && path === "/api/owner/session") return json({ owner: await ownerSession(request, env) });
  if (method === "POST" && path === "/api/owner/login") {
    const body = await request.json<Record<string, unknown>>(); const provided = asText(body.password, 512); if (!provided || !env.ADMIN_PASSWORD || !bytesEqual(await digest(provided), await digest(env.ADMIN_PASSWORD))) return error("Incorrect owner password.", 401);
    const expires = Date.now() + 1000 * 60 * 60 * 12; const value = `${expires}:${crypto.randomUUID()}`; const cookie = `${value}.${await sessionSignature(value, env.SESSION_SECRET)}`;
    return new Response(JSON.stringify({ owner: true }), { headers: { ...corsHeaders, "Set-Cookie": `dap_owner=${cookie}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=43200` } });
  }
  if (method === "POST" && path === "/api/owner/logout") return new Response(JSON.stringify({ owner: false }), { headers: { ...corsHeaders, "Set-Cookie": "dap_owner=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0" } });
  if (method === "POST" && path === "/api/orders") return createOrder(request, env);
  const orderMatch = path.match(/^\/api\/orders\/([^/]+)$/);
  if (method === "GET" && orderMatch) { const order = await readOrder(env, decodeURIComponent(orderMatch[1])); if (!order || order.email !== (url.searchParams.get("email") || "").trim().toLowerCase()) return error("We could not find that order.", 404); return json(order); }
  const proofMatch = path.match(/^\/api\/orders\/([^/]+)\/proof$/);
  if (method === "POST" && proofMatch) return submitProof(request, env, decodeURIComponent(proofMatch[1]));
  if (method === "GET" && path === "/api/owner/orders") { const denied = await requireOwner(request, env); if (denied) return denied; const { results } = await env.DB.prepare("SELECT order_number FROM orders ORDER BY created_at DESC").all<{ order_number: string }>(); return json(await Promise.all(results.map(row => readOrder(env, row.order_number)))); }
  const updateMatch = path.match(/^\/api\/owner\/orders\/([^/]+)$/);
  if (method === "PATCH" && updateMatch) { const denied = await requireOwner(request, env); if (denied) return denied; const body = await request.json<Record<string, unknown>>(); const status = body.status as OrderStatus; if (!validStatuses.has(status)) return error("Invalid order status."); await env.DB.prepare("UPDATE orders SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE order_number = ?").bind(status, decodeURIComponent(updateMatch[1])).run(); return json(await readOrder(env, decodeURIComponent(updateMatch[1]))); }
  const receiptMatch = path.match(/^\/api\/owner\/orders\/([^/]+)\/receipt$/);
  if (method === "GET" && receiptMatch) { const denied = await requireOwner(request, env); if (denied) return denied; const order = await readOrder(env, decodeURIComponent(receiptMatch[1])); const key = await env.DB.prepare("SELECT receipt_key as receiptKey, receipt_file_name as receiptFileName, receipt_mime_type as receiptMimeType FROM orders WHERE order_number = ?").bind(decodeURIComponent(receiptMatch[1])).first<{ receiptKey?: string; receiptFileName?: string; receiptMimeType?: string }>(); if (!order || !key?.receiptKey) return error("No payment proof is available.", 404); const object = await env.RECEIPTS.get(key.receiptKey); if (!object) return error("Payment proof not found.", 404); return new Response(object.body, { headers: { "content-type": key.receiptMimeType || "application/octet-stream", "content-disposition": `inline; filename="${key.receiptFileName || "payment-proof"}"`, "cache-control": "private, no-store" } }); }
  return error("Not found.", 404);
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) return handleApi(request, env, url);
    if (url.pathname.startsWith("/manus-storage/")) return fetch(new URL(url.pathname, env.MEDIA_ORIGIN).toString());
    return env.ASSETS.fetch(request);
  }
} satisfies ExportedHandler<Env>;
