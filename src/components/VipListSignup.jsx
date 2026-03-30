import React, { useState } from "react";
import "../styles/VipListSignup.css";

const ArrowIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const VipListSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="vip-list-section">
      <div className="vip-list-container">
        <div className="vip-list-content">
          <h2 className="vip-list-title">JOIN THE VIP LIST</h2>
          <p className="vip-list-subtitle">Get exclusive access to new collections, insider tips, and special offers.</p>
        </div>

        <div className="vip-list-form-container">
          <form className="vip-list-form" onSubmit={handleSubmit}>
            <div className="email-input-wrapper">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="vip-email-input"
                required
              />
              <button type="submit" className="vip-submit-btn" aria-label="Subscribe">
                <ArrowIcon />
              </button>
            </div>
            <p className="vip-privacy-text">
              By clicking submit you are agreeing to the <a href="#privacy">Privacy Policy</a>.
            </p>
          </form>

          {isSubmitted && (
            <div className="vip-success-message">
              Thank you for joining! Check your email.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VipListSignup;
