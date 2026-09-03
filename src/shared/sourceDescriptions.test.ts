import { describe, expect, it } from "vitest";
import { catalog, artworkCollections } from "./catalog";
import { sourceArtworkDescriptions, sourceCollectionDescriptions, sourceCollectionHandleByName } from "./sourceDescriptions";

describe("source Shopify description coverage", () => {
  it("provides structured source description sections for every storefront artwork", () => {
    for (const artwork of catalog) {
      expect(sourceArtworkDescriptions[artwork.handle]?.sections.length).toBeGreaterThan(0);
    }
  });

  it("provides mapped source description sections for every storefront collection", () => {
    for (const collection of artworkCollections) {
      const sourceHandle = sourceCollectionHandleByName[collection];
      expect(sourceCollectionDescriptions[sourceHandle]?.sections.length).toBeGreaterThan(0);
    }
  });
});
