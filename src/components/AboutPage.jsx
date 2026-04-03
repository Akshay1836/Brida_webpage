import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/AboutPage.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const topCollage = [
  "/Images/wed21.jpg",
  "/Images/wed22.jpg",
  "/Images/wed23.jpg",
  "/Images/wed24.jpg",
  "/Images/wed25.jpg",
  "/Images/wed26.jpg",
  "/Images/wed27.jpg",
];

const movingCollage = [...topCollage, ...topCollage];

const editorialStrip = [
  "/Images/wed28.jpg",
  "/Images/wed29.jpg",
  "/Images/wed30.jpg",
  "/Images/wed31.jpg",
  "/Images/wed32.jpg",
];

const weddingStory = [
  "/Images/wed33.jpg",
  "/Images/wed34.jpg",
  "/Images/wed35.jpg",
  "/Images/wed36.jpg",
  "/Images/wed37.jpg",
  "/Images/wed38.jpg",
  "/Images/wed39.jpg",
  "/Images/wed40.jpg",
  "/Images/wed41.jpg",
  "/Images/wed42.jpg",
  "/Images/wed43.jpg",
  "/Images/wed44.jpg",
];

const brandHighlights = [
  { value: "10+", label: "Years In Beauty" },
  { value: "150+", label: "Brides Styled" },
  { value: "Global", label: "Destination Bookings" },
  { value: "Editorial", label: "Commercial Experience" },
];

const signatureServices = [
  {
    title: "Bridal Beauty",
    text: "Tailored skin-first makeup design for ceremonies, receptions and multi-look wedding days.",
  },
  {
    title: "Editorial Glamour",
    text: "Camera-aware beauty direction for campaigns, portraits, luxury events and personal branding.",
  },
  {
    title: "Masterclass Education",
    text: "Refined artistry sessions built for artists wanting polished technique and elevated client work.",
  },
];

const studioNotes = [
  "Elevated skin preparation and long-wear complexion work.",
  "Soft structure, luminous finishes and detail-driven styling.",
  "A calm luxury experience designed around the client, venue and photography.",
];

function AboutPage() {
  return (
    <main className="about-page" id="about">

      {/* ── Hero ── */}
      <section className="about-hero">
        <motion.div
          className="about-hero-inner"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p className="about-hero-eyebrow" variants={fadeUp}>
            Beauty Artistry · London
          </motion.p>
          <motion.h1 variants={fadeUp}>
            The Vision Behind<br /><em>By Tanji</em>
          </motion.h1>
          <motion.p className="about-hero-sub" variants={fadeUp}>
            A decade of refined craft, published artistry, and beauty<br className="bp-hide" />
            designed to feel as beautiful as it looks.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Intro marquee + copy + stats ── */}
      <section className="about-intro">
        <div className="about-intro-marquee">
          <div className="about-intro-track">
          {movingCollage.map((img, index) => (
            <article className="about-photo" key={`${img}-${index}`}>
              <img src={img} alt={`Tanji portrait ${index + 1}`} loading="lazy" />
            </article>
          ))}
          </div>
        </div>

        <motion.div
          className="about-copy-wrap"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p variants={fadeUp}>
            Tanjia Sayed is a digital luxury content creator, published professional bridal
            makeup artist, and founder of By Tanji Beauty, based in London. Her demographic
            comprises both an international bridal clientele and a range of commercial brands.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-highlights-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {brandHighlights.map((item) => (
            <motion.article className="about-highlight-card" key={item.label} variants={fadeUp}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── Editorial slider ── */}
      <section className="about-editorial">
        <motion.div
          className="about-section-label"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p className="about-eyebrow" variants={fadeUp}>Work & Craft</motion.p>
          <motion.h2 variants={fadeUp}>Editorial Portfolio</motion.h2>
        </motion.div>

        <div className="about-editorial-slider-wrap">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            className="about-editorial-swiper"
            loop={true}
            speed={850}
            grabCursor={true}
            watchOverflow={true}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".about-editorial-arrow-prev",
              nextEl: ".about-editorial-arrow-next",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: { slidesPerView: 1.15, spaceBetween: 12 },
              640: { slidesPerView: 2.1, spaceBetween: 14 },
              900: { slidesPerView: 3.15, spaceBetween: 16 },
              1200: { slidesPerView: 4.15, spaceBetween: 18 },
            }}
          >
            {editorialStrip.map((img, index) => (
              <SwiperSlide key={img}>
                <article className="editorial-photo">
                  <img src={img} alt={`Editorial look ${index + 1}`} loading="lazy" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="about-editorial-arrow about-editorial-arrow-prev" aria-label="Previous editorial image">
            <span aria-hidden="true">&#8592;</span>
          </button>
          <button className="about-editorial-arrow about-editorial-arrow-next" aria-label="Next editorial image">
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>

        <div className="about-editorial-copy">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            Having worked with a diverse range of faces for commercial, editorial and private
            events, Tanji adheres to an elegant yet glamorous aesthetic. Upon graduating with
            a Law LLB Honours Degree in London, what first ignited 10 years' experience in the
            professional makeup artist industry. Tanji has worked both nationally and
            internationally with notable and renowned publications such as VOGUE, ELLE and GQ.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            "I love that popular culture always influences beauty standards. It is ever evolving,
            which keeps it fascinating. Everyone's individual style needs specific catering,
            so I endeavour to approach this with the highest calibre of service."
          </motion.p>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            Tanjia Sayed
          </motion.span>
        </div>
      </section>

      {/* ── Wedding story grid ── */}
      <section className="about-story">
        <motion.header
          className="about-story-head"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p variants={fadeUp}>29.06.22</motion.p>
          <motion.h2 variants={fadeUp}>A Ritz Wedding</motion.h2>
        </motion.header>

        <div className="about-story-grid">
          {weddingStory.map((img, index) => (
            <article className="story-photo" key={`${img}-${index}`}>
              <img src={img} alt={`Ritz wedding moment ${index + 1}`} loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      {/* ── Signature services ── */}
      <section className="about-signature">
        <motion.div
          className="about-section-heading"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p variants={fadeUp}>Signature Offering</motion.p>
          <motion.h2 variants={fadeUp}>Beauty With Structure And Ease</motion.h2>
        </motion.div>

        <motion.div
          className="about-signature-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {signatureServices.map((service) => (
            <motion.article className="about-service-card" key={service.title} variants={fadeUp}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── Philosophy ── */}
      <section className="about-philosophy">
        <motion.div
          className="about-philosophy-copy"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="about-eyebrow" variants={fadeUp}>The Approach</motion.p>
          <motion.h2 variants={fadeUp}>Luxury Should Feel Personal</motion.h2>
          <motion.p variants={fadeUp}>
            Every booking is shaped around the person, the wardrobe, the lighting and the pace
            of the event. The result is beauty that feels polished in person, elegant in motion,
            and consistent across photography, film and real-life wear.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-philosophy-panel"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {studioNotes.map((note, index) => (
            <motion.div className="about-note-row" key={note} variants={fadeUp}>
              <span className="about-note-mark">{String(index + 1).padStart(2, "0")}</span>
              <p>{note}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

export default AboutPage;
