import { catalogByHandle } from "@shared/catalog";
import { CheckCircle2, ChevronRight, Loader2, MessageCircle, Minus, Plus, ShieldCheck, Trash2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Link } from "wouter";
import { formatUSD } from "@/components/ArtworkCard";
import PaymentInstructions from "@/components/PaymentInstructions";
import { useCart } from "@/contexts/CartContext";
import { ApiUnavailableError, api } from "@/lib/api";
import { buildSelectionRequestShareText, buildSelectionShareText } from "@shared/selectionShare";

type PaymentMethod = "whish_money" | "western_union" | "omt";

export default function Checkout() {
  const { lines, updateQuantity, removeArtwork, clearCart } = useCart();
  const [form, setForm] = useState({ customerName: "", email: "", whatsapp: "", paymentMethod: "whish_money" as PaymentMethod, notes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const orderLines = useMemo(() => lines.map(line => ({ ...line, artwork: catalogByHandle.get(line.handle) })).filter((line): line is typeof line & { artwork: NonNullable<typeof line.artwork> } => Boolean(line.artwork)), [lines]);
  const total = orderLines.reduce((sum, line) => sum + line.artwork.priceCents * line.quantity, 0);
  const selectionWhatsAppHref = `https://wa.me/96170124873?text=${encodeURIComponent(buildSelectionShareText({ lines: orderLines.map(line => ({ title: line.artwork.title, quantity: line.quantity, subtotalCents: line.artwork.priceCents * line.quantity })), totalCents: total }))}`;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFormError("");
    const linesForMessage = orderLines.map(line => ({ title: line.artwork.title, quantity: line.quantity, subtotalCents: line.artwork.priceCents * line.quantity }));
    try {
      const order = await api<{ orderNumber: string }>("/api/orders", { method: "POST", body: JSON.stringify({ ...form, items: orderLines.map(line => ({ handle: line.handle, quantity: line.quantity })) }) });
      if (!order.orderNumber) throw new Error("The request could not be completed.");
      const whatsappHref = `https://wa.me/96170124873?text=${encodeURIComponent(buildSelectionShareText({ orderNumber: order.orderNumber, customerName: form.customerName, lines: linesForMessage, totalCents: total }))}`;
      localStorage.setItem("digital-art-portraits-order-lookup", JSON.stringify({ orderNumber: order.orderNumber, email: form.email }));
      clearCart();
      window.location.assign(whatsappHref);
    } catch (caught) {
      if (caught instanceof ApiUnavailableError) {
        const whatsappHref = `https://wa.me/96170124873?text=${encodeURIComponent(buildSelectionRequestShareText({ ...form, lines: linesForMessage, totalCents: total }))}`;
        window.location.assign(whatsappHref);
      } else {
        setFormError(caught instanceof Error ? caught.message : "The request could not be created.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (!orderLines.length) return <section className="empty-state"><p className="eyebrow">Your selection</p><h1>Your collection is<br /><em>waiting to begin.</em></h1><p>Add a work from the gallery when you find the one that belongs in your space.</p><Link href="/catalog" className="button button--dark">Explore the gallery <ChevronRight size={18} /></Link></section>;

  return <section className="checkout-page">
    <div className="checkout-heading"><p className="eyebrow">Your selection request</p><h1>Tell George<br /><em>what you chose.</em></h1><p>First send your selection and contact details. You will speak with George on WhatsApp before sending any manual payment. No charge is made by this website.</p></div>
    <ol className="selection-process" aria-label="Your payment and delivery process">
      <li><span>01</span><CheckCircle2 size={20} /><h2>Choose</h2><p>Add one or more portraits to your selection.</p></li>
      <li><span>02</span><MessageCircle size={20} /><h2>Share</h2><p>Add your name, email, and WhatsApp number, then send your request.</p></li>
      <li><span>03</span><MessageCircle size={20} /><h2>Discuss</h2><p>George confirms the correct Whish, OMT, or Western Union payment details.</p></li>
      <li><span>04</span><ShieldCheck size={20} /><h2>Verify</h2><p>Pay, upload your receipt, and wait for George to verify the transfer.</p></li>
      <li><span>05</span><ChevronRight size={20} /><h2>Receive</h2><p>After confirmation, George shares your matching high-resolution file privately by Google Drive.</p></li>
    </ol>
    <div className="checkout-layout">
      <form className="checkout-form" onSubmit={submit}>
        <fieldset><legend>01 — Your contact details</legend><p className="form-note form-note--intro">These details create your private selection record and are used for payment confirmation and secure delivery.</p><div className="form-grid"><label>Full name<input required value={form.customerName} onChange={event => setForm({ ...form, customerName: event.target.value })} autoComplete="name" /></label><label>Email address<input type="email" required value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} autoComplete="email" /></label><label className="form-grid__wide">WhatsApp number<input required value={form.whatsapp} onChange={event => setForm({ ...form, whatsapp: event.target.value })} placeholder="+961 …" autoComplete="tel" inputMode="tel" /><small>George uses this number only to discuss this selection and payment.</small></label></div></fieldset>
        <fieldset><legend>02 — Preferred manual payment</legend><p className="form-note form-note--intro">Choose the method you prefer. George will confirm the correct receiving details with you on WhatsApp before you pay.</p><div className="payment-options">{(["whish_money", "western_union", "omt"] as PaymentMethod[]).map(method => <label className={form.paymentMethod === method ? "payment-option selected" : "payment-option"} key={method}><input type="radio" name="paymentMethod" value={method} checked={form.paymentMethod === method} onChange={() => setForm({ ...form, paymentMethod: method })} /><span><strong>{method === "whish_money" ? "Whish Money" : method === "western_union" ? "Western Union" : "OMT"}</strong><small>Confirm with George first</small></span><CheckCircle2 size={20} /></label>)}</div></fieldset>
        <fieldset><legend>03 — Send your selection request</legend><label>Optional note for George<textarea value={form.notes} onChange={event => setForm({ ...form, notes: event.target.value })} placeholder="For example, I would like to discuss delivery timing." rows={4} /></label><p className="form-note">After you create this request, a WhatsApp button opens a prepared message with your order number and selected portraits. You must press <strong>Send</strong> in WhatsApp.</p></fieldset>
        {formError && <p className="form-error">{formError}</p>}
        <button className="button button--dark button--wide" type="submit" disabled={submitting}>{submitting ? <><Loader2 className="spin" size={18} /> Creating your request…</> : <>Create request & continue to WhatsApp <ChevronRight size={18} /></>}</button>
      </form>
      <aside className="order-summary"><p className="eyebrow">Your chosen portraits</p>{orderLines.map(line => <div className="summary-line" key={line.handle}><img src={line.artwork.image} alt="" /><div><h3>{line.artwork.title}</h3><p>{formatUSD(line.artwork.priceCents)}</p><div className="quantity-control"><button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(line.handle, line.quantity - 1)}><Minus size={13} /></button><span>{line.quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(line.handle, line.quantity + 1)}><Plus size={13} /></button><button type="button" className="remove-line" aria-label="Remove portrait from selection" onClick={() => removeArtwork(line.handle)}><Trash2 size={14} /></button></div></div><strong>{formatUSD(line.artwork.priceCents * line.quantity)}</strong></div>)}<div className="summary-total"><span>Selection total</span><strong>{formatUSD(total)}</strong></div><a className="button button--whatsapp button--wide checkout-selection-whatsapp" href={selectionWhatsAppHref} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Ask George about this selection</a><p className="summary-note">You can ask a question now. To receive payment instructions and a secure delivery record, first complete the contact form beside this selection.</p></aside>
    </div>
    <PaymentInstructions compact />
  </section>;
}
