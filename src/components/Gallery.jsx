import React from "react";
import "../styles/Gallery.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
];

const InstagramIcon = () => (
  <svg className="gallery-icon" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
);

const Gallery = () => (
  <section className="gallery-section" id="gallery">
    <h2 className="gallery-heading">By Tanji – Instagram</h2>
    <div className="gallery-scroll">
      {galleryImages.map((img, i) => (
        <div className="gallery-card" key={i}>
          <img src={img} alt="Bridal Gallery" className="gallery-img" loading="lazy" />
          <div className="gallery-overlay">
            <InstagramIcon />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
