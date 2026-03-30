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
          <a href="#">Bridal Service</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Masterclass</a>
          <a href="#">Guide</a>
          <a href="#">Contact</a>
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
          <a href="#">BRIDAL SERVICE</a>
          <a href="#">SHOP</a>
          <a href="#">ABOUT</a>
          <a href="#">MASTERCLASS</a>
          <a href="#">GUIDE</a>
          <a href="#">CONTACT</a>
        </div>

     
      </div>
    </>
  );
};

export default Navbar;