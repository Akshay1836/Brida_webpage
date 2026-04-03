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

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="mobile-social-icon" aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      {/* Announcement */}
      <div className="announcement-bar">
        <div className="announcement-bar__inner">
          <span>Luxury Bridal Beauty</span>
          <span>London Based Bridal Artistry</span>
          <span>Editorial, Bridal And Masterclass Experiences</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="navbar-logo" aria-label="Go to home page">
          <span className="navbar-logo__eyebrow">By Tanji</span>
          <span className="navbar-logo__title">Tanji Bridal</span>
        </a>

        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#bridal-service">Bridal Service</a>
          <a href="#masterclass">Masterclass</a>
          <a href="#guide">Guide</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="navbar-actions">
          {/* Hamburger */}
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu" type="button">
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* MOBILE FULL SCREEN MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu__brand">
          <span className="mobile-menu__eyebrow">By Tanji</span>
          <span className="mobile-menu__title">Tanji Bridal</span>
        </div>

        {/* Close Icon */}
        <button className="close-icon" onClick={() => setMenuOpen(false)} aria-label="Close menu" type="button">
          <CloseIcon />
        </button>

        {/* Links */}
        <div className="mobile-links">
          <a href="#home" onClick={handleLinkClick}>HOME</a>
           <a href="#about" onClick={handleLinkClick}>ABOUT</a>
          <a href="#bridal-service" onClick={handleLinkClick}>BRIDAL SERVICE</a>
         
          <a href="#masterclass" onClick={handleLinkClick}>MASTERCLASS</a>
          <a href="#guide" onClick={handleLinkClick}>GUIDE</a>
          <a href="#contact" onClick={handleLinkClick}>CONTACT</a>
        </div>

        <div className="mobile-menu__footer">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="mobile-social-link"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;