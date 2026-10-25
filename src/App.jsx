import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HairstylesSection from './components/HairstylesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import GallerySection from './components/GallerySection';
import BookingSection from './components/BookingSection';
import LocationSection from './components/LocationSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200]
                   focus:px-4 focus:py-2 focus:bg-[#E91E63] focus:text-white focus:rounded-lg
                   focus:font-heading focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        {/* Section 1 — Hero */}
        <HeroSection />

        {/* Section 2 — Popular Hairstyles & Services */}
        <HairstylesSection />

        {/* Section 3 — Why Choose Us */}
        <WhyChooseUsSection />

        {/* Section 4 — Gallery */}
        <GallerySection />

        {/* Section 5 — Appointment Enquiry */}
        <BookingSection />

        {/* Section 6 — Visit Our Salon */}
        <LocationSection />

        {/* Section 7 — Final CTA */}
        <FinalCTASection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
