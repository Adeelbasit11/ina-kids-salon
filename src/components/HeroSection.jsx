import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

function smoothTo(href) {
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const BraidDecor = () => (
  <svg width="72" height="72" viewBox="0 0 80 80" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="40" cy="40" r="38" stroke="#E91E63" strokeWidth="1.5" strokeDasharray="4 6"/>
    <circle cx="40" cy="40" r="26" stroke="#F48FB1" strokeWidth="1" strokeDasharray="3 5"/>
    <circle cx="40" cy="40" r="14" fill="#FFF1F6"/>
    <path d="M34 30 Q40 20 46 30 Q52 40 46 50 Q40 60 34 50 Q28 40 34 30Z" fill="#E91E63" opacity="0.18"/>
    <circle cx="40" cy="40" r="5" fill="#E91E63"/>
  </svg>
);

export default function HeroSection() {
  return (
    <section id="home" aria-label="Hero section" style={{ position: 'relative', minHeight: '100vh', background: '#FFF1F6', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      {/* Background blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '-6rem', right: '-6rem', width: '24rem', height: '24rem', borderRadius: '9999px', background: 'linear-gradient(135deg,#FCE4EC,#FFF1F6)', opacity: 0.6 }}/>
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-4rem', left: '-4rem', width: '18rem', height: '18rem', borderRadius: '9999px', background: 'linear-gradient(135deg,#FFF1F6,#FCE4EC)', opacity: 0.4 }}/>
      <div aria-hidden="true" style={{ position: 'absolute', top: '25%', left: '2rem', width: '3px', height: '8rem', background: '#E91E63', borderRadius: '9999px', opacity: 0.12 }}/>
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '30%', right: '3rem', width: '3px', height: '5rem', background: '#E91E63', borderRadius: '9999px', opacity: 0.08 }}/>

      <div className="container-main" style={{ width: '100%', padding: '3rem 1rem' }}>
        <div className="hero-grid">
          {/* LEFT — Text */}
          <div className="hero-text">
            {/* Eyebrow */}
            <div className="animate-fadeInUp stagger-1 hero-eyebrow-wrap" style={{ animationFillMode: 'forwards', opacity: 0 }}>
              <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '1.5rem', height: '1px', background: '#E91E63', display: 'inline-block' }}/>
                Little Looks, Big Personality
                <span style={{ width: '1.5rem', height: '1px', background: '#E91E63', display: 'inline-block' }}/>
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-display animate-fadeInUp stagger-2 hero-headline" style={{ animationFillMode: 'forwards', opacity: 0, marginTop: '1.25rem', color: '#171717', fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
              <span style={{ display: 'block' }}>Little Styles.</span>
              <span style={{ display: 'block', marginTop: '0.25rem' }} className="text-gradient-pink">Big Smiles.</span>
            </h1>

            {/* Body copy */}
            <p className="animate-fadeInUp stagger-3 hero-p" style={{ animationFillMode: 'forwards', opacity: 0, marginTop: '1.5rem', color: '#737373', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '26rem' }}>
              Beautiful braids, creative hairstyles, and special salon moments for your little ones.
            </p>

            {/* CTAs */}
            <div className="animate-fadeInUp stagger-4 hero-ctas" style={{ animationFillMode: 'forwards', opacity: 0, marginTop: '2rem' }}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); smoothTo('#contact'); }}
                className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 1.75rem', boxShadow: '0 8px 24px #E91E6330' }}>
                Book an Appointment <ArrowRight size={17}/>
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); smoothTo('#services'); }}
                className="btn-secondary" style={{ fontSize: '1rem', padding: '1rem 1.75rem' }}>
                Our Services
              </a>
            </div>

            {/* Location badge */}
            <div className="animate-fadeInUp stagger-5 hero-location" style={{ animationFillMode: 'forwards', opacity: 0, marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <BraidDecor/>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem', color: '#171717' }}>Jewel Complex, 2nd Floor, Room 219</p>
                <p style={{ fontSize: '0.75rem', color: '#737373', marginTop: '2px' }}>Next to TRM · Nairobi</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="hero-image" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="animate-scaleIn stagger-2" style={{ animationFillMode: 'forwards', opacity: 0, position: 'relative', width: '100%', maxWidth: '23rem' }}>
              {/* Pink accent behind image */}
              <div aria-hidden="true" style={{ position: 'absolute', inset: 0, top: '-1.5rem', right: '-1.5rem', background: '#E91E63', borderRadius: '1.5rem', opacity: 0.08 }}/>

              {/* Main image */}
              <div className="img-zoom" style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.18)', aspectRatio: '3/4' }}>
                <img src="/images/suite-hero-main.jpg"
                  alt="Young girl with an exquisite braided cornrow hairstyle at INA Kids Salon"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="eager" fetchPriority="high"/>
                {/* Gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 55%)' }}/>
                {/* Caption */}
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderRadius: '1rem', padding: '0.75rem 1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem', color: '#171717' }}>INA Kids Salon</p>
                    <p style={{ fontSize: '0.75rem', color: '#737373', marginTop: '2px' }}>Signature Braids & Beaded Styles ✨</p>
                  </div>
                </div>
              </div>

              {/* TikTok badge */}
              <div className="animate-slideInRight stagger-5" style={{ animationFillMode: 'forwards', opacity: 0, position: 'absolute', top: '-1rem', right: '-1rem', background: '#fff', borderRadius: '1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #F0DDE5', padding: '0.75rem 1rem' }}>
                <a href="https://www.tiktok.com/@ina.kids.salon" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}
                  aria-label="Follow INA Kids Salon on TikTok">
                  <div style={{ width: 34, height: 34, borderRadius: '9999px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src="/images/ina-logo-circle.png" alt="INA TikTok" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: '#171717' }}>@ina.kids.salon</p>
                    <p style={{ fontSize: '0.7rem', color: '#E91E63', fontWeight: 600 }}>77.4K Fans · 861.6K Likes</p>
                  </div>
                </a>
              </div>

              {/* Supporting image tile */}
              <div className="animate-slideInLeft stagger-6" style={{ animationFillMode: 'forwards', opacity: 0, position: 'absolute', bottom: '-1.5rem', left: '-2rem', width: '7.5rem', height: '7.5rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', border: '4px solid #fff' }}>
                <img src="/images/suite-hero-tile.jpg"
                  alt="Child with beaded braids smiling" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy"/>
              </div>
            </div>

            {/* Floating sparkle */}
            <div className="animate-fadeIn stagger-6" style={{ animationFillMode: 'forwards', opacity: 0, position: 'absolute', top: '20%', right: '0' }}>
              <Sparkles size={24} color="#E91E63"/>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.65rem', color: '#737373', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 20, height: 32, border: '2px solid #d4d4d4', borderRadius: '9999px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
          <div style={{ width: 4, height: 8, background: '#E91E63', borderRadius: '9999px', animation: 'bounceY 1.2s ease-in-out infinite' }}/>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
          min-height: calc(100vh - 80px);
        }
        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
        }
        .hero-eyebrow-wrap {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .hero-headline {
          text-align: center;
        }
        .hero-p {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-ctas {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 0.875rem;
        }
        .hero-ctas a {
          width: 100%;
          max-width: 18rem;
          justify-content: center;
        }
        .hero-location {
          justify-content: center;
          width: 100%;
        }
        .hero-image { order: -1; }

        @media (min-width: 640px) {
          .hero-ctas {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .hero-ctas a {
            width: auto;
            max-width: none;
          }
        }

        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr 1fr; gap: 4rem; }
          .hero-text {
            order: 0;
            align-items: flex-start;
            text-align: left;
          }
          .hero-eyebrow-wrap {
            justify-content: flex-start;
          }
          .hero-headline {
            text-align: left;
          }
          .hero-p {
            text-align: left;
            margin-left: 0;
            margin-right: 0;
          }
          .hero-ctas {
            justify-content: flex-start;
            align-items: flex-start;
            width: auto;
          }
          .hero-location {
            justify-content: flex-start;
          }
          .hero-image { order: 0; }
        }

        @keyframes bounceY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
