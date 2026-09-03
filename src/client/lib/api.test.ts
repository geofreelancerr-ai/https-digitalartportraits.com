import { afterEach, describe, expect, it, vi } from "vitest";
import { ApiUnavailableError, api } from "./api";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("api", () => {
  it("returns JSON from a successful Cloudflare API response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ orderNumber: "DAP-2026-TEST123" }), {
      status: 201,
      headers: { "content-type": "application/json" },
    })));

    await expect(api<{ orderNumber: string }>("/api/orders")).resolves.toEqual({ orderNumber: "DAP-2026-TEST123" });
  });

  it("preserves a genuine JSON validation error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ error: "Select at least one portrait." }), {
      status: 400,
      headers: { "content-type": "application/json" },
    })));

    await expect(api("/api/orders")).rejects.toThrow("Select at least one portrait.");
  });

  it("identifies a static preview response as an unavailable API", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("<!doctype html>", {
      status: 200,
      headers: { "content-type": "text/html" },
    })));

    await expect(api("/api/orders")).rejects.toBeInstanceOf(ApiUnavailableError);
  });
});
