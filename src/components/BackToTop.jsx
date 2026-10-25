import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#E91E63] text-white
                 shadow-lg shadow-pink-200 hover:bg-[#C2185B] hover:shadow-xl hover:-translate-y-0.5
                 flex items-center justify-center transition-all duration-200
                 focus-visible:ring-2 focus-visible:ring-[#E91E63] focus-visible:ring-offset-2"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
