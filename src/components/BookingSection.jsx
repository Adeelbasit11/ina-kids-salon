import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ENQUIRY_STEPS } from '../data/salonData';
import AppointmentEnquiryForm from './AppointmentEnquiryForm';

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

function StepCard({ step, index }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`flex gap-4 transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step number + connector */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#E91E63] text-white
                        flex items-center justify-center font-heading font-bold text-sm shadow-md shadow-pink-200">
          {step.step}
        </div>
        {index < ENQUIRY_STEPS.length - 1 && (
          <div className="w-px h-8 bg-pink-border" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className="pb-6">
        <h3 className="font-heading font-bold text-base text-neutral-dark">
          {step.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-secondary leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function BookingSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-[#FFF1F6]"
      aria-label="Appointment enquiry section"
    >
      <div className="container-main">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <RevealWrapper>
            <span className="eyebrow">Your Next Visit</span>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-neutral-dark mt-3">
              Your Little One's Next Style{' '}
              <span className="text-gradient-pink">Starts Here</span>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={200}>
            <p className="mt-4 text-neutral-secondary text-lg leading-relaxed">
              Found a style you love? Get in touch to ask about pricing and appointment availability.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT — Steps */}
          <div>
            <RevealWrapper>
              <h3 className="font-heading font-bold text-xl text-neutral-dark mb-8">
                How It Works
              </h3>
            </RevealWrapper>

            {ENQUIRY_STEPS.map((step, index) => (
              <StepCard key={step.step} step={step} index={index} />
            ))}

            {/* Supporting image */}
            <RevealWrapper delay={400} className="mt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-video img-zoom">
                <img
                  src="/images/suite-booking-child.jpg"
                  alt="Happy child showing off their new hairstyle at INA Kids Salon"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </RevealWrapper>
          </div>

          {/* RIGHT — Form */}
          <RevealWrapper delay={200}>
            <div className="bg-white rounded-3xl shadow-xl shadow-pink-100 p-6 sm:p-8 border border-pink-border">
              <h3 className="font-heading font-bold text-xl text-neutral-dark mb-6">
                Send an Enquiry
              </h3>
              <AppointmentEnquiryForm />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
