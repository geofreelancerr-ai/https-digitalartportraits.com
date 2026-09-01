import { catalogByHandle } from "@shared/catalog";
import { artworkMediaByHandle } from "@shared/artworkMedia";
import { sourceArtworkDescriptions } from "@shared/sourceDescriptions";
import { ArrowLeft, Check, Download, MessageCircle, MonitorPlay, MoveHorizontal, Plus, ShieldCheck } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useCart } from "@/contexts/CartContext";
import { formatUSD } from "@/components/ArtworkCard";
import { useEffect, useMemo, useState } from "react";

export default function Artwork() {
  const [, params] = useRoute("/artwork/:handle");
  const artwork = params?.handle ? catalogByHandle.get(params.handle) : undefined;
  const { addArtwork } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);
  if (!artwork) return <section className="empty-state"><h1>That work is not in the gallery.</h1><Link href="/catalog" className="button button--dark">Return to gallery</Link></section>;
  const media = artworkMediaByHandle[artwork.handle];
  const slides = useMemo(() => [
    { url: artwork.image, label: "Artwork", kind: "artwork" as const },
    ...(media?.gallery ?? []),
    ...(media?.video ? [{ url: media.video, label: "Motion preview", kind: "video" as const }] : []),
  ], [artwork.image, media?.gallery, media?.video]);
  const activeSlide = slides[activeIndex] ?? slides[0];
  const mockupCount = media?.gallery.filter(item => item.kind === "mockup").length ?? 0;
  const sourceDescription = sourceArtworkDescriptions[artwork.handle];
  const whatsappHref = `https://wa.me/96170124873?text=${encodeURIComponent(`Hello George, I am interested in “${artwork.title}” from the ${artwork.collection} collection (${formatUSD(artwork.priceCents)}). Could you please explain the payment and delivery process?`)}`;
  useEffect(() => {
    setActiveIndex(0);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [artwork.handle]);

  return <section className="artwork-detail">
    <Link href="/catalog" className="back-link"><ArrowLeft size={16} /> Back to gallery</Link>
    <div className="artwork-detail__grid">
      <div className="artwork-detail__media">
        <div className="artwork-detail__image-wrap">{activeSlide.kind === "video" ? <video controls playsInline preload="metadata" poster={artwork.image}><source src={activeSlide.url} type="video/mp4" />Your browser does not support video playback.</video> : <img src={activeSlide.url} alt={`${artwork.title} — ${activeSlide.label}`} />}</div>
        <p className="artwork-media__gesture"><MoveHorizontal size={15} /> Browse artwork, room mock-ups, motion preview, and print sizes together</p>
        <div className="artwork-media__strip" aria-label={`${artwork.title} media gallery`}>
          {slides.map((slide, index) => <button className={index === activeIndex ? "active" : ""} type="button" onClick={() => setActiveIndex(index)} key={slide.url} aria-label={`Show ${slide.label}`}>{slide.kind === "video" ? <span className="artwork-media__video-thumb"><MonitorPlay size={20} /> Motion preview</span> : <img src={slide.url} alt="" />}<span>{slide.label}</span></button>)}
        </div>
      </div>
      <div className="artwork-detail__content">
        <p className="eyebrow">{artwork.collection}</p>
        <h1>{artwork.title}</h1>
        <p className="artwork-detail__price">{formatUSD(artwork.priceCents)}</p>
        <p className="artwork-detail__description">{artwork.description}</p>
        <div className="artwork-detail__tags">{artwork.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="artwork-included" aria-label="Included artwork media"><span>Included with this work</span><p>{mockupCount} room mock-up{mockupCount === 1 ? "" : "s"} · Motion preview · Print-size guide</p></div>
        <div className="artwork-detail__actions">
          <button className="button button--dark button--wide" onClick={() => addArtwork(artwork.handle)}><Plus size={18} /> Add to my selection</button>
          <a className="button button--whatsapp button--wide" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Questions? Chat about this portrait</a>
        </div>
        <p className="microcopy">No physical product will be shipped. You will receive a high-resolution digital file after payment confirmation.</p>
        <div className="detail-promises">
          <div><Download size={19} /><p><strong>Digital download</strong><br />High-resolution artwork for your own print project.</p></div>
          <div><ShieldCheck size={19} /><p><strong>Manual confirmation</strong><br />Payment proof is reviewed before delivery.</p></div>
          <div><Check size={19} /><p><strong>Print your way</strong><br />Choose your preferred paper, frame, and local print partner.</p></div>
        </div>
      </div>
    </div>
    <section className="artwork-media-notes artwork-description-section">
      <div><p className="eyebrow">About the work</p><h2>{sourceDescription?.sections[0]?.heading ?? "Made to live beautifully in your space."}</h2><p>Artwork, room mock-ups, the motion preview, and print-size guide are grouped together above. Explore the full story of this work below.</p></div>
      <div className="artwork-media-notes__content">
        {sourceDescription?.sections.map(section => <article className="artwork-description-section__entry" key={section.heading}><h3>{section.heading}</h3>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets.length > 0 && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}</article>)}
        {!sourceDescription && <div className="print-guidance"><p className="eyebrow">Print guidance</p><h3>Choose your print size with confidence.</h3><p>The supplied print-size guide is included in the media strip. After payment confirmation, you will receive the high-resolution file to print through a provider and frame of your choice.</p></div>}
      </div>
    </section>
  </section>;
}
