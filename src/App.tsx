import { useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Photography',
    copy: 'Portraits, beauty, fashion and moments worth keeping.',
  },
  {
    number: '02',
    title: 'Cinematography',
    copy: 'Cinematic stories crafted with feeling, detail and intention.',
  },
  {
    number: '03',
    title: 'Graphics & Design',
    copy: 'Visual identities and designs that make your brand memorable.',
  },
  {
    number: '04',
    title: 'Branding',
    copy: 'A distinctive look and a consistent visual voice for your business.',
  },
];

const imageBase = 'https://amj-imagery-bcydmt.v2.appdeploy.ai/resources/';

const portraits = [
  {
    src: imageBase + 'amj-portrait-1.jpg',
    alt: 'Editorial portrait in an elegant white outfit and wide-brimmed hat',
    label: 'Elegance in white',
    type: 'Portrait',
  },
  {
    src: imageBase + 'amj-portrait-2.jpg',
    alt: 'Portrait in a white and green NYSC shirt',
    label: 'Everyday stories',
    type: 'Portrait',
  },
  {
    src: imageBase + 'amj-portrait-3.jpg',
    alt: 'Creative studio portrait with a colourful bouquet',
    label: 'Colour & character',
    type: 'Creative',
  },
  {
    src: imageBase + 'amj-portrait-4.jpg',
    alt: 'Beauty portrait with a sleek high bun and denim corset',
    label: 'The beauty edit',
    type: 'Beauty',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const whatsapp = 'https://wa.me/2348131895475';

  return (
    <main>
      <div className="topline">
        <span>AMJ IMAGERY</span>
        <span>VISUAL STORIES · MADE WITH INTENTION</span>
        <a href={whatsapp}>LET'S TALK ↗</a>
      </div>
      <header className="nav">
        <a className="wordmark" href="#home">
          AMJ<span>.</span>
          <small>IMAGERY</small>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? 'CLOSE −' : 'MENU +'}
        </button>
        <nav className={menuOpen ? 'navlinks open' : 'navlinks'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">PHOTOGRAPHY · CINEMATOGRAPHY · CREATIVE</p>
          <h1>
            We make
            <br />
            <em>moments</em>
            <br />
            feel timeless.
          </h1>
          <p className="hero-intro">
            Thoughtful imagery. Beautiful stories. A creative eye for the
            details that make you, you.
          </p>
          <a className="round-link" href="#portfolio">
            EXPLORE OUR WORK <span>↘</span>
          </a>
          <div className="hero-index">
            01 — 04 <span>CREATIVE STUDIO / NIGERIA</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-image">
            <img
              src="/resources/amj-portrait-1.jpg"
              alt="AMJ Imagery editorial portrait"
            />
          </div>
          <div className="hero-stamp">
            A<br />M<br />J
          </div>
          <p className="image-note">
            PORTRAITS WITH
            <br />
            PRESENCE & PURPOSE
          </p>
        </div>
      </section>

      <section className="intro section-pad" id="about">
        <p className="eyebrow">A LITTLE ABOUT US</p>
        <div>
          <h2>
            More than a picture.
            <br />
            <em>A feeling that stays.</em>
          </h2>
          <p className="intro-copy">
            AMJ Imagery is a creative visual brand bringing ideas and people to
            life through photography, cinematography, graphics and branding. We
            believe every frame has a story — and every story deserves to be
            seen beautifully.
          </p>
          <a className="text-link" href="#contact">
            CREATE WITH US <span>↗</span>
          </a>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>
              Creative work,
              <br />
              <em>beautifully done.</em>
            </h2>
          </div>
          <p className="side-note">
            From the first idea to the final frame, we bring clarity, craft and
            character to every project.
          </p>
        </div>
        <div className="service-list">
          {services.map(service => (
            <article className="service-row" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio section-pad" id="portfolio">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED VISUALS</p>
            <h2>
              Frames worth
              <br />
              <em>remembering.</em>
            </h2>
          </div>
          <p className="side-note">
            A selection of portrait and creative work from the AMJ Imagery
            collection. Tap any frame to view it larger.
          </p>
        </div>
        <div className="gallery">
          {portraits.map((photo, index) => (
            <button
              className={'gallery-item gallery-' + (index + 1)}
              key={photo.src}
              onClick={() => setActiveImage(index)}
            >