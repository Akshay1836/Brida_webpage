import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/MasterclassPage.css";

const masterclassImages = [
  "/Images/wed1.jpg",
  "/Images/wed22.jpg",
  "/Images/wed23.jpg",
  "/Images/wed24.jpg",
  "/Images/wed25.jpg",
  "/Images/wed26.jpg",
  "/Images/wed27.jpg",
  "/Images/wed28.jpg",
  "/Images/wed29.jpg",
  "/Images/wed30.jpg",
  "/Images/wed31.jpg",
  "/Images/wed32.jpg",
  "/Images/wed33.jpg",
  "/Images/wed34.jpg",
  "/Images/wed35.jpg",
  "/Images/wed36.jpg",
];

const visualStack = ["/Images/wed37.jpg", "/Images/wed38.jpg", "/Images/wed39.jpg"];

const modules = [
  {
    title: "Luminous Skin Prep",
    text: "Camera-ready glow with long-wear layering.",
  },
  {
    title: "Signature Eye Structure",
    text: "Soft, lifted eyes for every face shape.",
  },
  {
    title: "Modern Long-Wear Base",
    text: "Elegant base that holds through long events.",
  },
];

const quickPoints = ["Hands-on", "Live Demo", "Certification"];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

function MasterclassPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(masterclassImages[0]);
  const galleryTrackRef = useRef(null);
  const dragStateRef = useRef({ isDragging: false, startX: 0, startScroll: 0 });
  const autoScrollRef = useRef({ isPaused: false, frameId: null });

  const loopedGalleryImages = useMemo(() => [...masterclassImages, ...masterclassImages], []);

  const classMeta = useMemo(
    () => [
      { label: "Format", value: "Live + Practical" },
      { label: "Duration", value: "6 Hours Intensive" },
      { label: "Level", value: "Beginner to Pro" },
      { label: "Seats", value: "25 Per Batch" },
    ],
    []
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData({ fullName: "", email: "", phone: "", city: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3500);
  };

  useEffect(() => {
    const track = galleryTrackRef.current;
    const autoScroll = autoScrollRef.current;
    if (!track) return undefined;

    const tick = () => {
      if (!autoScroll.isPaused && !dragStateRef.current.isDragging) {
        track.scrollLeft += 0.45;

        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }

      autoScroll.frameId = window.requestAnimationFrame(tick);
    };

    autoScroll.frameId = window.requestAnimationFrame(tick);

    return () => {
      if (autoScroll.frameId) {
        window.cancelAnimationFrame(autoScroll.frameId);
      }
    };
  }, []);

  const pauseAutoScroll = () => {
    autoScrollRef.current.isPaused = true;
  };

  const resumeAutoScroll = () => {
    autoScrollRef.current.isPaused = false;
  };

  const onPointerDown = (event) => {
    const track = galleryTrackRef.current;
    if (!track) return;
    pauseAutoScroll();
    track.setPointerCapture(event.pointerId);
    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startScroll: track.scrollLeft,
    };
    track.classList.add("is-dragging");
  };

  const onPointerMove = (event) => {
    const track = galleryTrackRef.current;
    if (!track || !dragStateRef.current.isDragging) return;
    const deltaX = event.clientX - dragStateRef.current.startX;
    track.scrollLeft = dragStateRef.current.startScroll - deltaX;
  };

  const stopDragging = () => {
    const track = galleryTrackRef.current;
    dragStateRef.current.isDragging = false;
    if (track) {
      track.classList.remove("is-dragging");
    }
    resumeAutoScroll();
  };

  return (
    <main className="masterclass-page" id="masterclass">
      <div className="masterclass-bg-image" aria-hidden="true" style={{ backgroundImage: "url('/Images/wed1.jpg')" }} />

      <motion.section
        className="masterclass-gallery"
        id="masterclass-gallery"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <div className="masterclass-section-head">
          <p>Skill Studio</p>
          <h3>Learn. Create And Elevate Your Artistry.</h3>
        </div>

        <div className="masterclass-featured-image">
          <img src={activeImage} alt="Masterclass featured" loading="lazy" />
        </div>

        <div
          className="masterclass-track"
          ref={galleryTrackRef}
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={() => {
            stopDragging();
            resumeAutoScroll();
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
        >
          {loopedGalleryImages.map((imagePath, index) => (
            <motion.button
              type="button"
              className={`masterclass-thumb ${activeImage === imagePath ? "active" : ""}`}
              key={`${imagePath}-${index}`}
              onClick={() => setActiveImage(imagePath)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={imagePath} alt={`Masterclass look ${index + 1}`} loading="lazy" />
            </motion.button>
          ))}
        </div>

        <div className="masterclass-image-mosaic">
          {visualStack.map((imagePath, index) => (
            <motion.article
              className="masterclass-mosaic-card"
              key={`${imagePath}-${index}`}
              whileHover={{ y: -4 }}
            >
              <img src={imagePath} alt={`Masterclass style board ${index + 1}`} loading="lazy" />
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="masterclass-hero"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className="masterclass-hero-content" variants={fadeUp}>
          <p className="masterclass-tag">Exclusive Pro Workshop</p>
          <h2>Bridal Artistry Masterclass</h2>
          <p>
            A compact, high-impact class for artists who want polished bridal results and a
            premium client finish.
          </p>
          <div className="masterclass-hero-actions">
            <a href="#masterclass-contact" className="masterclass-btn primary">Reserve Your Spot</a>
            <a href="#masterclass-gallery" className="masterclass-btn secondary">View Gallery</a>
          </div>
          <div className="masterclass-quick-points">
            {quickPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </motion.div>

        <motion.div className="masterclass-hero-right" variants={stagger}>
          <motion.article className="masterclass-hero-visual" variants={fadeUp}>
            <img src="/Images/wed41.jpg" alt="Masterclass signature bridal look" loading="lazy" />
            <div className="masterclass-visual-overlay">
              <p>Masterclass Edit</p>
              <h3>Luxury Bridal Finish</h3>
            </div>
          </motion.article>

          <div className="masterclass-meta-grid">
            {classMeta.map((item) => (
              <motion.article className="masterclass-meta-card" key={item.label} variants={fadeUp}>
                <p>{item.label}</p>
                <h3>{item.value}</h3>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="masterclass-modules"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="masterclass-section-head">
          <p>Inside The Session</p>
          <h3>Three Signature Focus Areas</h3>
        </div>
        <div className="masterclass-module-grid">
          {modules.map((module) => (
            <article className="masterclass-module-card" key={module.title}>
              <h4>{module.title}</h4>
              <p>{module.text}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="masterclass-contact"
        id="masterclass-contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="masterclass-contact-copy" variants={fadeUp}>
          <p className="masterclass-tag">Enroll Now</p>
          <h3>Apply For The Next Masterclass Batch</h3>
          <p>Share your details and we will contact you with the next available slot.</p>
        </motion.div>

        <motion.form className="masterclass-contact-form" onSubmit={handleSubmit} variants={fadeUp}>
          <h4>Send Enrollment Request</h4>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Share your current skill level or goals"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
          />

          <button type="submit">Submit Application</button>
          {isSubmitted && (
            <p className="masterclass-success">Thanks. Your request has been received successfully.</p>
          )}
          <p className="masterclass-disclaimer">By submitting, you agree to receive updates for this workshop.</p>
        </motion.form>
      </motion.section>
    </main>
  );
}

export default MasterclassPage;