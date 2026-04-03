import React from "react";
import { motion } from "framer-motion";
import { guideTopics } from "../data/guideTopics";
import "../styles/GuidePage.css";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: "easeOut" },
  },
};

function GuidePage() {
  return (
    <main className="guide-page" id="guide">
      <div className="guide-page__orb guide-page__orb--left" aria-hidden="true" />
      <div className="guide-page__orb guide-page__orb--right" aria-hidden="true" />

      <section className="guide-page__hero">
        <p className="guide-page__eyebrow">Beauty Journal</p>
        <h1 className="guide-page__title">The Complete Guide</h1>
        <p className="guide-page__subtitle">
          Explore curated beauty topics designed for bridal prep, skin confidence, and polished
          event makeup. Tap any guide to open a dedicated detail page.
        </p>
      </section>

      <motion.section
        className="guide-page__grid"
        aria-label="Guide topics"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {guideTopics.map((topic, index) => {
          const mediaVariant = [
            "guide-card__media--split",
            "guide-card__media--offset",
            "guide-card__media--stacked",
          ][index % 3];

          const supportImage = guideTopics[(index + 3) % guideTopics.length].image;

          return (
          <motion.a
            className="guide-card guide-card--standard"
            href={`#guide-${topic.key}`}
            key={topic.key}
            variants={cardReveal}
            whileHover={{ y: -7 }}
          >
            <div className={`guide-card__media ${mediaVariant}`}>
              <img
                className="guide-card__primary-image"
                src={topic.image}
                alt={topic.title}
                loading="lazy"
              />
              <img
                className="guide-card__support-image"
                src={supportImage}
                alt=""
                loading="lazy"
                aria-hidden="true"
              />
              <span className="guide-card__pill">{topic.readTime}</span>
              <div className="guide-card__media-shade" aria-hidden="true" />
            </div>

            <div className="guide-card__content">
              <h2>{topic.title}</h2>
              <p>{topic.subtitle}</p>
              <span className="guide-card__cta">Open Guide</span>
            </div>
          </motion.a>
          );
        })}
      </motion.section>
    </main>
  );
}

export default GuidePage;
