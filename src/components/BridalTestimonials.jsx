import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/BridalTestimonials.css";

const testimonials = [
  {
    title: "THOROUGH & EFFICIENT",
    text: "The booking process was so easy, the appointment was speedy & efficient. Tanji delivered my dream bridal look with minimum direction and my professional photos came out incredible. I felt so beautiful.",
    author: "-- Ammarah Khan"
  },
  {
    title: "ABSOLUTE PERFECTION",
    text: "Tanji understood exactly what I wanted from my requests. My makeup lasted flawlessly through tears, dancing, and countless photos. I've never felt more beautiful or more myself. I couldn't be happier with my experience",
    author: "-- Alisha Kaur"
  },
  {
    title: "MEMORABLE EXPERIENCE",
    text: "I was obsessed, my problematic skin looked flawless, the photos turned out beautiful and the appointment with Tanji ran perfectly, can we do it all again! Everyone loved and raved about my look!",
    author: "-- Fatima Ahmed"
  }
];

const BridalTestimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bridal-testimonials-section">
      <h2 className="bridal-testimonials-heading">BRIDAL TESTIMONIALS</h2>
      
      <div className="bridal-testimonials-swiper-wrapper">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".testimonial-arrow-next",
            prevEl: ".testimonial-arrow-prev"
          }}
          pagination={{
            clickable: true,
            el: ".bridal-testimonials-pagination",
            bulletClass: "testimonial-bullet",
            bulletActiveClass: "testimonial-bullet-active"
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
          }}
          className="bridal-testimonials-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">
                <div className="testimonial-title">{t.title}</div>
                <div className="testimonial-text">"{t.text}"</div>
                <div className="testimonial-author">{t.author}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="testimonial-arrow testimonial-arrow-prev" aria-label="Previous testimonial">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="#2a1207" strokeWidth="2" fill="#fff"/>
            <path d="M19.5 10L13.5 16L19.5 22" stroke="#2a1207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button className="testimonial-arrow testimonial-arrow-next" aria-label="Next testimonial">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="#2a1207" strokeWidth="2" fill="#fff"/>
            <path d="M12.5 10L18.5 16L12.5 22" stroke="#2a1207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="bridal-testimonials-pagination"></div>
      </div>
    </section>
  );
};

export default BridalTestimonials;

