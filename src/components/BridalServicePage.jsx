import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/BridalServicePage.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.12,
    },
  },
};

const accordionItems = [
  {
    id: "booking",
    title: "Booking Process",
    content:
      "To begin your booking, complete the inquiry form with your confirmed wedding date, venue, and getting-ready timeline. Once availability is confirmed, a non-refundable booking fee of GBP 150 is required to secure your appointment. All bookings are confirmed only upon receipt of the deposit.",
  },
  {
    id: "appointment",
    title: "Appointment Policy",
    content:
      "All appointments are by prior booking only. Please arrive promptly — your session time cannot be extended to accommodate late arrivals. A bridal trial 4–6 weeks before your wedding is strongly recommended. Cancellations within 48 hours of your appointment forfeit the booking deposit.",
  },
  {
    id: "refund",
    title: "Our Refund Policy",
    content:
      "The booking deposit is strictly non-refundable upon cancellation. In cases of rescheduling we will accommodate where possible subject to availability, provided at least 14 days' notice is given. Full payment is due on the day of your bridal appointment.",
  },
];

const galleryImages = [
  "/Images/wed21.jpg",
  "/Images/wed22.jpg",
  "/Images/wed23.jpg",
  "/Images/wed24.jpg",
  "/Images/wed25.jpg",
  "/Images/wed26.jpg",
  "/Images/wed27.jpg",
  "/Images/wed28.jpg",
];

// Replace ytId with your actual YouTube video IDs
const videoItems = [
  {
    ytId: "YOUR_VIDEO_ID_1",
    thumb: "/Images/wed29.jpg",
    title: "Bridal Reception - Full Look",
    caption: "A timeless bridal glam with luminous skin and soft sculpting.",
    products: ["NARS: Fiji mixed Punjab", "TANJI Concealer: Opulent mixed Cashmere", "Glow: Silk"],
  },
  {
    ytId: "YOUR_VIDEO_ID_2",
    thumb: "/Images/wed30.jpg",
    title: "Behind The Veil - Nikah Edition",
    caption: "Fresh nikah-ready skin prep and seamless camera-safe makeup.",
    products: ["Brightening Powder: Syrup, Pearl & Oyster", "Bronzer: Amber", "Lashes: Light Bloom"],
  },
  {
    ytId: "YOUR_VIDEO_ID_3",
    thumb: "/Images/wed31.jpg",
    title: "Signature Glow - Editorial Shoot",
    caption: "Our signature elevated glow adapted for editorial lighting.",
    products: ["Blush: Sorbet", "Gloss: Chinchilla", "Tools: Bridal Brush Collection"],
  },
  {
    ytId: "YOUR_VIDEO_ID_4",
    thumb: "/Images/wed32.jpg",
    title: "Reception Glam - Soft Sculpt",
    caption: "A polished reception look with lifted eyes and satin-skin finish.",
    products: ["Base: Airbrush finish", "Contour: Amber", "Lips: Rose Nude"],
  },
  {
    ytId: "YOUR_VIDEO_ID_5",
    thumb: "/Images/wed33.jpg",
    title: "Bridal Trial - Timeless Nude",
    caption: "Trial session focused on balance, longevity, and camera-ready tones.",
    products: ["Primer: Longwear veil", "Powder: Pearl set", "Lashes: Soft wispy"],
  },
];

const galleryImagesDup = [...galleryImages, ...galleryImages];

