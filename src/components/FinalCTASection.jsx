import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
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

export default function FinalCTASection() {
  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Final call-to-action section"
      className="relative overflow-hidden bg-[#E91E63] section-padding"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/suite-booking-child.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/92 via-[#C2185B]/88 to-[#880E4F]/92" />
      </div>

      {/* Decorative shapes */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container-main text-center">
        <RevealWrapper>
          <span className="eyebrow text-white/70 text-xs tracking-widest">
            ✨ INA Kids Salon
          </span>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <h2 className="heading-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 max-w-3xl mx-auto leading-tight">
            Ready for Their Next Favourite Hairstyle?
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={200}>
          <p className="mt-5 text-white/75 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            Let's find a beautiful new look for your little one.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={300} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E91E63]
                       font-heading font-bold text-base rounded-full shadow-xl
                       hover:bg-pink-blush transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5
                       focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E91E63]"
          >
            Book an Appointment
            <ArrowRight size={18} />
          </a>
          <a
            href={SALON_INFO.phoneHref}
            className="inline-flex items-center gap-2 px-8 py-4
                       border-2 border-white/60 text-white font-heading font-semibold text-base rounded-full
                       hover:border-white hover:bg-white/10 transition-all duration-200
                       focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E91E63]"
            aria-label={`Call INA Kids Salon at ${SALON_INFO.phone}`}
          >
            <Phone size={17} aria-hidden="true" />
            Contact INA Kids Salon
          </a>
        </RevealWrapper>

        {/* Social proof line */}
        <RevealWrapper delay={400} className="mt-12">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-white/30" aria-hidden="true" />
            <span className="text-white/50 text-sm font-body">
              Jewel Complex, 2nd Floor, Room 219 · Nairobi
            </span>
            <div className="h-px w-12 bg-white/30" aria-hidden="true" />
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
