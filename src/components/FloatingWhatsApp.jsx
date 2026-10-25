import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const phone = '254757380607';
  const defaultMessage = encodeURIComponent(
    "Hi INA Kids Salon! I would like to enquire about hairstyling for my child."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed right-6 bottom-[5.25rem] z-50 flex items-center select-none"
    >
      {/* Tooltip / Label shown on hover & desktop */}
      <div
        className={`hidden md:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-neutral-900/90 backdrop-blur-md text-white text-xs font-semibold shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-3'
        }`}
        style={{
          fontFamily: 'var(--font-heading, sans-serif)',
          letterSpacing: '0.01em',
        }}
      >
        <span>Chat on WhatsApp</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] ml-2 animate-pulse" />
      </div>

      {/* Pulsing ring background */}
      <div className="relative group">
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          style={{ animationDuration: '2.5s' }}
        />

        {/* Floating WhatsApp Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with INA Kids Salon on WhatsApp"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/35 hover:shadow-2xl hover:shadow-emerald-500/50 hover:bg-[#20bd5a] hover:scale-108 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
          style={{
            background: 'linear-gradient(135deg, #2ae771 0%, #25D366 50%, #1da851 100%)',
          }}
        >
          {/* Official WhatsApp SVG Icon */}
          <svg
            className="w-6.5 h-6.5 fill-current drop-shadow-sm"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.301-.15-1.781-.879-2.056-.98-.276-.1-.476-.15-.676.15s-.777.98-.953 1.181c-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.783-1.674-2.084-.175-.3-.019-.463.131-.613.136-.135.301-.351.452-.527.15-.175.201-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.244-.589-.493-.509-.677-.518-.175-.008-.376-.01-.577-.01s-.527.075-.802.376c-.276.301-1.053 1.028-1.053 2.508s1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.378.197 1.9.119.58-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.352zm-5.464 7.618h-.005a10.007 10.007 0 0 1-5.1-1.396l-.366-.217-3.791.994 1.012-3.696-.239-.38a10.007 10.007 0 0 1-1.536-5.303C1.983 6.47 6.474 1.98 12.01 1.98c2.68 0 5.2 1.043 7.094 2.94a10.004 10.004 0 0 1 2.934 7.095c-.002 5.538-4.494 10.027-10.03 10.027z" />
          </svg>

          {/* Active Status Green Dot Badge */}
          <span
            className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shadow-md ring-2 ring-white/80"
            aria-hidden="true"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </span>
        </a>
      </div>
    </aside>
  );
}