function BridalServicePage() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const galleryRef = useRef(null);
  const activeVideo = activeVideoIndex !== null ? videoItems[activeVideoIndex] : null;

  useEffect(() => {
    const strip = galleryRef.current;
    if (!strip) return;
    let animId;
    const speed = 0.7;
    const halfWidth = strip.scrollWidth / 2;
    const step = () => {
      strip.scrollLeft += speed;
      if (strip.scrollLeft >= halfWidth) {
        strip.scrollLeft -= halfWidth;
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  useEffect(() => {
    if (activeVideoIndex === null) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveVideoIndex(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideoIndex]);

  return (
    <main className="bridal-service-page" id="bridal-service">
      <motion.section
        className="bridal-service-hero"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <div className="bridal-service-hero__image" style={{ backgroundImage: "url('/Images/wed41.jpg')" }} aria-hidden="true" />
        <div className="bridal-service-hero__veil" aria-hidden="true" />

        <motion.article className="bridal-service-hero__content" variants={fadeUp}>
          <p className="bridal-service-hero__eyebrow">The Bridal</p>
          <h1>Experience</h1>
          <p>
            Discover a luxurious you with the perfect balance of natural beauty and an
            ethereal, elevated glow for your wedding events.
          </p>
          <a href="#contact" className="bridal-service-hero__cta">
            Reserve Your Date
          </a>
        </motion.article>
      </motion.section>

      <motion.section
        className="bridal-service-content"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.article className="bridal-service-text" variants={fadeUp}>
          <p className="bridal-service-text__label">Bridal Service</p>
          <h2>Bridal A La Carte</h2>
          <p className="bridal-service-text__intro">
            Please complete the short booking form below. We cannot accept a booking or check
            availability without your confirmed wedding date, venue and getting-ready timeline.
          </p>

          <ul className="bridal-service-text__points">
            <li>
              Once availability is confirmed, a fee of GBP 150 is required to secure your
              appointment. This payment is non-refundable upon cancellation.
            </li>
            <li>
              All communication must be confirmed by email to avoid miscommunication between
              planning teams.
            </li>
            <li>
              Responses are generally sent within 3 to 4 business days due to incoming inquiry
              volume.
            </li>
          </ul>

          <h3>Quote</h3>
          <ul className="bridal-service-text__points">
            <li>The Bridal Experience: 90 Minute Appointment from GBP 500.</li>
            <li>
              Destination Bridal Bookings, Flights and Accommodation are charged alongside
              personalized bridal pricing.
            </li>
            <li>
              Editorial, E-commerce and Campaign work are negotiated based on number of models,
              looks, hours and location.
            </li>
          </ul>

          <p className="bridal-service-text__note">
            Before reserving your date, review Tanji's appointment guide to ensure she is the
            right bridal makeup artist for your vision.
          </p>

          <p className="bridal-service-text__meta">
            10 years of bridal testimonials are published on Tanji's Instagram highlights.
          </p>

          <a href="#contact" className="bridal-service-text__button">
            Reserve Your Date
          </a>
        </motion.article>

        <motion.aside className="bridal-service-side" variants={fadeUp}>
          <article className="bridal-service-side__image bridal-service-side__image--one">
            <img src="/Images/wed25.jpg" alt="Bridal editorial close-up" loading="lazy" />
          </article>
          <article className="bridal-service-side__image bridal-service-side__image--two">
            <img src="/Images/wed36.jpg" alt="Bridal reception makeup look" loading="lazy" />
          </article>
        </motion.aside>
      </motion.section>

      {/* Accordion Section */}
      <motion.section
        className="bridal-service-accordion-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="bridal-service-accordion-inner">
          {accordionItems.map((item) => {
            const isOpen = openAccordion === item.id;
            return (
              <motion.div
                className={`bridal-accordion-item${isOpen ? " is-open" : ""}`}
                key={item.id}
                variants={fadeUp}
              >
                <button
                  className="bridal-accordion-item__trigger"
                  onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.title}</span>
                  <span className="bridal-accordion-item__icon" aria-hidden="true" />
                </button>
                <div className="bridal-accordion-item__body">
                  <p>{item.content}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Brides of 2025 Gallery */}
      <motion.section
        className="bridal-service-gallery-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <h2 className="bridal-service-gallery-section__title">Brides of 2025</h2>
        <div className="bridal-service-gallery-wrap">
          <div className="bridal-service-gallery-strip" ref={galleryRef}>
            {galleryImagesDup.map((src, i) => (
              <div className="bridal-gallery-item" key={i}>
                <img src={src} alt={`Bride 2025 look ${(i % galleryImages.length) + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Video Gallery */}
      <motion.section
        className="bridal-service-videos-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <motion.h2 className="bridal-service-videos-section__title" variants={fadeUp}>
          Behind The Look
        </motion.h2>
        <motion.p className="bridal-service-videos-section__sub" variants={fadeUp}>
          A glimpse into the artistry behind every bridal transformation.
        </motion.p>
        <div className="bridal-videos-grid">
          {videoItems.map((video, i) => (
            <motion.div className="bridal-video-card" key={i} variants={fadeUp}>
              <button
                className="bridal-video-card__thumb"
                onClick={() => setActiveVideoIndex(i)}
                aria-label={`Play video: ${video.title}`}
              >
                <img src={video.thumb} alt={video.title} loading="lazy" />
                <span className="bridal-video-card__play" aria-hidden="true">▶</span>
              </button>
              <p className="bridal-video-card__title">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {activeVideo ? (
        <div
          className="bridal-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideoIndex(null)}
        >
          <div className="bridal-video-modal__dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="bridal-video-modal__close"
              onClick={() => setActiveVideoIndex(null)}
              aria-label="Close video"
            >
              ×
            </button>
            <div className="bridal-video-modal__media">
              <iframe
                className="bridal-video-modal__iframe"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.ytId}?autoplay=1&rel=0&playsinline=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <aside className="bridal-video-modal__meta">
              <p className="bridal-video-modal__handle">tanji.brides</p>
              <h3>{activeVideo.title}</h3>
              <p>{activeVideo.caption}</p>
              <ul>
                {activeVideo.products.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default BridalServicePage;
