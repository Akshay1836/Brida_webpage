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
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-heading">What Our Brides Say</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial-card">
              <div className="testimonial-quote">{t.quote}</div>
              <div className="testimonial-author">{t.author}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;