import type { Artwork, ArtworkCollection } from "@shared/catalog";
import { sourceCollectionDescriptions, sourceCollectionHandleByName } from "@shared/sourceDescriptions";
import ArtworkCard from "./ArtworkCard";

const collectionNotes: Record<ArtworkCollection, string> = {
  "Mediterranean": "Sun-washed passages, flowered terraces, and the slow blue rhythm of the coast.",
  "Cubic": "Intimacy translated into facet, gesture, and warm architectural color.",
  "Angelic": "Luminous studies of grace, stillness, and imagined heavens.",
  "Vintage": "Quiet domestic memories, inherited rituals, and time-held rooms.",
  "Botanical": "Small botanical gestures for walls that ask for calm.",
  "Floral & Ethereal": "Figures and florals suspended in color, softness, and bloom.",
  "Single Line Art": "A single continuous line for moments of love, play, and connection.",
};

export default function CollectionRail({ name, works, detail = false }: { name: ArtworkCollection; works: Artwork[]; detail?: boolean }) {
  const sourceDescription = sourceCollectionDescriptions[sourceCollectionHandleByName[name]];
  const overviewSections = sourceDescription?.sections.filter(section => !/perfect for/i.test(section.heading)) ?? [];
  const perfectFor = sourceDescription?.sections.find(section => /perfect for/i.test(section.heading));
  return (
    <section className={`collection-rail ${detail ? "collection-rail--detail" : ""}`} aria-label={`${name} collection`}>
      <div className="collection-rail__heading">
        <div>
          <p className="eyebrow">Collection</p>
          <h2>{name}</h2>
          <p className="collection-rail__caption">{collectionNotes[name]}</p>
          {overviewSections.map(section => <div className="collection-rail__source-copy" key={section.heading}>
            <h3>{section.heading}</h3>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>)}
          {perfectFor && <details className="collection-rail__details"><summary>{perfectFor.heading}</summary><ul>{perfectFor.bullets.map(item => <li key={item}>{item}</li>)}</ul></details>}
        </div>
        <p className="collection-rail__note">Explore this collection <span>Every work visible below</span></p>
      </div>
      <div className="collection-rail__track collection-rail__grid">
        {works.map((artwork, index) => <ArtworkCard artwork={artwork} index={index} key={artwork.handle} />)}
      </div>
    </section>
  );
}
