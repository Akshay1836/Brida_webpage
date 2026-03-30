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
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1200: { slidesPerView: 3 },
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
      </div>
    </section>
  );
};

export default Testimonials;