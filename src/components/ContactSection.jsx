import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "../styles/ContactSection.css";

const initialForm = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const errors = useMemo(() => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^\\S+@\\S+\\.\\S+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Please add a subject.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please add your message.";
    } else if (formData.message.trim().length < 15) {
      nextErrors.message = "Message should be at least 15 characters.";
    }

    return nextErrors;
  }, [formData]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const onBlur = (event) => {
    const { name } = event.target;
    setTouched((previous) => ({ ...previous, [name]: true }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const touchAll = {
      fullName: true,
      email: true,
      subject: true,
      message: true,
    };
    setTouched(touchAll);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setFormData(initialForm);
    setTouched({});
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  return (
    <section className="contact-section contact-page" id="contact">
      <div className="contact-section__bg-shape" aria-hidden="true" />
      <motion.div
        className="contact-section__container"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.article className="contact-section__details" variants={fadeUp}>
          <p className="contact-section__eyebrow">Contact</p>
          <h2 className="contact-section__title">Get In Touch</h2>
          <p className="contact-section__description">
            Build your bridal look with a studio-level beauty direction. Share your date,
            vision, and event details for a tailored booking proposal.
          </p>

          <div className="contact-section__visuals" aria-hidden="true">
            <motion.article className="contact-section__visual-card contact-section__visual-card--primary" whileHover={{ y: -4 }}>
              <img src="/Images/wed14.jpg" alt="" loading="lazy" />
              <div className="contact-section__visual-overlay">
                <p>Bridal Session</p>
                <span>Luxury Skin Finish</span>
              </div>
            </motion.article>

            <motion.article className="contact-section__visual-card contact-section__visual-card--secondary" whileHover={{ y: -4 }}>
              <img src="/Images/wed10.jpg" alt="" loading="lazy" />
            </motion.article>
          </div>

          <div className="contact-section__info-list" role="list" aria-label="Contact details">
            <div className="contact-section__info-item" role="listitem">
              <span className="contact-section__info-icon" aria-hidden="true">@</span>
              <div>
                <p>Email</p>
                <a href="mailto:hello@bytanji.com">hello@bytanji.com</a>
              </div>
            </div>

            <div className="contact-section__info-item" role="listitem">
              <span className="contact-section__info-icon" aria-hidden="true">TEL</span>
              <div>
                <p>Phone</p>
                <a href="tel:+447700900123">+44 7700 900123</a>
              </div>
            </div>

            <div className="contact-section__info-item" role="listitem">
              <span className="contact-section__info-icon" aria-hidden="true">LOC</span>
              <div>
                <p>Studio</p>
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article className="contact-section__form-card" aria-labelledby="contact-form-title" variants={fadeUp}>
          <h3 id="contact-form-title" className="contact-section__form-title">Send A Message</h3>
          <p className="contact-section__form-copy">
            Tell us about your event timeline and preferences. We will return with availability,
            package options, and next steps.
          </p>

          <form className="contact-section__form" onSubmit={onSubmit} noValidate>
            <div
              className={`contact-section__field ${
                touched.fullName && errors.fullName ? "contact-section__field--error" : ""
              }`}
            >
              <input
                id="contact-full-name"
                type="text"
                name="fullName"
                placeholder=" "
                value={formData.fullName}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="name"
              />
              <label htmlFor="contact-full-name">Full Name</label>
              {touched.fullName && errors.fullName ? (
                <small>{errors.fullName}</small>
              ) : null}
            </div>

            <div
              className={`contact-section__field ${
                touched.email && errors.email ? "contact-section__field--error" : ""
              }`}
            >
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="email"
              />
              <label htmlFor="contact-email">Email</label>
              {touched.email && errors.email ? <small>{errors.email}</small> : null}
            </div>

            <div
              className={`contact-section__field ${
                touched.subject && errors.subject ? "contact-section__field--error" : ""
              }`}
            >
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder=" "
                value={formData.subject}
                onChange={onChange}
                onBlur={onBlur}
              />
              <label htmlFor="contact-subject">Subject</label>
              {touched.subject && errors.subject ? <small>{errors.subject}</small> : null}
            </div>

            <div
              className={`contact-section__field contact-section__field--textarea ${
                touched.message && errors.message ? "contact-section__field--error" : ""
              }`}
            >
              <textarea
                id="contact-message"
                name="message"
                placeholder=" "
                rows="5"
                value={formData.message}
                onChange={onChange}
                onBlur={onBlur}
              />
              <label htmlFor="contact-message">Message</label>
              {touched.message && errors.message ? <small>{errors.message}</small> : null}
            </div>

            <button className="contact-section__submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Message"}
            </button>

            {submitSuccess ? (
              <p className="contact-section__success" role="status">
                Thank you. Your request has been sent.
              </p>
            ) : null}
          </form>
        </motion.article>
      </motion.div>
    </section>
  );
}

export default ContactSection;
