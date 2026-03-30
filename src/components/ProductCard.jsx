

import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ProductCard.css";

const products = [
  {
    name: "Radiant Glow Primer",
    price: "$48",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    hoverImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60"
  },
  {
    name: "Silk Veil Foundation",
    price: "$62",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    hoverImg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=60"
  },
  {
    name: "Luxe Lip Color",
    price: "$32",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    hoverImg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=60"
  },
  {
    name: "Bridal Setting Mist",
    price: "$38",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    hoverImg: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=60"
  },
];





const ProductCard = ({ name, price, img, hoverImg }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="product-card luxury"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-img-wrap">
        <img
          src={hovered && hoverImg ? hoverImg : img}
          alt={name}
          className="product-img"
        />
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
      </div>
    </motion.div>
  );
};


const ShopEssentials = () => (
  <section className="product-section" id="shop">
    <h2 className="shop-heading">SHOP ESSENTIALS</h2>
    <div className="shop-subheading">
      HIGH PERFORMANCE PIGMENTS, EFFORTLESS BLENDING, CAMERA READY FINISHES, IN LIGHTWEIGHT &amp; REFINED PACKAGED TREASURES
    </div>
    <div className="product-grid">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
    <button className="view-all-btn">View all</button>
  </section>
);

export default ShopEssentials;
