import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/AboutPage.css";

const topCollage = [
  "/Images/wed1.jpg",
  "/Images/wed2.jpg",
  "/Images/wed3.jpg",
  "/Images/wed4.jpg",
  "/Images/wed5.jpg",
  "/Images/wed6.jpg",
  "/Images/wed7.jpg",
];

const movingCollage = [...topCollage, ...topCollage];

const editorialStrip = [
  "/Images/wed8.jpg",
  "/Images/wed9.jpg",
  "/Images/wed10.jpg",
  "/Images/wed11.jpg",
  "/Images/wed12.jpg",
];

const weddingStory = [
  "/Images/wed13.jpg",
  "/Images/wed14.jpg",
  "/Images/wed15.jpg",
  "/Images/wed16.jpg",
  "/Images/wed1.jpg",
  "/Images/wed2.jpg",
  "/Images/wed3.jpg",
  "/Images/wed4.jpg",
  "/Images/wed5.jpg",
  "/Images/wed6.jpg",
  "/Images/wed7.jpg",
  "/Images/wed8.jpg",
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

        <div className="about-copy-wrap">
          <p>
            Tanjia Sayed is a digital luxury content creator, published professional bridal
            makeup artist, and founder of By Tanji Beauty, based in London. Her demographic
            comprises both an international bridal clientele and a range of commercial brands.
          </p>
        </div>

        <div className="about-highlights-grid">
          {brandHighlights.map((item) => (
            <article className="about-highlight-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-editorial">
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
          <p>
            Having worked with a diverse range of faces for commercial, editorial and private
            events, Tanji adheres to an elegant yet glamorous aesthetic. Upon graduating with
            a Law LLB Honours Degree in London, what first ignited 10 years' experience in the
            professional makeup artist industry. Tanji has worked both nationally and
            internationally with notable and renowned publications such as VOGUE, ELLE and GQ.
          </p>
          <p>
            "I love that popular culture always influences beauty standards. It is ever evolving,
            which keeps it fascinating. Everyone's individual style needs specific catering,
            so I endeavour to approach this with the highest calibre of service."
          </p>
          <span>Tanjia Sayed</span>
        </div>
      </section>

      <section className="about-story">
        <header className="about-story-head">
          <p>29.06.22</p>
          <h2>A Ritz Wedding</h2>
        </header>

        <div className="about-story-grid">
          {weddingStory.map((img, index) => (
            <article className="story-photo" key={`${img}-${index}`}>
              <img src={img} alt={`Ritz wedding moment ${index + 1}`} loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section className="about-signature">
        <div className="about-section-heading">
          <p>Signature Offering</p>
          <h2>Beauty With Structure And Ease</h2>
        </div>

        <div className="about-signature-grid">
          {signatureServices.map((service) => (
            <article className="about-service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-philosophy">
        <div className="about-philosophy-copy">
          <p className="about-eyebrow">The Approach</p>
          <h2>Luxury Should Feel Personal</h2>
          <p>
            Every booking is shaped around the person, the wardrobe, the lighting and the pace
            of the event. The result is beauty that feels polished in person, elegant in motion,
            and consistent across photography, film and real-life wear.
          </p>
        </div>

        <div className="about-philosophy-panel">
          {studioNotes.map((note, index) => (
            <div className="about-note-row" key={note}>
              <span className="about-note-mark">{String(index + 1).padStart(2, "0")}</span>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
