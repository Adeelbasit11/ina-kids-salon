import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HAIRSTYLE_SERVICES } from '../data/salonData';

function smoothTo(href) {
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

function FadeUp({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} style={{ transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(2rem)' }}>
      {children}
    </div>
  );
}

function ServiceCard({ service, index }) {
  const { ref, isVisible } = useScrollReveal();
  const isTall = service.aspect === 'tall';
  return (
    <div ref={ref} style={{
        gridRow: isTall ? 'span 2' : 'span 1',
        position: 'relative', overflow: 'hidden', borderRadius: '1.25rem',
        cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s ease ${index * 120}ms, box-shadow 0.3s`,
        opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(2.5rem)',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.16)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)'}>
      <div className="img-zoom" style={{ height: isTall ? '100%' : undefined, minHeight: isTall ? '400px' : '14rem', position: 'relative' }}>
        <img src={service.image} alt={service.alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: isTall ? '400px' : '14rem' }}
          loading="lazy"/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }}/>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.25rem' }}>
          <span style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            {service.category}
          </span>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            {service.description}
          </p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); smoothTo('#contact'); }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: '2px', width: 'fit-content', textDecoration: 'none', transition: 'gap 0.2s' }}
            aria-label={`Enquire about ${service.category}`}>
            Enquire About This Style <ArrowRight size={13}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HairstylesSection() {
  return (
    <section id="hairstyles" aria-label="Hairstyle services at INA Kids Salon" style={{ padding: '4rem 0', background: '#fff' }}>
      <div className="container-main">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '38rem', margin: '0 auto 3.5rem' }}>
          <FadeUp><span className="eyebrow">Made With Love</span></FadeUp>
          <FadeUp delay={100}>
            <h2 className="heading-section" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#171717', marginTop: '0.75rem' }}>
              Styles They'll <span className="text-gradient-pink">Love</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p style={{ marginTop: '1rem', color: '#737373', fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Find a beautiful look for every little personality.
            </p>
          </FadeUp>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', gridAutoRows: '14rem' }} className="hairstyle-grid">
          {HAIRSTYLE_SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i}/>)}
        </div>

        {/* CTA */}
        <FadeUp delay={300}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); smoothTo('#gallery'); }} className="btn-primary">
              Explore All Hairstyles <ArrowRight size={17}/>
            </a>
          </div>
        </FadeUp>
      </div>
      <style>{`
        @media (min-width: 640px)  { .hairstyle-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .hairstyle-grid { grid-template-columns: repeat(4, 1fr); } }
      `}</style>
    </section>
  );
}
