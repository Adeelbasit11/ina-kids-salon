import React from 'react';
import { Sparkles, Heart, Star, Camera } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { WHY_CHOOSE_US } from '../data/salonData';

function smoothTo(href) {
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const ICON_MAP = { Sparkles, Heart, Star, Camera };

function FadeUp({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} style={{ transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(2rem)' }}>
      {children}
    </div>
  );
}

function BenefitItem({ item, index }) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = ICON_MAP[item.icon] || Sparkles;
  return (
    <div ref={ref} style={{ display: 'flex', gap: '1rem', transition: `opacity 0.6s ease ${index * 130}ms, transform 0.6s ease ${index * 130}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateX(1.5rem)' }}>
      <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '0.875rem', background: '#FFF1F6', border: '1px solid #F0DDE5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
        <Icon size={20} color="#E91E63" aria-hidden="true"/>
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9375rem', color: '#171717' }}>{item.title}</h3>
        <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: '#737373', lineHeight: 1.65 }}>{item.description}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" aria-label="Why choose INA Kids Salon" style={{ padding: '4rem 0', background: '#FFF1F6' }}>
      <div className="container-main">
        <div className="why-grid">
          {/* LEFT — Image */}
          <div style={{ position: 'relative', order: 2 }} className="why-image-col">
            <div aria-hidden="true" style={{ position: 'absolute', inset: '-1rem', background: '#E91E63', borderRadius: '1.5rem', opacity: 0.06 }}/>
            <FadeUp>
              <div className="img-zoom" style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.15)', aspectRatio: '4/5' }}>
                <img src="/images/suite-why-us-salon.jpg"
                  alt="Child enjoying a comfortable hairstyling session at INA Kids Salon"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy"/>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)' }}/>
              </div>
            </FadeUp>

            {/* Floating stats card */}
            <FadeUp delay={300}>
              <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-2rem', background: '#fff', borderRadius: '1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid #F0DDE5', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: '#FCE4EC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Heart size={20} color="#E91E63" fill="#E91E63" aria-hidden="true"/>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem', color: '#171717', lineHeight: 1 }}>861.6K+</p>
                  <p style={{ fontSize: '0.7rem', color: '#737373', marginTop: '2px' }}>TikTok Likes</p>
                </div>
              </div>
            </FadeUp>

            <div aria-hidden="true" style={{ position: 'absolute', top: '-0.75rem', left: '-0.75rem', width: 48, height: 48, background: '#E91E63', borderRadius: '0.875rem', opacity: 0.18 }}/>
          </div>

          {/* RIGHT — Text */}
          <div style={{ order: 1 }} className="why-text-col">
            <div className="why-header-wrap">
              <FadeUp><span className="eyebrow why-eyebrow">Why Choose Us</span></FadeUp>
              <FadeUp delay={100}>
                <h2 className="heading-section why-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#171717', marginTop: '0.75rem' }}>
                  Little Clients Deserve <span className="text-gradient-pink">Special Care</span>
                </h2>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="why-desc" style={{ marginTop: '1rem', color: '#737373', fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  Every hairstyle is an opportunity to create a look that feels special — just for them.
                </p>
              </FadeUp>
            </div>

            {/* Divider */}
            <FadeUp delay={250}>
              <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ height: '1px', flex: 1, background: '#F0DDE5' }}/>
                <div style={{ width: 8, height: 8, borderRadius: '9999px', background: '#E91E63' }}/>
                <div style={{ height: '1px', flex: 1, background: '#F0DDE5' }}/>
              </div>
            </FadeUp>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {WHY_CHOOSE_US.map((item, i) => <BenefitItem key={item.title} item={item} index={i}/>)}
            </div>

            <FadeUp delay={600}>
              <div className="why-cta-wrap" style={{ marginTop: '2.5rem' }}>
                <a href="#contact" onClick={(e) => { e.preventDefault(); smoothTo('#contact'); }} className="btn-primary">
                  Book an Appointment
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
      <style>{`
        .why-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
        .why-image-col { order: 2; }
        .why-text-col  { order: 1; }

        /* Mobile centered alignment */
        .why-header-wrap {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .why-eyebrow {
          text-align: center;
          margin: 0 auto;
        }
        .why-heading {
          text-align: center;
        }
        .why-desc {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          max-width: 32rem;
        }
        .why-cta-wrap {
          display: flex;
          justify-content: center;
        }
        .why-cta-wrap a {
          width: 100%;
          max-width: 18rem;
          justify-content: center;
        }

        /* Desktop alignment */
        @media (min-width: 1024px) {
          .why-grid { grid-template-columns: 1fr 1fr; gap: 5rem; }
          .why-image-col { order: 1; }
          .why-text-col  { order: 2; }

          .why-header-wrap {
            text-align: left;
            align-items: flex-start;
          }
          .why-eyebrow {
            text-align: left;
            margin: 0;
          }
          .why-heading {
            text-align: left;
          }
          .why-desc {
            text-align: left;
            margin-left: 0;
            margin-right: 0;
          }
          .why-cta-wrap {
            justify-content: flex-start;
          }
          .why-cta-wrap a {
            width: auto;
            max-width: none;
          }
        }
      `}</style>
    </section>
  );
}
