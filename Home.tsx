import { ArrowDownRight, ArrowUpRight, Download, Frame, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { artworkCollections, catalog } from "@shared/catalog";
import ArtworkCard from "@/components/ArtworkCard";
import PaymentInstructions from "@/components/PaymentInstructions";
import CollectionRail from "@/components/CollectionRail";

const featureWorks = [catalog[0], catalog[6], catalog[13], catalog[31]];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero__visual"><img src={catalog[6].image} alt="Where Love Rests artwork" /></div>
      <div className="hero__wash" />
      <div className="hero__content">
        <p className="eyebrow eyebrow--light">Digital Art Portraits · Independent Gallery</p>
        <h1><span>Where Art</span><em>Meets Emotion.</em></h1>
        <div className="hero__bottom">
          <p>Curated digital portraits and wall art for homes, restaurants, and spaces that hold a story.</p>
          <Link href="/catalog" className="button button--light">Explore the gallery <ArrowDownRight size={18} /></Link>
        </div>
      </div>
      <div className="hero__edition">Curated works<br />for personal spaces</div>
    </section>

    <section className="statement" id="story">
      <p className="eyebrow">The gallery note</p>
      <div><h2 className="statement__headline--65"><span>There is a <em>language</em></span><br /><span>between a room and</span><br /><span>the art you choose.</span></h2><p>Digital Art Portraits brings together works made to stay close: a remembered coast, a quiet embrace, a burst of botanical color. Every piece is a ready-made digital artwork selected for beauty, visual harmony, and the emotions that make a space yours.</p></div>
    </section>

    <section className="about-section" id="story">
      <div className="about-section__heading"><p className="eyebrow">About Digital Art Portraits</p><h2>Elevate your space with <em>timeless digital art.</em></h2></div>
      <div className="about-section__copy">
        <p>Welcome to Digital Art Portraits, a gallery of ready-made digital portrait artworks where artistry meets elegance. We curate a premium collection of digital art designed to transform a room into a gallery of refined beauty.</p>
        <div><h3>Our collection</h3><p>From the minimalist sophistication of single line art to botanical and floral pieces, vintage portraits, angelic works, romantic cubist studies, and Mediterranean Light &amp; Bloom, there is a work for every aesthetic. Each piece is selected to enhance an interior with a modern editorial sensibility.</p></div>
        <div><h3>Our vision</h3><p>We believe exceptional art should be accessible. Our purpose is to offer premium digital portraits that elevate a home, office, or creative space and reflect the taste of the person who chooses them.</p></div>
        <p className="about-section__delivery">Every artwork is a digital file. Send your selection to George first, complete manual payment only after speaking with him, and receive the matching high-resolution file once payment is verified.</p>
      </div>
    </section>

    <section className="featured-section">
      <div className="section-heading"><div><p className="eyebrow">Selected works</p><h2>Begin with a<br /><em>feeling.</em></h2></div><Link href="/catalog" className="text-link">View the full gallery <ArrowUpRight size={16} /></Link></div>
      <div className="featured-grid">{featureWorks.map((artwork, index) => <ArtworkCard artwork={artwork} index={index} key={artwork.handle} />)}</div>
    </section>

    <section className="home-collections">
      <div className="home-collections__heading"><p className="eyebrow">Browse by atmosphere</p><h2>Collections,<br /><em>each with a voice.</em></h2><p>Begin with the artwork itself, then move through its full story on the detail page.</p></div>
      {artworkCollections.map(name => <CollectionRail name={name} works={catalog.filter(artwork => artwork.collection === name)} key={name} />)}
    </section>

    <section className="collection-callout collection-callout--gallery-film">
      <div className="collection-callout__image collection-callout__image--gallery-film"><div className="collection-callout__portrait-frame"><video className="collection-callout__video" controls loop playsInline preload="metadata" aria-label="Digital Art Portraits multilingual gallery video"><source src="/manus-storage/digital-art-portraits-multilingual-gallery_c550b059.mp4" type="video/mp4" />Your browser does not support this gallery video.</video></div></div>
      <div className="collection-callout__content"><p className="eyebrow">A varied collection</p><h2>From sunlit places to <em>inner worlds.</em></h2><p>Explore Mediterranean scenes, modern portraiture, celestial studies, vintage moments, florals, and minimal linework. Discover one piece or build a wall around a whole atmosphere.</p><Link href="/catalog" className="button button--outline">Visit the full gallery <ArrowUpRight size={18} /></Link></div>
    </section>

    <section className="delivery-section" id="delivery">
      <div className="delivery-section__intro"><p className="eyebrow">Digital, by design</p><h2>Made for your<br /><em>own way of living.</em></h2><p>Created for homes, restaurants, and hospitality interiors, these are digital artworks rather than physical prints. First send your selection and contact details to George, then make manual payment after he confirms the receiving details. Your high-resolution file is released only after verification.</p></div>
      <div className="delivery-steps">
        <div><span>01</span><Download size={22} /><h3>Choose and share</h3><p>Add portraits to your selection, enter your contact details, and send the request to George on WhatsApp.</p></div>
        <div><span>02</span><ShieldCheck size={22} /><h3>Speak, then pay</h3><p>George confirms the receiving details. Pay with Whish Money, Western Union, or OMT, then upload your reference or proof.</p></div>
        <div><span>03</span><Frame size={22} /><h3>Verified delivery</h3><p>After George confirms the transfer on the owner page, receive your digital file and print it your way.</p></div>
      </div>
    </section>

    <PaymentInstructions />

    <section className="faq-section" id="faq">
      <div><p className="eyebrow">Before you choose</p><h2>Questions, answered <em>clearly.</em></h2><a className="text-link" href="https://wa.me/96170124873" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Talk to George on WhatsApp</a></div>
      <div className="faq-list">
        <details open><summary>When will I receive my artwork?</summary><p>First send your selection to George on WhatsApp. Your request remains pending until payment is independently checked. After George confirms the transfer, your purchased digital artwork is released securely through your private order page.</p></details>
        <details><summary>Is a frame or a physical print included?</summary><p>No. Your purchase is a digital artwork file only. This gives you freedom to choose the size, paper, print provider, and framing that suit your space.</p></details>
        <details><summary>How do I prove that I paid?</summary><p>After George confirms the payment details, pay using your preferred manual method. Then open your private order page with your order number and email address to submit a transfer reference and attach a screenshot or PDF payment proof for review.</p></details>
        <details><summary>Can I use an artwork for commercial projects?</summary><p>Each purchase is intended for personal display and printing. Please contact George before any commercial, resale, or large-scale reproduction use.</p></details>
      </div>
    </section>
  </>;
}
