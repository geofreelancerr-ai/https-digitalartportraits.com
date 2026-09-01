import { describe, expect, it } from "vitest";
import { searchCatalog } from "./catalogSearch";

describe("catalog search", () => {
  it("finds a work by its title", () => {
    expect(searchCatalog("blue lane").map(work => work.handle)).toContain("whispers-of-the-blue-lane");
  });

  it("finds works by collection and returns no work for an unmatched phrase", () => {
    expect(searchCatalog("Mediterranean").every(work => work.collection === "Mediterranean")).toBe(true);
    expect(searchCatalog("not-a-real-artwork")).toEqual([]);
  });
});
