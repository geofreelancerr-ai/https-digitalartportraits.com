import { describe, expect, it } from "vitest";
import { isHorizontalMediaSwipe } from "./mediaGesture";

describe("isHorizontalMediaSwipe", () => {
  it("recognizes a deliberate left or right card-media swipe", () => {
    expect(isHorizontalMediaSwipe({ x: 180, y: 120 }, { x: 92, y: 126 })).toBe(true);
    expect(isHorizontalMediaSwipe({ x: 92, y: 120 }, { x: 180, y: 116 })).toBe(true);
  });

  it("keeps vertical page movement and small taps out of media navigation", () => {
    expect(isHorizontalMediaSwipe({ x: 120, y: 80 }, { x: 128, y: 170 })).toBe(false);
    expect(isHorizontalMediaSwipe({ x: 120, y: 80 }, { x: 145, y: 83 })).toBe(false);
  });
});
