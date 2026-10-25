import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Check, Star, ShieldCheck, Crown } from 'lucide-react';

function smoothTo(href) {
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const SERVICES_DATA = [
  {
    id: 1,
    number: '01',
    badge: 'Signature Braiding',
    highlightTag: 'Most Requested',
    badgeIcon: Crown,
    accentColor: '#E91E63',
    softBg: '#FFF1F6',
    title: 'Kids Braiding & Cornrows',
    subtitle: 'Pain-free, neat scalp artistry for little ones',
    image: '/images/service-card-1.jpg',
    alt: 'Young girl with neat curved scalp cornrows and styled baby edges at INA Kids Salon',
    description:
      'Precision curved cornrows, knotless braids, and stitch patterns crafted specifically for delicate young scalps with a gentle, tension-free touch.',
    tags: ['Curved Cornrows', 'Knotless Braids', 'Zero Tension'],
    features: [
      'Gentle pain-free scalp parting technique',
      'Curved, heart & geometric braid patterns',
      'Lightweight knotless & box braids for kids',
      'Neat, long-lasting school & occasion wear',
    ],
    ctaText: 'Enquire About Braids',
    serviceOption: 'Braids & Cornrows',
  },
  {
    id: 2,
    number: '02',
    badge: 'Creative Finishing',
    highlightTag: 'Kids Favourite',
    badgeIcon: Star,
    accentColor: '#C2185B',
    softBg: '#FCE4EC',
    title: 'Beads, Bows & Styling',
    subtitle: 'Colorful accessories that bring out big smiles',
    image: '/images/service-card-2.jpg',
    alt: 'Smiling child with vibrant pink and lilac beads and ribbon bows at INA Kids Salon',
    description:
      'Turn every salon visit into a magical moment with color-coordinated pastel beads, silk ribbon bows, flower clips, and festive space buns.',
    tags: ['Crystal Beads', 'Silk Bows', 'Space Buns'],
    features: [
      'Color-matched pastel, pearl & crystal beads',
      'Playful double puff buns & braided ponytails',
      'Delicate silk ribbon bows & floral clips',
      'Styled for birthdays, photoshoots & parties',
    ],
    ctaText: 'Enquire About Styling',
    serviceOption: 'Beaded Hairstyles',
  },
  {
    id: 3,
    number: '03',
    badge: 'Gentle Haircare',
    highlightTag: 'Scalp & Length Care',
    badgeIcon: ShieldCheck,
    accentColor: '#E91E63',
    softBg: '#FFF1F6',
    title: 'Wash, Care & Protective Twists',
    subtitle: 'Tear-free detangling & nourishing protection',
    image: '/images/service-card-3.jpg',
    alt: 'Smiling child client with protective beaded braids at INA Kids Salon',
    description:
      'A soothing, tear-free salon wash, painless detangling, and protective twist styling designed to keep your child’s natural hair soft, healthy, and thriving.',
    tags: ['Tear-Free Wash', 'Soft Detangle', 'Protective Twists'],
    features: [
      'Tear-free conditioning & gentle scalp cleanse',
      'Patient, pain-free detangling for natural curls',
      'Moisturizing two-strand twists & beaded ends',
      'Kid-friendly salon chairs & warm atmosphere',
    ],
    ctaText: 'Enquire About Haircare',
    serviceOption: 'Protective Hairstyles',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 85,
      damping: 18,
      mass: 0.9,
    },
  },
};

