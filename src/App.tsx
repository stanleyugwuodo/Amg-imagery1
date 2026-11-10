import { useState } from 'react';

const imageBase = 'https://amj-imagery-bcydmt.v2.appdeploy.ai/resources/';
const photos = [
  { src: imageBase + 'amj-portrait-1.jpg', alt: 'Editorial portrait in an elegant white outfit and wide-brimmed hat', title: 'Elegance in white', category: 'Portraiture' },
  { src: imageBase + 'amj-portrait-2.jpg', alt: 'Portrait in a white and green NYSC shirt', title: 'Everyday stories', category: 'Portraiture' },
  { src: imageBase + 'amj-portrait-3.jpg', alt: 'Creative studio portrait with a colourful bouquet', title: 'Colour & character', category: 'Creative direction' },
  { src: imageBase + 'amj-portrait-4.jpg', alt: 'Beauty portrait with a sleek high bun and denim corset', title: 'The beauty edit', category: 'Beauty' },
];
const services = [
  ['01', 'Photography', 'Portraits, beauty, fashion and the moments you want to keep.'],
  ['02', 'Cinematography', 'Moving images with atmosphere, emotion and a point of view.'],
  ['03', 'Graphics & Design', 'Thoughtful visuals that give your ideas a distinct voice.'],
  ['04', 'Branding', 'A considered identity that makes your business recognisable.'],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const whatsapp = 'https://wa.me/2348131895475';
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement"><span>INDEPENDENT CREATIVE STUDIO</span><a href={whatsapp} target="_blank" rel="noreferrer">AVAILABLE FOR SELECT PROJECTS <b>↗</b></a></div>
      <header className="site-nav">
        <a className="brand" href="#home" aria-label="AMJ Imagery home">AMJ<span>®</span><small>IMAGERY</small></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? 'CLOSE −' : 'MENU +'}</button>
        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'}>
          <a href="#work" onClick={closeMenu}>Selected work</a><a href="#about" onClick={closeMenu}>Studio</a><a href="#services" onClick={closeMenu}>Services</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="kicker"><i /> PHOTOGRAPHY · FILM · CREATIVE</p>
          <h1>Images with<br /><em>a point of view.</em></h1>
          <p className="hero-description">We create thoughtful imagery and visual identities for people, stories and brands worth remembering.</p>
          <a className="text-cta" href="#work">DISCOVER THE WORK <span>↘</span></a>
          <div className="hero-foot"><span>BASED IN NIGERIA</span><span>01 / 04 — THE PORTFOLIO</span></div>
        </div>
        <div className="hero-visual">
          <img src={photos[0].src} alt={photos[0].alt} fetchPriority="high" decoding="async" />
          <div className="hero-photo-label"><span>AMJ IMAGERY</span><span>FIG. 01 — PORTRAIT</span></div>
          <div className="hero-side-note">ART DIRECTION<br />& VISUAL STORYTELLING</div>
        </div>
        <div className="hero-index">01<span>—</span>04</div>
      </section>

      <section className="manifesto" id="about">
        <div className="manifesto-label"><span className="section-no">01 / THE STUDIO</span><span className="tiny-rule" /></div>
        <div className="manifesto-content"><p className="kicker">A CREATIVE EYE. A CLEAR INTENTION.</p><h2>Not just what<br />you see. <em>What<br />you feel.</em></h2><p>AMJ Imagery is an independent creative studio bringing people, ideas and brands to life through photography, cinematography, design and branding. Every frame is an opportunity to make something meaningful.</p></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><div><span className="section-no">02 / SELECTED WORK</span><h2>A few frames.<br /><em>A thousand words.</em></h2></div><p>Portraits and creative explorations from the AMJ Imagery collection.</p></div>
        <div className="work-grid">
          {photos.map((photo, index) => <button className={'work-card work-card-' + (index + 1)} key={photo.src} onClick={() => setActiveImage(index)} aria-label={'View ' + photo.title}>
            <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
            <span className="work-overlay"><span>{photo.category}</span><strong>{photo.title}</strong><i>↗</i></span>
            <span className="work-number">0{index + 1}</span>
          </button>)}
        </div>
        <div className="work-bottom"><span>SELECTED VISUALS · AMJ IMAGERY</span><span>MORE STORIES COMING SOON</span></div>
      </section>

      <section className="services-section" id="services">
        <div className="services-intro"><span className="section-no">03 / WHAT WE DO</span><h2>Good work<br />starts with <em>good<br />ideas.</em></h2><p>From a single portrait to a complete brand world, we bring care and craft to every detail.</p></div>
        <div className="service-list">{services.map(([number, title, copy]) => <article className="service-item" key={number}><span className="service-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="service-symbol">↗</span></article>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <span className="section-no">04 / START A CONVERSATION</span><p className="kicker">HAVE SOMETHING IN MIND?</p><h2>Let's make<br /><em>it memorable.</em></h2><div className="contact-bottom"><p>Have a project, an idea or a story to tell?<br />We'd love to hear about it.</p><a href={whatsapp} target="_blank" rel="noreferrer">START A WHATSAPP CHAT <span>↗</span></a></div>
      </section>
      <footer className="site-footer"><a className="brand" href="#home">AMJ<span>®</span><small>IMAGERY</small></a><span>PHOTOGRAPHY · CINEMATOGRAPHY · DESIGN</span><span>© {new Date().getFullYear()} AMJ IMAGERY</span><a href="#home">BACK TO TOP ↑</a></footer>

      {activeImage !== null && <div className="image-viewer" role="dialog" aria-modal="true" aria-label="Portfolio image viewer" onClick={() => setActiveImage(null)}>
        <button className="viewer-close" onClick={() => setActiveImage(null)} aria-label="Close">×</button>
        <button className="viewer-arrow viewer-prev" onClick={event => { event.stopPropagation(); setActiveImage((activeImage + photos.length - 1) % photos.length); }} aria-label="Previous image">←</button>
        <img src={photos[activeImage].src} alt={photos[activeImage].alt} decoding="async" onClick={event => event.stopPropagation()} />
        <button className="viewer-arrow viewer-next" onClick={event => { event.stopPropagation(); setActiveImage((activeImage + 1) % photos.length); }} aria-label="Next image">→</button>
        <span className="viewer-caption">{photos[activeImage].title} — 0{activeImage + 1} / 04</span>
      </div>}
    </main>
  );
}
