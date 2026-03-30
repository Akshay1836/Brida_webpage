import React from "react";
import "../styles/Footer.css";

const InstagramIcon = () => (
  <svg className="footer-social-icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.266-.07-1.645-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
);

const TikTokIcon = () => (
  <svg className="footer-social-icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z"/></svg>
);

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-columns">
        {/* INFO Column */}
        <div className="footer-column">
          <h3 className="footer-column-title">INFO</h3>
          <ul className="footer-links-list">
            <li><a href="#contact" className="footer-link">CONTACT US</a></li>
            <li><a href="#about" className="footer-link">ABOUT US</a></li>
            <li><a href="#guide" className="footer-link">GUIDE</a></li>
            <li><a href="#masterclass" className="footer-link">MASTERCLASS</a></li>
          </ul>
        </div>

        {/* LEARN Column */}
        <div className="footer-column">
          <h3 className="footer-column-title">LEARN</h3>
          <ul className="footer-links-list">
            <li><a href="#privacy" className="footer-link">PRIVACY POLICY</a></li>
            <li><a href="#terms" className="footer-link">TERMS OF SERVICES</a></li>
            <li><a href="#shipping" className="footer-link">SHIPPING POLICY</a></li>
            <li><a href="#refund" className="footer-link">REFUND POLICY</a></li>
          </ul>
        </div>

        {/* CONTACT Column */}
        <div className="footer-column">
          <h3 className="footer-column-title">CONTACT</h3>
          <p className="footer-email"><a href="mailto:info@bytanji.uk">info@bytanji.uk</a></p>
          <div className="footer-socials">
            <a href="#instagram" className="social-link"><InstagramIcon /></a>
            <a href="#tiktok" className="social-link"><TikTokIcon /></a>
          </div>
        </div>

        {/* VOGUE Badge */}
        <div className="footer-badge">
          <div className="vogue-badge">
            <span className="vogue-text">FEATURED IN</span>
            <span className="vogue-brand">VOGUE</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © 2026, BYTANJI.UK Powered by Shopify
      </div>
    </div>
  </footer>
);

export default Footer;
