import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const PHONE = '+254 757 380607';
const PHONE_HREF = 'tel:+254757380607';

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'Hairstyles',    href: '#hairstyles' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Gallery',       href: '#gallery' },
  { label: 'Contact',       href: '#contact' },
];

function smoothTo(href) {
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const LogoMark = () => (
  <img
    src="/images/ina-logo-circle.png"
    alt="INA Kids Salon Logo"
    style={{ width: 42, height: 42, borderRadius: '9999px', objectFit: 'cover', border: '2px solid #E91E63', flexShrink: 0 }}
  />
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) return;
    document.body.style.overflow = '';
  }, [menuOpen]);

  const handleLink = (e, href) => { e.preventDefault(); setMenuOpen(false); smoothTo(href); };

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.3s, box-shadow 0.3s',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          boxShadow: scrolled ? '0 1px 20px rgba(233,30,99,0.08)' : 'none',
        }}
        role="banner"
      >
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

            {/* Logo */}
            <a href="#home" onClick={(e) => handleLink(e, '#home')}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
              aria-label="INA Kids Salon — go to homepage">
              <LogoMark/>
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem', color: '#171717' }}>INA</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.65rem', color: '#E91E63', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Kids Salon</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav style={{ display: 'none' }} className="desktop-nav" aria-label="Main navigation">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} onClick={(e) => handleLink(e, l.href)}
                  style={{ padding: '0.5rem 1rem', fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '0.875rem', color: '#171717', borderRadius: '9999px', textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#E91E63'; e.currentTarget.style.background = '#FFF1F6'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#171717'; e.currentTarget.style.background = 'transparent'; }}>
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="desktop-cta" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
              <a href={PHONE_HREF} className="btn-ghost" style={{ fontSize: '0.8rem' }}>
                <Phone size={14}/> Call Us
              </a>
              <a href="#contact" onClick={(e) => handleLink(e, '#contact')} className="btn-primary" style={{ fontSize: '0.875rem' }}>
                Book an Appointment
              </a>
            </div>

            {/* Mobile hamburger */}
            <button ref={btnRef}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '9999px', border: 'none', background: 'transparent', cursor: 'pointer', transition: 'background 0.2s' }}
              className="mobile-menu-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              onMouseEnter={e => e.currentTarget.style.background = '#FFF1F6'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              {menuOpen ? <X size={22} color="#171717"/> : <Menu size={22} color="#171717"/>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(0,0,0,0.3)' }}
          aria-hidden="true"/>
      )}

      {/* Mobile drawer */}
      <div id="mobile-menu" ref={menuRef} role="dialog" aria-label="Navigation menu" aria-modal="true"
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 50,
          width: '17rem', background: '#fff',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-out',
          display: 'flex', flexDirection: 'column',
        }}>
        {/* Drawer header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.25rem', height: '64px', borderBottom: '1px solid #F0DDE5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LogoMark/>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#171717' }}>INA Kids Salon</span>
          </div>
          <button onClick={() => setMenuOpen(false)}
            style={{ width: 36, height: 36, borderRadius: '9999px', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Close menu">
            <X size={20} color="#171717"/>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '1.25rem 1rem', flex: 1 }} aria-label="Mobile navigation">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={(e) => handleLink(e, l.href)}
              style={{ padding: '0.875rem 1rem', fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '1rem', color: '#171717', borderRadius: '0.75rem', textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FFF1F6'; e.currentTarget.style.color = '#E91E63'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#171717'; }}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Drawer CTAs */}
        <div style={{ padding: '1.25rem', borderTop: '1px solid #F0DDE5', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="#contact" onClick={(e) => handleLink(e, '#contact')} className="btn-primary" style={{ textAlign: 'center', width: '100%' }}>
            Book an Appointment
          </a>
          <a href={PHONE_HREF} className="btn-secondary" style={{ textAlign: 'center', width: '100%' }}>
            <Phone size={14}/> {PHONE}
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav  { display: flex !important; align-items: center; gap: 4px; }
          .desktop-cta  { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
