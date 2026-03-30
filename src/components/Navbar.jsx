import React, { useState } from "react";
import "../styles/Navbar.css";

/* Icons */
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" className="nav-icon">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="nav-icon">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement */}
      <div className="announcement-bar">
        Luxury Bridal Beauty – Free shipping on orders over $150
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">Tanji Bridal</div>

        <div className="navbar-links">
          <a href="#bridal-service">Bridal Service</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#masterclass">Masterclass</a>
          <a href="#guide">Guide</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger */}
        <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </div>
      </nav>

      {/* MOBILE FULL SCREEN MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        
        {/* Close Icon */}
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <CloseIcon />
        </div>

        {/* Links */}
        <div className="mobile-links">
          <a href="#bridal-service">BRIDAL SERVICE</a>
          <a href="#shop">SHOP</a>
          <a href="#about">ABOUT</a>
          <a href="#masterclass">MASTERCLASS</a>
          <a href="#guide">GUIDE</a>
          <a href="#contact">CONTACT</a>
        </div>

     
      </div>
    </>
  );
};

export default Navbar;