import React from 'react';
import { Phone, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SALON_INFO } from '../data/salonData';

function RevealWrapper({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// TikTok icon
const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.96a8.2 8.2 0 004.79 1.53V7.04a4.84 4.84 0 01-1.02-.35z"/>
  </svg>
);

export default function LocationSection() {
  return (
    <section
      id="visit"
      className="section-padding bg-white"
      aria-label="Visit INA Kids Salon location and contact"
    >
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <RevealWrapper>
            <span className="eyebrow">Come Say Hello</span>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-neutral-dark mt-3">
              Come Visit{' '}
              <span className="text-gradient-pink">INA Kids Salon</span>
            </h2>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* LEFT — Contact info */}
          <div className="flex flex-col gap-8">
            {/* Address card */}
            <RevealWrapper>
              <div className="flex gap-4 p-6 rounded-2xl bg-pink-blush border border-pink-border">
                <div className="w-12 h-12 rounded-2xl bg-[#E91E63] flex items-center justify-center flex-shrink-0 shadow-md shadow-pink-200">
                  <MapPin size={22} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-neutral-dark">Our Address</h3>
                  <address className="not-italic mt-1">
                    <p className="text-neutral-secondary text-sm leading-relaxed">
                      {SALON_INFO.address}
                    </p>
                    <p className="text-neutral-secondary text-sm">Nairobi, Kenya</p>
                  </address>
                </div>
              </div>
            </RevealWrapper>

            {/* Phone card */}
            <RevealWrapper delay={100}>
              <div className="flex gap-4 p-6 rounded-2xl bg-pink-blush border border-pink-border">
                <div className="w-12 h-12 rounded-2xl bg-[#E91E63] flex items-center justify-center flex-shrink-0 shadow-md shadow-pink-200">
                  <Phone size={22} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-neutral-dark">Phone</h3>
                  <a
                    href={SALON_INFO.phoneHref}
                    className="text-[#E91E63] font-semibold text-base hover:underline mt-1 block"
                  >
                    {SALON_INFO.phone}
                  </a>
                  <p className="text-neutral-secondary text-xs mt-1">
                    Call or WhatsApp to ask about availability
                  </p>
                </div>
              </div>
            </RevealWrapper>

            {/* TikTok card */}
            <RevealWrapper delay={200}>
              <div className="flex gap-4 p-6 rounded-2xl bg-pink-blush border border-pink-border">
                <div className="w-12 h-12 rounded-2xl bg-neutral-dark flex items-center justify-center flex-shrink-0">
                  <TikTokIcon size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-neutral-dark">Follow on TikTok</h3>
                  <a
                    href={SALON_INFO.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E91E63] font-semibold text-sm hover:underline mt-1 flex items-center gap-1.5"
                  >
                    {SALON_INFO.tiktokHandle}
                    <ExternalLink size={13} />
                  </a>
                  <p className="text-neutral-secondary text-xs mt-1">
                    77.4K followers · 861.6K+ likes
                  </p>
                </div>
              </div>
            </RevealWrapper>

            {/* CTA buttons */}
            <RevealWrapper delay={300} className="flex flex-col sm:flex-row gap-4">
              <a
                href={SALON_INFO.phoneHref}
                className="btn-primary flex-1 justify-center py-4"
                aria-label="Call INA Kids Salon"
              >
                <Phone size={17} aria-hidden="true" />
                Call Now
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=Jewel+Complex+TRM+Nairobi`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 justify-center py-4"
                aria-label="Get directions to INA Kids Salon on Google Maps"
              >
                <Navigation size={17} aria-hidden="true" />
                Get Directions
              </a>
            </RevealWrapper>
          </div>

          {/* RIGHT — Authentic Salon Photo */}
          <RevealWrapper delay={200} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-64 img-zoom">
              <img
                src="/images/salon-styling-ina.png"
                alt="Stylist working on a client inside INA Kids Salon at Jewel Complex"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay with location info */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-[#E91E63] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-white font-heading font-semibold text-sm">
                      Jewel Complex, 2nd Floor, Room 219
                    </p>
                    <p className="text-white/70 text-xs mt-0.5">Next to TRM · Nairobi</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