function ServiceCard({ service, isHovered, onHoverStart, onHoverEnd }) {
  const BadgeIcon = service.badgeIcon;

  const handleSelectService = (e) => {
    e.preventDefault();
    smoothTo('#contact');
    setTimeout(() => {
      const select = document.querySelector('#hairstyle');
      if (select) {
        select.value = service.serviceOption;
        select.dispatchEvent(new Event('change', { bubbles: true }));
        select.focus();
      }
    }, 450);
  };

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{
        position: 'relative',
        background: '#ffffff',
        borderRadius: '1.75rem',
        border: isHovered ? '1.5px solid #E91E63' : '1.5px solid #F0DDE5',
        boxShadow: isHovered
          ? '0 28px 60px -12px rgba(233, 30, 99, 0.2), 0 0 0 4px rgba(233, 30, 99, 0.06)'
          : '0 10px 30px -10px rgba(23, 23, 23, 0.07)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.35s ease',
      }}
    >
      {/* Top Framed Portrait Image — Full Head & Smile Visible */}
      <div style={{ padding: '0.875rem 0.875rem 0 0.875rem' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '10 / 9',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            background: '#FFF1F6',
          }}
        >
          <motion.img
            src={service.image}
            alt={service.alt}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
            loading="lazy"
          />

          {/* Subtle bottom vignette only at the very bottom edge */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(23, 23, 23, 0.55) 0%, rgba(23, 23, 23, 0.12) 32%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* Bottom-left & Bottom-right overlay bar (never blocks the child's hair or crown) */}
          <div
            style={{
              position: 'absolute',
              bottom: '0.875rem',
              left: '0.875rem',
              right: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              zIndex: 2,
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.875rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(10px)',
                color: service.accentColor,
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.75rem',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
              }}
            >
              <BadgeIcon size={13} strokeWidth={2.5} />
              {service.badge}
            </span>

            <span
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                background: 'rgba(233, 30, 99, 0.92)',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.6875rem',
                letterSpacing: '0.03em',
                boxShadow: '0 4px 12px rgba(233, 30, 99, 0.3)',
              }}
            >
              {service.highlightTag}
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.5rem 1.625rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Header Row with Step Pill */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.3125rem',
                color: '#171717',
                lineHeight: 1.25,
                letterSpacing: '-0.01em',
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                fontSize: '0.8125rem',
                color: '#E91E63',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                marginTop: '0.25rem',
              }}
            >
              {service.subtitle}
            </p>
          </div>

          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: '0.875rem',
              background: isHovered ? '#E91E63' : '#FFF1F6',
              color: isHovered ? '#ffffff' : '#E91E63',
              border: '1px solid #F0DDE5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '0.8125rem',
              flexShrink: 0,
              transition: 'all 0.3s ease',
            }}
          >
            {service.number}
          </div>
        </div>

        {/* Quick Style Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
          {service.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                background: '#FFF1F6',
                color: '#C2185B',
                border: '1px solid #F0DDE5',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '0.875rem',
            color: '#525252',
            lineHeight: 1.65,
            marginTop: '0.9rem',
            marginBottom: '1.15rem',
          }}
        >
          {service.description}
        </p>

        {/* Subtle Gradient Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, #F0DDE5 0%, #FCE4EC 50%, transparent 100%)',
            marginBottom: '1.15rem',
          }}
        />

        {/* Features Checklist */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 1.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.625rem',
            flex: 1,
          }}
        >
          {service.features.map((feat, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                fontSize: '0.8125rem',
                color: '#262626',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '9999px',
                  background: isHovered ? '#E91E63' : '#FFF1F6',
                  color: isHovered ? '#ffffff' : '#E91E63',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.25s ease',
                }}
              >
                <Check size={11} strokeWidth={3} />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Interactive CTA Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleSelectService}
          style={{
            width: '100%',
            padding: '0.95rem 1.25rem',
            borderRadius: '9999px',
            background: isHovered ? 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)' : '#FFF1F6',
            color: isHovered ? '#ffffff' : '#E91E63',
            border: isHovered ? '1.5px solid transparent' : '1.5px solid #F48FB1',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            boxShadow: isHovered ? '0 10px 24px -4px rgba(233, 30, 99, 0.4)' : 'none',
            transition: 'background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          }}
        >
          <span>{service.ctaText}</span>
          <motion.span
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <ArrowRight size={16} />
          </motion.span>
        </motion.button>
      </div>
    </motion.article>
  );
}

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="services"
      aria-label="Our salon services for children"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF9FB 50%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Floating Ambient Blobs */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '4rem',
          left: '-8rem',
          width: '24rem',
          height: '24rem',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '4rem',
          right: '-8rem',
          width: '28rem',
          height: '28rem',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(244, 143, 177, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '44rem', margin: '0 auto 4rem' }}
        >
          <span
            className="eyebrow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#FFF1F6',
              padding: '0.45rem 1.125rem',
              borderRadius: '9999px',
              border: '1px solid #F0DDE5',
              boxShadow: '0 2px 10px rgba(233, 30, 99, 0.06)',
            }}
          >
            <Sparkles size={14} color="#E91E63" />
            For Little Kings & Queens
          </span>

          <h2
            className="heading-section"
            style={{
              fontSize: 'clamp(2.125rem, 4.5vw, 3.35rem)',
              color: '#171717',
              marginTop: '1.125rem',
              letterSpacing: '-0.025em',
            }}
          >
            Our Signature <span className="text-gradient-pink">Salon Services</span>
          </h2>

          <p
            style={{
              marginTop: '1rem',
              color: '#737373',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              maxWidth: '36rem',
              marginInline: 'auto',
            }}
          >
            Specialized children’s hairstyling crafted with gentle hands, pain-free techniques, and colorful finishing touches.
          </p>
        </motion.div>

        {/* 3 Services Cards Grid with Staggered Spring Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="services-pro-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isHovered={hoveredId === service.id}
              onHoverStart={() => setHoveredId(service.id)}
              onHoverEnd={() => setHoveredId(null)}
            />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .services-pro-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .services-pro-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
