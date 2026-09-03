import { describe, expect, it } from "vitest";
import { catalog } from "./catalog";
import { artworkMediaByHandle } from "./artworkMedia";

describe("artwork media registry", () => {
  it("gives every catalog artwork mock-ups, a print-size guide, and a video preview for in-card browsing", () => {
    expect(Object.keys(artworkMediaByHandle)).toHaveLength(catalog.length);
    for (const artwork of catalog) {
      const media = artworkMediaByHandle[artwork.handle];
      expect(media?.video).toMatch(/^\/manus-storage\//);
      expect(media?.gallery.some(item => item.kind === "mockup")).toBe(true);
      expect(media?.gallery.some(item => item.kind === "size-guide")).toBe(true);
    }
  });
});
