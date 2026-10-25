import React, { useState } from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, SALON_INFO } from '../data/salonData';
import GalleryLightbox from './GalleryLightbox';

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

function GalleryCard({ item, index, onOpen }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100
                  transition-all duration-700 shadow-sm hover:shadow-xl
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onClick={() => onOpen(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(index); } }}
      aria-label={`View full size: ${item.alt}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={item.thumb}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Category label */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-white/90 text-neutral-dark text-xs font-semibold
                           font-body tracking-wide shadow-sm">
            {item.category}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300
                        flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center
                          opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100
                          transition-all duration-300">
            <ZoomIn size={20} className="text-neutral-dark" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Map filtered index back to global GALLERY_ITEMS index for lightbox
  const handleOpen = (filteredIndex) => {
    const item = filtered[filteredIndex];
    const globalIndex = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setLightboxIndex(globalIndex);
  };

  return (
    <section
      id="gallery"
      className="section-padding bg-white"
      aria-label="INA Kids Salon hairstyle gallery"
    >
      <div className="container-main">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <RevealWrapper>
            <span className="eyebrow">Our Work</span>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-neutral-dark mt-3">
              Little Clients.{' '}
              <span className="text-gradient-pink">Big Smiles.</span>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={200}>
            <p className="mt-4 text-neutral-secondary text-lg leading-relaxed">
              Explore the beautiful hairstyles and special moments at INA Kids Salon.
            </p>
          </RevealWrapper>
        </div>

        {/* Category filter */}
        <RevealWrapper delay={250} className="flex flex-wrap justify-center gap-2 mb-10">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-200
                         ${activeCategory === cat
                           ? 'bg-[#E91E63] text-white shadow-md shadow-pink-200'
                           : 'bg-pink-blush text-neutral-secondary hover:bg-pink-light hover:text-[#E91E63]'
                         }`}
              aria-pressed={activeCategory === cat}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </RevealWrapper>

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onOpen={handleOpen}
            />
          ))}
        </div>

        {/* TikTok CTA */}
        <RevealWrapper delay={300} className="text-center mt-12">
          <p className="text-neutral-secondary text-base mb-5">
            See even more styles and behind-the-scenes moments
          </p>
          <a
            href={SALON_INFO.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-base px-8 py-4 gap-2.5"
            aria-label="View INA Kids Salon on TikTok — opens in new tab"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.96a8.2 8.2 0 004.79 1.53V7.04a4.84 4.84 0 01-1.02-.35z"/>
            </svg>
            See More on TikTok
            <ExternalLink size={16} />
          </a>
        </RevealWrapper>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
