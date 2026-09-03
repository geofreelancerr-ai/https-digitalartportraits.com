import type { ReactNode } from "react";
import { ArrowUp, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useCart } from "@/contexts/CartContext";
import { searchCatalog } from "@shared/catalogSearch";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "About", href: "/#story" },
  { label: "Contact", href: "/#contact" },
  { label: "Pay", href: "/#how-to-pay" },
  { label: "FAQ", href: "/#faq" },
];

const logoUrl = "/manus-storage/digital-art-portraits-logo_a2018e91.png";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [location] = useLocation();
  const { totalQuantity } = useCart();
  const results = searchCatalog(query).slice(0, 6);
  const isTransparentHeader = location === "/" && !hasScrolled;

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 72);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const returnToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${isTransparentHeader ? "site-header--transparent" : "site-header--scrolled"}`}>
        <div className="header-iconbar">
          <div className="header-iconbar__side header-iconbar__side--left">
            <button className="header-icon-button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={26} /> : <Menu size={27} />}</button>
            <button className="header-icon-button" onClick={() => setSearchOpen(true)} aria-label="Search the gallery"><Search size={26} /></button>
          </div>
          <Link href="/" className="header-logo" aria-label="Digital Art Portraits home"><img src={logoUrl} alt="Digital Art Portraits" /></Link>
          <div className="header-iconbar__side header-iconbar__side--right">
            <a href="/#contact" className="header-icon-button" aria-label="Contact George"><UserRound size={25} /></a>
            <Link href="/checkout" className="header-cart" aria-label={`My selection, ${totalQuantity} items`}><ShoppingBag size={26} /><b>{totalQuantity}</b></Link>
          </div>
        </div>
        <nav className="source-nav" aria-label="Primary navigation">{navItems.map(item => <a className={location === item.href ? "active" : ""} href={item.href} key={item.label}>{item.label}</a>)}</nav>
        {open && <nav className="mobile-nav" aria-label="Mobile navigation">
          <p className="mobile-nav__label">Explore Digital Art Portraits</p>
          {navItems.map((item, index) => <a href={item.href} onClick={() => setOpen(false)} key={item.label}><span>0{index + 1}</span>{item.label}</a>)}
          <Link href="/checkout" onClick={() => setOpen(false)}><span>07</span>Your selection ({totalQuantity})</Link>
          <a className="mobile-nav__contact" href="https://wa.me/96170124873" target="_blank" rel="noreferrer"><span>?</span>Questions? WhatsApp George</a>
        </nav>}
        {hasScrolled && <button className="return-to-top" type="button" onClick={returnToTop}><ArrowUp size={15} /> Back to top</button>}
        {searchOpen && <div className="header-search-overlay" role="dialog" aria-modal="true" aria-label="Search the gallery">
          <div className="header-search-overlay__panel">
            <div className="header-search-overlay__top"><label htmlFor="gallery-search">Search the gallery</label><button type="button" onClick={closeSearch} aria-label="Close search"><X size={23} /></button></div>
            <input id="gallery-search" autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder="Search titles, collections, or themes" />
            {query && <div className="header-search-results">{results.length ? results.map(result => <Link href={`/artwork/${result.handle}`} onClick={closeSearch} key={result.handle}><img src={result.image} alt="" /><span><small>{result.collection}</small><strong>{result.title}</strong></span></Link>) : <p>No works match “{query}”.</p>}</div>}
            {!query && <p className="header-search-hint">Try “Mediterranean”, “angel”, “flower”, or a work title.</p>}
          </div>
        </div>}
      </header>
      <main>{children}</main>
      <footer id="contact" className="site-footer">
        <div className="footer-brand"><img src={logoUrl} alt="Digital Art Portraits" /><p>Digital Art Portraits<br /><i>Where Art<br />Meets Emotion.</i></p></div>
        <div className="footer-links">
          <a href="/catalog">Explore the gallery</a>
          <a href="/#delivery">Digital delivery</a>
          <a href="/#faq">Frequently asked questions</a>
          <a href="mailto:geofreelancerr@gmail.com">geofreelancerr@gmail.com</a>
        </div>
        <div className="footer-contact">
          <p>Questions before you buy?</p>
          <a href="https://wa.me/96170124873" target="_blank" rel="noreferrer">WhatsApp George Jamous</a>
          <small>+961 70 124 873</small>
        </div>
        <p className="footer-fineprint">© {new Date().getFullYear()} Digital Art Portraits. Digital works only; no physical item is shipped.</p>
      </footer>
    </div>
  );
}
