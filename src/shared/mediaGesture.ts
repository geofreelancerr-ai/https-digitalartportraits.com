export function isHorizontalMediaSwipe(start: { x: number; y: number }, end: { x: number; y: number }, minimumDistance = 36) {
  const horizontalDistance = end.x - start.x;
  const verticalDistance = end.y - start.y;
  return Math.abs(horizontalDistance) >= minimumDistance && Math.abs(horizontalDistance) > Math.abs(verticalDistance);
}
