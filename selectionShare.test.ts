import { describe, expect, it } from "vitest";
import { buildSelectionRequestShareText, buildSelectionShareText } from "./selectionShare";

describe("buildSelectionShareText", () => {
  it("builds a complete selected-artwork message for a pre-order question", () => {
    const message = buildSelectionShareText({
      lines: [{ title: "Where Love Rests", quantity: 2, subtotalCents: 9800 }],
      totalCents: 9800,
    });

    expect(message).toContain("I would like to ask about this Digital Art Portraits selection");
    expect(message).toContain("2 × Where Love Rests — $98.00");
    expect(message).toContain("Selection total: $98.00");
  });

  it("includes the private request number and customer name after request creation", () => {
    const message = buildSelectionShareText({
      orderNumber: "DAP-2026-ABC1234",
      customerName: "Rana Saleh",
      lines: [{ title: "The Kiss", quantity: 1, subtotalCents: 4900 }],
      totalCents: 4900,
    });

    expect(message).toContain("DAP-2026-ABC1234");
    expect(message).toContain("Customer: Rana Saleh");
  });
});

describe("buildSelectionRequestShareText", () => {
  it("includes the complete customer request for the WhatsApp fallback", () => {
    const message = buildSelectionRequestShareText({
      customerName: "George Jamous",
      email: "george@example.com",
      whatsapp: "+96170124873",
      paymentMethod: "western_union",
      notes: "Please confirm availability.",
      lines: [{ title: "Infinite Bond", quantity: 1, subtotalCents: 699 }],
      totalCents: 699,
    });

    expect(message).toContain("Customer: George Jamous");
    expect(message).toContain("Email: george@example.com");
    expect(message).toContain("Customer WhatsApp: +96170124873");
    expect(message).toContain("Preferred payment: Western Union");
    expect(message).toContain("1 × Infinite Bond — $6.99");
    expect(message).toContain("Note: Please confirm availability.");
  });
});
