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
          speed={700}
          grabCursor={true}
          watchOverflow={true}
          navigation={{
            nextEl: ".testimonial-arrow-next",
            prevEl: ".testimonial-arrow-prev"
          }}
          pagination={{
            clickable: true,
            el: ".bridal-testimonials-pagination",
            bulletClass: "testimonial-bullet",
            bulletActiveClass: "testimonial-bullet-active",
            dynamicBullets: true
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 14 },
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
          <span aria-hidden="true">&#8592;</span>
        </button>

        <button className="testimonial-arrow testimonial-arrow-next" aria-label="Next testimonial">
          <span aria-hidden="true">&#8594;</span>
        </button>

        <div className="bridal-testimonials-pagination"></div>
      </div>
    </section>
  );
};

export default BridalTestimonials;

