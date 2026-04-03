import React, { useState, useEffect } from "react";
import "../styles/VideoGalleyNew.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const videos = [
  {
    id: 1,
    title: "Bridal Highlights 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
    views: 1240,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Wedding Ceremony",
    thumbnail:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:15",
    views: 2340,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Reception Moments",
    thumbnail:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:50",
    views: 1680,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Bridal Preparations",
    thumbnail:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6:30",
    views: 945,
    rating: 4.5,
  },
  {
    id: 5,
    title: "Cinematic Highlights",
    thumbnail:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "7:10",
    views: 3210,
    rating: 5.0,
  },
];

const VideoGalleryNew = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);

  const next = () =>
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % videos.length
    );

  const prev = () =>
    setActiveIndex((prev) =>
      prev === null
        ? 0
        : prev === 0
        ? videos.length - 1
        : prev - 1
    );

  /* Keyboard Support */
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;

      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  /* Prevent background scroll */
  useEffect(() => {
    document.body.style.overflow =
      activeIndex !== null ? "hidden" : "auto";
  }, [activeIndex]);

  return (
    <div className="video-gallery">
      <div className="velvet-gallery-header">
        <h2 className="velvet-gallery-title">Moments of Elegance</h2>
        <p className="velvet-gallery-subtitle">
          Discover the artistry & beauty behind every bridal transformation
        </p>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Pagination]}
        className="video-gallery-swiper"
        navigation={{
          prevEl: ".video-gallery-arrow-prev",
          nextEl: ".video-gallery-arrow-next",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        speed={700}
        grabCursor={true}
        watchOverflow={true}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          0: { slidesPerView: 1.1, spaceBetween: 14 },
          600: { slidesPerView: 2, spaceBetween: 16 },
          900: { slidesPerView: 3, spaceBetween: 18 },
          1200: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {videos.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className="video-card"
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.thumbnail} alt={item.title} />

              <div className="overlay">
                <span className="duration">{item.duration}</span>

                <div className="play-btn">
                  <svg viewBox="0 0 24 24">
                    <polygon
                      points="5,3 19,12 5,21"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="video-gallery-arrow video-gallery-arrow-prev" aria-label="Previous video">
        <span aria-hidden="true">&#8592;</span>
      </button>
      <button className="video-gallery-arrow video-gallery-arrow-next" aria-label="Next video">
        <span aria-hidden="true">&#8594;</span>
      </button>

      {/* MODAL */}
      {activeIndex !== null && (
        <div className="modal">
          <div className="modal-backdrop" onClick={closeModal}></div>

          <span className="close" onClick={closeModal}>
            ×
          </span>

          <button className="nav left" onClick={prev}>
            ‹
          </button>
          <button className="nav right" onClick={next}>
            ›
          </button>

          <div className="modal-content">
            <iframe
              key={videos[activeIndex].id}
              src={videos[activeIndex].videoUrl + "?autoplay=1"}
              title="video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            <div className="video-info">
              <h3>{videos[activeIndex].title}</h3>
              <p>
                👁 {videos[activeIndex].views} • ⭐{" "}
                {videos[activeIndex].rating}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGalleryNew;