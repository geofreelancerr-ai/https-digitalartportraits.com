import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";

const instructions = [
  { method: "Whish Money", detail: "Choose it as your preferred method, speak with George on WhatsApp, and use only the receiving details he confirms for your request." },
  { method: "Western Union", detail: "Confirm the receiving details with George first, then retain your transfer reference for the private order page." },
  { method: "OMT", detail: "Confirm the receiving details with George first, then keep your receipt or reference ready to upload to your order page." },
];

const paymentSteps = [
  { title: "Choose portraits", detail: "Add one or more portraits to your selection basket." },
  { title: "Add your details", detail: "Enter your name, email, WhatsApp number, and preferred manual payment method." },
  { title: "Talk with George", detail: "Send the prepared WhatsApp request. George confirms the payment details before you pay." },
  { title: "Pay and add proof", detail: "Use Whish Money, Western Union, or OMT, then upload your receipt or transfer reference to your private order page." },
  { title: "Confirm and receive", detail: "George verifies the transfer on the owner page. Only then is your matching high-resolution file released securely." },
];

export default function PaymentInstructions({ compact = false }: { compact?: boolean }) {
  return (
    <section id="how-to-pay" className={compact ? "payment-instructions payment-instructions--compact" : "payment-instructions"}>
      <div className="payment-instructions__intro">
        <p className="eyebrow">How to pay · manual payment only</p>
        <h2>A clear process,<br />from selection to fulfilment.</h2>
        <p><strong>This website does not take card payments directly.</strong> First send your selection and contact details, then speak with George on WhatsApp before paying through Whish Money, Western Union, or OMT. Every request remains <strong>Pending confirmation</strong> until payment is independently checked.</p>
        <a className="text-link" href="https://wa.me/96170124873" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Contact George for payment support</a>
      </div>
      {!compact && <ol className="payment-process" aria-label="Manual payment steps">
        {paymentSteps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}
      </ol>}
      <div className="payment-instructions__methods">
        {instructions.map((instruction, index) => <div className="payment-method-card" key={instruction.method}>
          <span>0{index + 1}</span>
          <h3>{instruction.method}</h3>
          <p>{instruction.detail}</p>
        </div>)}
      </div>
      {!compact && <div className="payment-safety-note"><ShieldCheck size={20} /><p><strong>Please use only receiving details confirmed by George.</strong> Use your order number as the transfer reference, then upload a screenshot or document proof from your private order page. George verifies the transfer before releasing any high-resolution file.</p></div>}
    </section>
  );
}
