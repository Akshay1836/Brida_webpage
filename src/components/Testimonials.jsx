import React from "react";
import "../styles/Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "The artistry and attention to detail made my wedding day truly magical. I felt like a queen!",
    author: "– Priya S.",
  },
  {
    quote:
      "Every product is luxurious and gentle. My skin glowed and my confidence soared!",
    author: "– Emily R.",
  },
  {
    quote:
      "Tanji's masterclass changed my approach to bridal beauty. Highly recommended for artists!",
    author: "– Sofia M.",
  },
  {
    quote:
      "The booking process was so easy, and the results were beyond my expectations!",
    author: "– Ammarah Khan",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">BRIDAL TESTIMONIALS</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="testimonials-swiper"
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={false}
          speed={700}
          loop={true}
          grabCursor={true}
          watchOverflow={true}
          navigation={{
            prevEl: ".testimonials-arrow-prev",
            nextEl: ".testimonials-arrow-next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 14 },
            600: { slidesPerView: 1.2, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 2.4, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">
                <p className="testimonial-quote">{t.quote}</p>
                <p className="testimonial-author">{t.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="testimonials-arrow testimonials-arrow-prev" aria-label="Previous testimonial">
          <span aria-hidden="true">&#8592;</span>
        </button>
        <button className="testimonials-arrow testimonials-arrow-next" aria-label="Next testimonial">
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;