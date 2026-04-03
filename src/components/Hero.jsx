import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  const heroStyle = {
    backgroundImage: 'url("/Images/wed30.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <p className="hero-tag">Luxury Bridal Beauty</p>

        <h1 className="hero-heading">
          Crafted for Brides <br /> Perfected for Artists
        </h1>

        <p className="hero-subtext">
          High-performance pigments, effortless blending, and camera-ready
          finishes designed for timeless elegance.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Shop Essentials</button>
          <button className="btn-outline">Explore Services</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;