import { catalog, artworkCollections } from "@shared/catalog";
import CollectionRail from "@/components/CollectionRail";

export default function Catalog() {
  return <>
    <section className="catalog-hero page-intro">
      <p className="eyebrow">The complete collection</p>
      <h1>Art for every<br /><em>inner world.</em></h1>
      <p>Explore each collection as its own visual story. Every preview begins with the artwork itself; individual pages reveal its mock-ups, motion, and print guidance.</p>
    </section>
    <section className="catalog-section">
      <div className="catalog-introline"><span>{catalog.length} works · 7 collections</span><span>Every collection is shown in full below</span></div>
      {artworkCollections.map(name => <CollectionRail name={name} works={catalog.filter(artwork => artwork.collection === name)} key={name} />)}
    </section>
  </>;
}
