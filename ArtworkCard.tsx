import type { Artwork } from "@shared/catalog";
import { artworkMediaByHandle } from "@shared/artworkMedia";
import { buildCardMediaSlides } from "@shared/cardMedia";
import { isHorizontalMediaSwipe } from "@shared/mediaGesture";
import { ArrowLeft, ArrowRight, ArrowUpRight, Images, MessageCircle, Play, Plus, Ruler } from "lucide-react";
import { Link } from "wouter";
import { useRef, useState } from "react";
import { useCart } from "@/contexts/CartContext";

export function formatUSD(cents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

export default function ArtworkCard({ artwork, index = 0 }: { artwork: Artwork; index?: number }) {
  const { addArtwork } = useCart();
  const media = artworkMediaByHandle[artwork.handle];
  const trackRef = useRef<HTMLDivElement>(null);
  const gestureStartRef = useRef<{ x: number; y: number } | null>(null);
  const suppressArtworkClickRef = useRef(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const slides = buildCardMediaSlides(artwork, media);

  const moveTo = (nextIndex: number) => {
    const target = (nextIndex + slides.length) % slides.length;
    const track = trackRef.current;
    if (track) track.scrollTo({ left: track.clientWidth * target, behavior: "smooth" });
    setActiveSlide(target);
  };

  const handleMediaPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary) return;
    gestureStartRef.current = { x: event.clientX, y: event.clientY };
  };

  const clearMediaPointer = () => {
    gestureStartRef.current = null;
  };

  const handleMediaPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = gestureStartRef.current;
    gestureStartRef.current = null;
    if (!start || !event.isPrimary) return;
    if (!isHorizontalMediaSwipe(start, { x: event.clientX, y: event.clientY })) return;
    suppressArtworkClickRef.current = true;
    moveTo(activeSlide + (event.clientX < start.x ? 1 : -1));
    window.setTimeout(() => { suppressArtworkClickRef.current = false; }, 0);
  };

  const addToCart = () => {
    addArtwork(artwork.handle);
    setAddedToCart(true);
  };

  return (
    <article className={`artwork-card artwork-card--${index % 3} ${artwork.collection === "Mediterranean" ? "artwork-card--mediterranean" : ""}`}>
      <div className="artwork-card__image-wrap artwork-card__carousel" aria-roledescription="carousel" aria-label={`${artwork.title} media`}>
        <div className="artwork-card__media-track" ref={trackRef} onPointerDown={handleMediaPointerDown} onPointerUp={handleMediaPointerUp} onPointerCancel={clearMediaPointer}>
          {slides.map(slide => <Link href={`/artwork/${artwork.handle}`} className="artwork-card__media-slide" key={`${slide.kind}-${slide.url}`} aria-label={`Open ${artwork.title}`} onClick={event => { if (suppressArtworkClickRef.current) { event.preventDefault(); event.stopPropagation(); } }}>
            {slide.kind === "video" ? <><video className="artwork-card__carousel-video" muted autoPlay loop playsInline preload="metadata" poster={artwork.image} aria-hidden="true" tabIndex={-1}><source src={slide.url} type="video/mp4" />Video preview.</video><span className="artwork-card__video-status" aria-hidden="true"><Play size={18} /> Motion preview</span></> : <img src={slide.url} alt={`${artwork.title} — ${slide.kind === "artwork" ? "complete artwork" : slide.label}`} className="artwork-card__carousel-image" />}
          </Link>)}
        </div>
        <span className="artwork-card__media-badge"><Images size={12} /> Swipe media</span>
        <div className="artwork-card__carousel-controls" aria-label="Artwork media controls">
          <button type="button" onClick={() => moveTo(activeSlide - 1)} aria-label="Previous media"><ArrowLeft size={13} /></button>
          <button type="button" onClick={() => moveTo(activeSlide + 1)} aria-label="Next media"><ArrowRight size={13} /></button>
        </div>
        <div className="artwork-card__carousel-dots" aria-label="Artwork media position">{slides.map((slide, slideIndex) => <button key={slide.url} type="button" onClick={() => moveTo(slideIndex)} className={slideIndex === activeSlide ? "active" : ""} aria-label={`Show ${slide.label}`} />)}</div>
        <Link href={`/artwork/${artwork.handle}`} className="artwork-card__view" aria-label={`View ${artwork.title}`}>View work <ArrowUpRight size={15} /></Link>
      </div>
      <div className="artwork-card__meta">
        <div>
          <p className="eyebrow">{artwork.collection}</p>
          <Link href={`/artwork/${artwork.handle}`} className="artwork-card__title">{artwork.title}</Link>
          <p className="artwork-card__price">{formatUSD(artwork.priceCents)}</p>
          <p className="artwork-card__media-cue"><Images size={11} /> Mock-ups <Play size={10} /> Video <Ruler size={11} /> Sizes</p>
        </div>
        <div className="artwork-card__actions">
          <a className="round-action round-action--whatsapp" href={`https://wa.me/96170124873?text=${encodeURIComponent(`Hello George, I am interested in “${artwork.title}” from the ${artwork.collection} collection (${formatUSD(artwork.priceCents)}). Could you please explain the payment and delivery process?`)}`} target="_blank" rel="noreferrer" aria-label={`Ask George about ${artwork.title} on WhatsApp`}><MessageCircle size={16} /></a>
          <button className="round-action" onClick={addToCart} aria-label={`Add ${artwork.title} to my selection`}><Plus size={18} /></button>
        </div>
      </div>
      {addedToCart && <div className="artwork-card__cart-confirmation" role="status"><span>Added to selection</span><Link href="/checkout">View selection</Link></div>}
    </article>
  );
}
