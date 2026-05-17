import { useState, useEffect, useRef } from 'react';
import logoImg from './assets/logo.png';
import './App.css';
import {
  NAV_LINKS, HERO_SLIDES, CERTIFICATIONS, DISTRIBUTORS,
  SERVICES, PRODUCTS, CLIENTS, BLOG_POSTS, STATS, COMPANY
} from './data/content';

/* ─── Scroll Animation Hook ─────────────────── */
function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Counter Animation Hook ─────────────────── */
function useCounter(target: number, started: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / 60;
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(id); }
      else setVal(Math.floor(start));
    }, 25);
    return () => clearInterval(id);
  }, [target, started]);
  return val;
}

/* ─── StatCard ───────────────────────────────── */
function StatCard({ target, label, suffix }: { target: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const val = useCounter(target, started);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-num">{val}<span>{suffix}</span></div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ─── Main App ───────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useScrollAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Auto-advance hero */
  useEffect(() => {
    const id = setInterval(() => setHeroIdx(i => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'products', 'clients', 'blog', 'contact'];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.4 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const slide = HERO_SLIDES[heroIdx];

  /* Build doubled marquee arrays */
  const certScrollItems = CERTIFICATIONS.filter(c => c.badge_text !== 'MSME');
  const msmeItem = CERTIFICATIONS.find(c => c.badge_text === 'MSME');

  const certItems = [...certScrollItems, ...certScrollItems, ...certScrollItems, ...certScrollItems, ...certScrollItems, ...certScrollItems];
  const distItems = [...DISTRIBUTORS, ...DISTRIBUTORS, ...DISTRIBUTORS, ...DISTRIBUTORS, ...DISTRIBUTORS, ...DISTRIBUTORS];

  return (
    <>
      {/* ══════════════ NAVBAR ══════════════ */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#home" className="nav-logo">
          <img src={logoImg} alt="Sahyadri Enterprises" />
        </a>
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className={activeSection === l.href.slice(1) ? 'active' : ''}>{l.label}</a>
          ))}
        </div>
        <div className="nav-cta-group">
          <span className="nav-phone"><i className="fas fa-phone-alt" />{COMPANY.phone}</span>
          <a href="#contact" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '0.82rem' }}>Get a Quote</a>
        </div>
        <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>)}
        <a href="tel:9689804094" style={{ color: '#e8a020' }}><i className="fas fa-phone-alt" style={{ marginRight: 8 }} />9689804094</a>
        <a href="#contact" className="btn btn-primary" style={{ marginTop: 8 }} onClick={() => setMobileOpen(false)}>Get a Quote</a>
      </div>

      {/* ══════════════ HERO ══════════════ */}
      <section id="home" className="hero">
        <div className="hero-bg" />
        <div className="hero-bg-img" style={{ backgroundImage: `url(${slide.image})` }} />
        <div className="hero-dots" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-inner">
            <div>
              <div className="hero-tag">{slide.tag}</div>
              <h1 className="hero-title">
                {slide.title}<span>{slide.titleAccent}</span>
              </h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-btns">
                <a href={slide.ctaPrimary.href} className="btn btn-primary"><i className="fas fa-arrow-right" />{slide.ctaPrimary.label}</a>
                <a href={slide.ctaSecondary.href} className="btn btn-outline">{slide.ctaSecondary.label}</a>
              </div>
              <div className="hero-stats">
                {STATS.map(s => (
                  <div key={s.label} className="hero-stat-item">
                    <div className="hero-stat-num">{s.target}<span>{s.suffix}</span></div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-img-wrap">
              <img src={slide.image} alt={slide.titleAccent} />
              <div className="hero-img-badge">
                <i className="fas fa-shield-alt" />
                <div className="hero-img-badge-text">
                  <strong>ISO Certified</strong>
                  Trusted Since 2000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-indicators">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} className={`hero-dot${heroIdx === i ? ' active' : ''}`} onClick={() => setHeroIdx(i)} />
          ))}
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* ══════════════ MARQUEE (Certifications + Distributors) ══════════════ */}
      <div className="marquee-section">
        {/* Certifications */}
        <div className="marquee-block" style={{ position: 'relative' }}>
          <div className="marquee-header"><span className="marquee-header-pill">CERTIFICATIONS</span></div>
          <div className="marquee-track">
            <div className="marquee-inner">
              {certItems.map((c, i) => {
                const badgeClass = `marquee-logo-card cert-${c.badge_text.toLowerCase().replace(/[^a-z0-msme]/g, '')}`;
                return (
                  <div className={badgeClass} key={i}>
                    {c.badge_text === 'CE' && <div className="logo-text-badge ce-logo">CE</div>}
                    {c.badge_text === 'GeM' && <div className="logo-text-badge gem-logo"><i className="fas fa-star" style={{ color: '#e8a020', fontSize: '1rem', marginRight: '4px' }}></i><span>Ge</span><span style={{ color: '#d32f2f' }}>M</span></div>}
                    {c.badge_text === 'ISO' && <div className="logo-text-badge iso-logo">ISO</div>}
                    {c.badge_text === 'NSIC' && <div className="logo-text-badge nsic-logo">NSIC</div>}
                    {c.badge_text === 'Startup India' && <div className="logo-text-badge startup-logo"><i className="far fa-lightbulb"></i><br />Startup</div>}
                    {c.badge_text === 'T.O.P.' && <div className="logo-text-badge top-logo"><div className="top-triangle"></div>T.O.P.</div>}

                    <div className="logo-sub">{c.name}</div>
                    {c.badge_text !== 'GeM' && c.badge_text !== 'Startup India' && (
                      <div className="logo-sub" style={{ fontSize: '0.55rem', opacity: 0.8 }}>{c.description}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* MSME Fixed Center */}
          {msmeItem && (
            <div className="msme-center-overlay">
              <div className="marquee-logo-card cert-msme" style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.15)', transform: 'scale(1.1)' }}>
                <div className="logo-text-badge msme-logo"><i className="fas fa-dharmachakra"></i><br />MSME</div>
                <div className="logo-sub">{msmeItem.name}</div>
              </div>
            </div>
          )}
        </div>
        {/* Authorised Distributors */}
        <div className="marquee-block">
          <div className="marquee-header"><span className="marquee-header-pill">AUTHORIZED DISTRIBUTORS</span></div>
          <div className="marquee-track">
            <div className="marquee-inner" style={{ animationDuration: '40s' }}>
              {distItems.map((d, i) => {
                const isThermofisher = d.name.toLowerCase().includes('thermofisher');
                const isAnton = d.name.toLowerCase().includes('anton');
                const isCole = d.name.toLowerCase().includes('cole');
                const isToshvin = d.name.toLowerCase().includes('toshvin');
                const isAmbinova = d.name.toLowerCase().includes('ambinova');

                return (
                  <div className="marquee-logo-card" key={i}>
                    <div className="logo-text-badge" style={{
                      fontSize: '1.1rem',
                      color: isThermofisher ? '#cc0000' : isAnton ? '#0033a0' : isCole ? '#005b9f' : isToshvin ? '#2e7d32' : isAmbinova ? '#1a6da0' : '#1a4a73',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {d.name}
                    </div>
                    <div className="logo-sub" style={{ marginTop: '4px' }}>{d.tagline}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ ABOUT ══════════════ */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-inner">
            <div data-animate>
              <div className="about-img-wrap">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80" alt="Lab" />
                <div className="about-img-accent">
                  <strong>7+</strong>
                  <span>Years of Trust</span>
                </div>
              </div>
            </div>
            <div data-animate data-delay="200">
              <span className="section-label">About Us</span>
              <h2 className="section-title">Your Trusted Lab <span>Equipment Partner</span></h2>
              <p className="section-subtitle">
                Sahyadri Enterprises is a leading supplier of laboratory instruments, chemicals, and equipment in Maharashtra — serving research institutions, hospitals, industries, and educational laboratories since 2000.
              </p>
              <div className="about-features">
                {[
                  { icon: 'fa-certificate', title: 'ISO & MSME Certified', desc: 'Government-recognized, certified quality standards.' },
                  { icon: 'fa-handshake', title: 'Authorised Distributor', desc: 'Official distributor for Thermolab, Labindia, iGene & Tempo.' },
                  { icon: 'fa-headset', title: 'After-Sales Support', desc: 'Dedicated AMC, calibration & technical support team.' },
                ].map(f => (
                  <div className="about-feature" key={f.title}>
                    <div className="about-feature-icon"><i className={`fas ${f.icon}`} /></div>
                    <div className="about-feature-text"><strong>{f.title}</strong><p>{f.desc}</p></div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28, display: 'flex', gap: 14 }}>
                <a href="#contact" className="btn btn-primary">Get a Quote</a>
                <a href="#services" className="btn btn-outline">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {STATS.map(s => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </div>

      {/* ══════════════ SERVICES ══════════════ */}
      <section id="services" className="services section">
        <div className="container">
          <div style={{ textAlign: 'center' }} data-animate>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our <span>Services</span></h2>
            <p className="section-subtitle" style={{ margin: '14px auto 0' }}>Comprehensive laboratory solutions from supply to after-sales support.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div className="service-card" key={s.id} data-animate data-delay={String((i % 3) * 100)}>
                <div className="service-icon"><i className={`fas ${s.icon}`} /></div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PRODUCTS ══════════════ */}
      <section id="products" className="products section">
        <div className="container">
          <div style={{ textAlign: 'center' }} data-animate>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our <span>Products</span></h2>
            <p className="section-subtitle" style={{ margin: '14px auto 0' }}>A wide range of precision laboratory equipment and consumables.</p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((p, i) => (
              <div className="product-card" key={p.id} data-animate data-delay={String((i % 3) * 100)}>
                <div className="product-img">
                  <img src={p.image_url} alt={p.name} />
                  <span className="product-cat">{p.category}</span>
                </div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <a href="#contact" className="product-link">Request Info <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CLIENTS ══════════════ */}
      <section id="clients" className="clients section">
        <div className="container">
          <div style={{ textAlign: 'center' }} data-animate>
            <span className="section-label">Who We Serve</span>
            <h2 className="section-title">Our <span>Clients</span></h2>
            <p className="section-subtitle" style={{ margin: '14px auto 0' }}>Trusted by diverse sectors across Maharashtra and India.</p>
          </div>
          <div className="clients-grid">
            {CLIENTS.map((c, i) => (
              <div className="client-card" key={c.id} data-animate data-delay={String((i % 4) * 100)}>
                <div className="client-icon"><i className={`fas ${c.icon}`} /></div>
                <h3>{c.name}</h3>
                <span>{c.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BLOG ══════════════ */}
      <section id="blog" className="blog section">
        <div className="container">
          <div style={{ textAlign: 'center' }} data-animate>
            <span className="section-label">Latest News</span>
            <h2 className="section-title">From Our <span>Blog</span></h2>
            <p className="section-subtitle" style={{ margin: '14px auto 0' }}>Insights, tips, and updates from the world of laboratory science.</p>
          </div>
          <div className="blog-grid">
            {BLOG_POSTS.map((b, i) => (
              <div className="blog-card" key={b.id} data-animate data-delay={String(i * 100)}>
                <div className="blog-img"><img src={b.image_url} alt={b.title} /></div>
                <div className="blog-body">
                  <span className="blog-tag">{b.tag}</span>
                  <h3>{b.title}</h3>
                  <p>{b.excerpt}</p>
                  <div className="blog-meta">
                    <span><i className="fas fa-calendar-alt" style={{ marginRight: 6 }} />{b.published_at}</span>
                    <a href="#" className="blog-read-more">Read More →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section id="contact" className="contact section">
        <div className="container">
          <div style={{ textAlign: 'center' }} data-animate>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Contact <span>Us</span></h2>
            <p className="section-subtitle" style={{ margin: '14px auto 0' }}>Reach out to us for quotes, enquiries, or support.</p>
          </div>
          <div className="contact-inner">
            <div className="contact-info" data-animate>
              <div className="contact-logo">
                <img src={logoImg} alt="Sahyadri Enterprises" />
              </div>
              <p className="contact-tagline">{COMPANY.tagline}</p>
              {[
                { icon: 'fa-map-marker-alt', label: 'Address', content: COMPANY.address, href: undefined },
                { icon: 'fa-phone-alt', label: 'Mobile', content: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { icon: 'fa-envelope', label: 'Email', content: COMPANY.email, href: `mailto:${COMPANY.email}` },
              ].map(item => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-item-icon"><i className={`fas ${item.icon}`} /></div>
                  <div className="contact-item-text">
                    <span>{item.label}</span>
                    {item.href
                      ? <a href={item.href}>{item.content}</a>
                      : <p>{item.content}</p>}
                  </div>
                </div>
              ))}
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="btn btn-accent" style={{ width: 'fit-content', marginTop: 8 }}>
                <i className="fab fa-whatsapp" /> Chat on WhatsApp
              </a>
            </div>
            <div className="contact-form" data-animate data-delay="200">
              <h3>Send Us an Enquiry</h3>
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-grid">
                  <div className="form-group"><label>Your Name</label><input type="text" placeholder="Full name" /></div>
                  <div className="form-group"><label>Phone</label><input type="tel" placeholder="Mobile number" /></div>
                  <div className="form-group"><label>Email</label><input type="email" placeholder="your@email.com" /></div>
                  <div className="form-group"><label>Product / Service</label>
                    <select>
                      <option value="">Select…</option>
                      {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                    </select>
                  </div>
                  <div className="form-group full"><label>Message</label><textarea placeholder="Tell us about your requirement…" /></div>
                </div>
                <div className="form-submit">
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                    <i className="fas fa-paper-plane" /> Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER BAR ══════════════ */}
      <div className="footer-bar">
        <p className="footer-copy">© 2025 <span>Sahyadri Enterprises</span>. All rights reserved. | 25, IT Park MIDC, Ahilyanagar, MH - 414111</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* ══════════════ FLOATING BAR ══════════════ */}
      <div className="float-bar">
        <a href="tel:9689804094"><i className="fas fa-phone-alt" /><span>{COMPANY.phone}</span></a>
        <div className="float-bar-divider" />
        <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="whatsapp">
          <i className="fab fa-whatsapp" /><span>WhatsApp</span>
        </a>
        <div className="float-bar-divider" />
        <a href="#contact" className="quote"><i className="fas fa-file-invoice" /><span>Get a Quote</span></a>
      </div>
    </>
  );
}
