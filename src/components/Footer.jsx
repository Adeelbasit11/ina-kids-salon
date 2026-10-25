import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Visit Us', href: '#visit' },
];

const handleNavClick = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

// TikTok icon
const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.96a8.2 8.2 0 004.79 1.53V7.04a4.84 4.84 0 01-1.02-.35z"/>
  </svg>
);

// Official logo mark
const LogoMark = () => (
  <img
    src="/images/ina-logo-circle.png"
    alt="INA Kids Salon Logo"
    style={{ width: 38, height: 38, borderRadius: '9999px', objectFit: 'cover', border: '2px solid #E91E63', flexShrink: 0 }}
  />
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white" role="contentinfo">
      <div className="container-main">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 lg:py-16">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark />
              <div>
                <p className="font-heading font-bold text-xl text-white leading-none">INA</p>
                <p className="font-heading font-medium text-xs text-[#E91E63] tracking-widest uppercase">
                  Kids Salon
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Beautiful braids, creative hairstyles, and special salon moments for your little ones in Nairobi.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SALON_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#E91E63] flex items-center justify-center
                           transition-colors duration-200"
                aria-label="INA Kids Salon on TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href={SALON_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#E91E63] flex items-center justify-center
                           transition-colors duration-200"
                aria-label="Chat with INA Kids Salon on WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-white/80 uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-white/80 uppercase tracking-widest mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <Phone size={16} className="text-[#E91E63] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <a
                    href={SALON_INFO.phoneHref}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                    aria-label={`Call ${SALON_INFO.phone}`}
                  >
                    {SALON_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={16} className="text-[#E91E63] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic text-white/60 text-sm leading-relaxed">
                  Jewel Complex, 2nd Floor<br />Room 219 (next to TRM)<br />Nairobi, Kenya
                </address>
              </div>

              <div className="flex gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <TikTokIcon />
                </div>
                <a
                  href={SALON_INFO.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm flex items-center gap-1 transition-colors duration-200"
                >
                  {SALON_INFO.tiktokHandle}
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {year} INA Kids Salon. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Jewel Complex, 2nd Floor, Room 219 · Nairobi
          </p>
        </div>
      </div>
    </footer>
  );
}
