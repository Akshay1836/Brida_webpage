import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/VelvetMediaGallery.css";

const mediaItems = [
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    likes: 320,
    comments: 41,
    caption: "Behind the scenes: flawless skin prep."
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://www.w3schools.com/html/pic_trulli.jpg",
    likes: 210,
    comments: 18,
    caption: "Effortless beauty in motion."
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    likes: 315,
    comments: 35,
    caption: "Bridal makeup transformation."
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://www.w3schools.com/html/pic_trulli.jpg",
    likes: 275,
    comments: 28,
    caption: "Bridal glow-up process."
  }
];

const VelvetMediaGallery = () => {
  const [modalIndex, setModalIndex] = useState(null);
  const swiperRef = useRef(null);

  if (mediaItems.length === 0) return null;

  const currentMedia = modalIndex !== null ? mediaItems[modalIndex] : null;

  return (
    <section className="velvet-gallery-section">
      <div className="velvet-gallery-header">
        <h2 className="velvet-gallery-title">Moments of Elegance</h2>
        <p className="velvet-gallery-subtitle">Discover the artistry & beauty behind every bridal transformation</p>
      </div>

      {/* Swiper Gallery */}
      <div className="velvet-gallery-swiper-wrapper">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            nextEl: ".velvet-swiper-button-next",
            prevEl: ".velvet-swiper-button-prev"
          }}
          pagination={{ clickable: true, el: ".velvet-swiper-pagination" }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 18 },
            1400: { slidesPerView: 4, spaceBetween: 20 }
          }}
          className="velvet-gallery-swiper"
        >
          {mediaItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="velvet-media-card"
                onClick={() => setModalIndex(idx)}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === "Enter" && setModalIndex(idx)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.caption}
                  className="velvet-media-thumb"
                  loading="lazy"
                />
                <div className="velvet-media-type">
                  {item.type === "video" ? "▶" : "🖼"}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="velvet-swiper-button-prev" aria-label="Previous slide">
          ‹
        </button>
        <button className="velvet-swiper-button-next" aria-label="Next slide">
          ›
        </button>

        {/* Pagination Dots */}
        <div className="velvet-swiper-pagination"></div>
      </div>

      {/* Modal Viewer */}
      {currentMedia && (
        <div
          className="velvet-modal-overlay"
          onClick={() => setModalIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="velvet-modal-content">
            {/* Header */}
            <div className="velvet-modal-top">
              <span className="velvet-modal-username">by.tanji</span>
              <button className="velvet-modal-viewpost" aria-label="View post">View Post</button>
              <button
                className="velvet-modal-close"
                onClick={() => setModalIndex(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Media */}
            <div className="velvet-modal-center">
              {currentMedia.type === "video" ? (
                <video
                  src={currentMedia.src}
                  className="velvet-modal-video"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.caption}
                  className="velvet-modal-image"
                />
              )}
            </div>

            {/* Footer */}
            <div className="velvet-modal-bottom">
              <p className="velvet-modal-caption">{currentMedia.caption}</p>
              <div className="velvet-modal-icons">
                <span>❤️ {currentMedia.likes}</span>
                <span>💬 {currentMedia.comments}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="velvet-modal-arrows">
              <button
                className="velvet-modal-arrow"
                onClick={() => {
                  const newIndex = (modalIndex - 1 + mediaItems.length) % mediaItems.length;
                  setModalIndex(newIndex);
                }}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="velvet-modal-arrow"
                onClick={() => {
                  const newIndex = (modalIndex + 1) % mediaItems.length;
                  setModalIndex(newIndex);
                }}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VelvetMediaGallery;
