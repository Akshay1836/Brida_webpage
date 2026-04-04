import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/BridalTestimonials.css";

const testimonials = [
  {
    title: "SEAMLESS EXPERIENCE",
    text: "From booking to the final touch, everything felt effortless and refined. The look was created with such precision that it exceeded all expectations. The overall experience felt truly special.",
    author: "-- Client Review"
  },
  {
    title: "FLAWLESS RESULTS",
    text: "Every detail was understood and executed beautifully. The makeup remained perfect throughout the entire event, capturing elegance in every moment. It was a look that felt both stunning and completely authentic.",
    author: "-- Client Review"
  },
  {
    title: "UNFORGETTABLE MOMENT",
    text: "The entire experience was nothing short of exceptional. The finish was radiant, the attention to detail unmatched, and the final look received endless compliments. A truly memorable transformation.",
    author: "-- Client Review"
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

