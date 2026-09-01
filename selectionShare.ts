export type SelectionShareLine = {
  title: string;
  quantity: number;
  subtotalCents: number;
};

export type SelectionRequestDetails = {
  customerName: string;
  email: string;
  whatsapp: string;
  paymentMethod: "whish_money" | "western_union" | "omt";
  notes?: string;
};

function formatShareCurrency(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function buildSelectionShareText(input: {
  orderNumber?: string;
  customerName?: string;
  lines: SelectionShareLine[];
  totalCents: number;
}) {
  const opening = input.orderNumber
    ? `Hello George, I created selection request ${input.orderNumber}.`
    : "Hello George, I would like to ask about this Digital Art Portraits selection:";
  const customer = input.customerName ? `Customer: ${input.customerName}` : undefined;
  const lines = input.lines.map(line => `${line.quantity} × ${line.title} — ${formatShareCurrency(line.subtotalCents)}`);

  return [opening, customer, ...lines, `Selection total: ${formatShareCurrency(input.totalCents)}`, "Please explain the manual payment and delivery process."].filter(Boolean).join("\n");
}

export function buildSelectionRequestShareText(input: SelectionRequestDetails & {
  lines: SelectionShareLine[];
  totalCents: number;
}) {
  const paymentMethod = input.paymentMethod === "whish_money"
    ? "Whish Money"
    : input.paymentMethod === "western_union"
      ? "Western Union"
      : "OMT";
  const selection = buildSelectionShareText({
    customerName: input.customerName,
    lines: input.lines,
    totalCents: input.totalCents,
  });

  return [
    selection,
    `Email: ${input.email}`,
    `Customer WhatsApp: ${input.whatsapp}`,
    `Preferred payment: ${paymentMethod}`,
    input.notes?.trim() ? `Note: ${input.notes.trim()}` : undefined,
    "Please confirm that you received this selection request.",
  ].filter(Boolean).join("\n");
}
