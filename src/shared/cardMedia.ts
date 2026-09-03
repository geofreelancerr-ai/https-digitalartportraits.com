import type { Artwork } from "./catalog";
import type { ArtworkMedia } from "./artworkMedia";

export type CardMediaSlide = {
  kind: "artwork" | "mockup" | "size-guide" | "video";
  label: string;
  url: string;
};

export function buildCardMediaSlides(artwork: Artwork, media: ArtworkMedia | undefined): CardMediaSlide[] {
  const gallery = media?.gallery ?? [];
  return [
    { kind: "artwork", label: "Artwork", url: artwork.image },
    ...gallery.filter(item => item.kind === "mockup").map(item => ({ kind: item.kind, label: item.label, url: item.url })),
    ...(media?.video ? [{ kind: "video" as const, label: "Motion preview", url: media.video }] : []),
    ...gallery.filter(item => item.kind === "size-guide").map(item => ({ kind: item.kind, label: item.label, url: item.url })),
  ];
}
