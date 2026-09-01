import { describe, expect, it } from "vitest";
import { catalogByHandle } from "./catalog";
import { artworkMediaByHandle } from "./artworkMedia";
import { buildCardMediaSlides } from "./cardMedia";

describe("in-card media sequence", () => {
  it("presents the artwork, mock-ups, video, and size guide in the requested order", () => {
    const artwork = catalogByHandle.get("whispers-of-the-blue-lane");
    expect(artwork).toBeDefined();
    const slides = buildCardMediaSlides(artwork!, artworkMediaByHandle[artwork!.handle]);
    expect(slides.map(slide => slide.kind)).toEqual(["artwork", "mockup", "mockup", "video", "size-guide"]);
    expect(slides.at(-1)?.label).toBe("Available print sizes");
  });
});
