import rawDescriptions from "./shopifyDescriptions.generated.json";

export type SourceDescriptionSection = {
  heading: string;
  paragraphs: string[];
  bullets: string[];
};

type SourceDescriptionRecord = {
  sourceTitle: string;
  sections: SourceDescriptionSection[];
};

const descriptions = rawDescriptions as {
  productDescriptions: Record<string, SourceDescriptionRecord>;
  collectionDescriptions: Record<string, SourceDescriptionRecord>;
};

export const sourceArtworkDescriptions = descriptions.productDescriptions;
export const sourceCollectionDescriptions = descriptions.collectionDescriptions;

export const sourceCollectionHandleByName = {
  Mediterranean: "mediterranean-light-bloom",
  Cubic: "romantic-collection",
  Angelic: "angelic-healing-collection",
  Vintage: "vintage-portraits-collection",
  Botanical: "botanical-wall-art-collection",
  "Floral & Ethereal": "the-bloom-atelier-collection",
  "Single Line Art": "single-line-art-collection",
} as const;
