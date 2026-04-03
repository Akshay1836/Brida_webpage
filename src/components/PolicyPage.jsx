import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/PolicyPage.css";

const policySections = [
  {
    id: "privacy",
    label: "Privacy Policy",
    intro: "How we collect, use, and protect personal data from enquiries, consultations, bookings, and newsletter signups.",
    points: [
      "We collect only information needed for booking, support, and communication.",
      "Your personal details are never sold or rented to third parties.",
      "Booking records may be retained for legal, accounting, and service quality purposes.",
      "You can request correction or deletion of your information by contacting us.",
    ],
  },
  {
    id: "terms",
    label: "Terms of Service",
    intro: "Guidelines and responsibilities for all bridal services, masterclasses, and related beauty appointments.",
    points: [
      "Appointments are confirmed only after required booking payment is received.",
      "Clients are responsible for providing accurate event details and timelines.",
      "Any misuse of website content, branding, or intellectual assets is prohibited.",
      "We reserve the right to update service conditions where required by business or law.",
    ],
  },
  {
    id: "shipping",
    label: "Shipping Policy",
    intro: "Delivery details for beauty products, kits, and any purchasable physical items offered through the site.",
    points: [
      "Dispatch timing and delivery windows are shared at the time of order confirmation.",
      "Shipping fees, customs duties, and taxes may vary by destination.",
      "Incorrect shipping information may delay delivery and incur re-shipping costs.",
      "If your parcel arrives damaged, contact support with photos within 48 hours.",
    ],
  },
  {
    id: "refund",
    label: "Refund Policy",
    intro: "Our cancellation and refund standards for appointments, deposits, classes, and eligible product orders.",
    points: [
      "Booking deposits are non-refundable unless explicitly stated otherwise in writing.",
      "Service reschedules are subject to availability and notice period requirements.",
      "Refund requests for product issues are reviewed case-by-case with proof of purchase.",
      "Approved refunds are processed through the original payment method.",
    ],
  },
];

function PolicyPage({ activeSection }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  useEffect(() => {
    if (!activeSection) return;

    const target = document.getElementById(activeSection);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);

  return (
    <main className="policy-page" id="policies">
      <motion.section
        className="policy-hero"
        aria-labelledby="policy-page-title"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="policy-hero__eyebrow" variants={fadeUp}>Legal & Trust</motion.p>
        <motion.h1 id="policy-page-title" variants={fadeUp}>Policies</motion.h1>
        <motion.p variants={fadeUp}>
          Clear standards for privacy, terms, shipping, and refunds so every client
          interaction remains transparent, secure, and professional.
        </motion.p>
      </motion.section>

      <section className="policy-layout" aria-label="Policy sections">
        <motion.aside
          className="policy-nav"
          aria-label="Policy navigation"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeUp}>Jump To</motion.h2>
          <ul>
            {policySections.map((section) => (
              <motion.li key={section.id} variants={fadeUp}>
                <a
                  href={`#${section.id}`}
                  className={activeSection === section.id ? "is-active" : ""}
                >
                  {section.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.aside>

        <motion.div
          className="policy-content"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {policySections.map((section, index) => (
            <motion.article
              className="policy-card"
              id={section.id}
              key={section.id}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
            >
              <p className="policy-card__label">{section.label}</p>
              <h3>{section.label}</h3>
              <p className="policy-card__intro">{section.intro}</p>
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

export default PolicyPage;
