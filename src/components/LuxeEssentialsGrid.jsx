import React, { useState } from "react";
import "../styles/LuxeEssentialsGrid.css";
const products = [
  {
    name: "Brightening Powders",
    price: "£28.00",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    hoverImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=60",
    featured: true,
  },
  {
    name: "Wedding Cake Concealer",
    price: "£28.00",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    hoverImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Brontour Powders",
    price: "£28.00",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    hoverImg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Bridal Brush Collection 15 Set",
    price: "£200.00",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    hoverImg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=60",
  },
];

const PlusIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#b28c68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10" stroke="#e5e1dc" strokeWidth="2" fill="#fff"/><line x1="11" y1="7" x2="11" y2="15"/><line x1="7" y1="11" x2="15" y2="11"/></svg>
);


function ProductCard({ p }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`luxe-card${p.featured ? " luxe-card-featured" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="luxe-card-img-wrap luxe-card-img-hoverable">
        <img
          src={hovered && p.hoverImg ? p.hoverImg : p.img}
          alt={p.name}
          className="luxe-card-img"
        />
        <button className="luxe-card-plus" aria-label="Add to cart">
          <PlusIcon />
        </button>
      </div>
      <div className="luxe-card-info">
        <div className="luxe-card-name">{p.name.toUpperCase()}</div>
        <div className="luxe-card-price">{p.price}</div>
      </div>
    </div>
  );
}

const LuxeEssentialsGrid = () => (
  <section className="luxe-essentials-section">
    <h2 className="luxe-essentials-title">SHOP ESSENTIALS</h2>
    <div className="luxe-essentials-subtitle">
      HIGH PERFORMANCE PIGMENTS, EFFORTLESS BLENDING, CAMERA READY FINISHES, IN LIGHTWEIGHT &amp; REFINED PACKAGED TREASURES
    </div>
    <div className="luxe-essentials-grid">
      {products.map((p, i) => (
        <ProductCard p={p} key={i} />
      ))}
    </div>
    <button className="luxe-viewall-btn">View all</button>
  </section>
);

export default LuxeEssentialsGrid;
