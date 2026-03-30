import React, { useState, useEffect } from "react";
import "../styles/VideoGalleyNew.css";

const videos = [
  {
    id: 1,
    title: "Bridal Highlights 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "youtube",
    duration: "3:45",
    category: "highlights",
    views: 1240,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Wedding Ceremony",
    thumbnail:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "youtube",
    duration: "8:15",
    category: "ceremony",
    views: 2340,
    rating: 4.9,
  },
  {
    id: 4,
    title: "Reception Moments",
    thumbnail:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "youtube",
    duration: "4:50",
    category: "reception",
    views: 1680,
    rating: 4.7,
  },
];

const VideoGalleryNew = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % videos.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );

  /* 🔥 Keyboard Support */
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

  return (
    <div className="video-gallery">
      <h2 className="title">BY TANJI</h2>

      <div className="video-grid">
        {videos.map((item, index) => (
          <div
            key={item.id}
            className="video-card"
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.thumbnail} alt={item.title} />

            {/* Overlay */}
            <div className="overlay">
              <span className="duration">{item.duration}</span>
              <span className="play-icon">▶</span>
            </div>
          </div>
        ))}
      </div>

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
            {/* 🔥 YouTube Support */}
            <iframe
              src={videos[activeIndex].videoUrl + "?autoplay=1"}
              title="video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            {/* Instagram style info */}
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