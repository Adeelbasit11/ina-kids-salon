import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';

export default function GalleryLightbox({ initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [loaded, setLoaded] = useState(false);

  const current = GALLERY_ITEMS[currentIndex];

  const goNext = useCallback(() => {
    setLoaded(false);
    setCurrentIndex((i) => (i + 1) % GALLERY_ITEMS.length);
  }, []);

  const goPrev = useCallback(() => {
    setLoaded(false);
    setCurrentIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Touch swipe support
  const touchStart = React.useRef(null);
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStart.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center lightbox-overlay bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${currentIndex + 1} of ${GALLERY_ITEMS.length}: ${current.alt}`}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                   flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Close image viewer"
      >
        <X size={20} />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-white/70 text-sm font-medium font-body">
          {currentIndex + 1} / {GALLERY_ITEMS.length}
        </span>
      </div>

      {/* Category label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wide font-body">
          {current.category}
        </span>
      </div>

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-2 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25
                   flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <div
        className="relative max-w-4xl max-h-[85vh] w-full mx-16 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          onLoad={() => setLoaded(true)}
          className={`max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl
                      transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-2 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25
                   flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white/70 text-sm font-body max-w-md px-4">
          {current.alt}
        </p>
      </div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 px-4 overflow-x-auto">
        {GALLERY_ITEMS.map((item, idx) => (
          <button
            key={item.id}
            onClick={(e) => { e.stopPropagation(); setLoaded(false); setCurrentIndex(idx); }}
            className={`flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden transition-all duration-200
                       ${idx === currentIndex ? 'ring-2 ring-white scale-110' : 'opacity-50 hover:opacity-80'}`}
            aria-label={`View image: ${item.alt}`}
            aria-current={idx === currentIndex}
          >
            <img src={item.thumb} alt="" className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
