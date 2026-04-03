import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { guideTopics } from "../data/guideTopics";
import "../styles/GuideDetailPage.css";

const detailStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.56, ease: "easeOut" },
  },
};

const guideVisuals = [
  "/Images/wed1.jpg",
  "/Images/wed2.jpg",
  "/Images/wed4.jpg",
  "/Images/wed5.jpg",
  "/Images/wed7.jpg",
  "/Images/wed8.jpg",
  "/Images/wed11.jpg",
  "/Images/wed13.jpg",
  "/Images/wed15.jpg",
  "/Images/wed16.jpg",
];

function GuideDetailPage({ topicKey }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const topic = guideTopics.find((item) => item.key === topicKey);
  const topicIndex = guideTopics.findIndex((item) => item.key === topicKey);

  useEffect(() => {
    setOpenFaqIndex(null);
  }, [topicKey]);

  const galleryImages = [
    topic?.image,
    guideVisuals[(topicIndex + 2 + guideVisuals.length) % guideVisuals.length],
    guideVisuals[(topicIndex + 5 + guideVisuals.length) % guideVisuals.length],
    guideVisuals[(topicIndex + 7 + guideVisuals.length) % guideVisuals.length],
    guideVisuals[(topicIndex + 9 + guideVisuals.length) % guideVisuals.length],
  ].filter(Boolean);

  if (!topic) {
    return (
      <main className="guide-detail" id="guide-detail">
        <section className="guide-detail__not-found">
          <h1>Guide Not Found</h1>
          <p>The topic you requested is not available yet.</p>
          <a href="#guide">Back To Guide</a>
        </section>
      </main>
    );
  }

  return (
    <main className="guide-detail" id="guide-detail">
      <motion.section
        className="guide-detail__hero"
        variants={detailStagger}
        initial="hidden"
        animate="show"
      >
        <motion.article className="guide-detail__image-wrap" variants={revealUp}>
          <img src={topic.image} alt={topic.title} loading="lazy" />
        </motion.article>

        <motion.article className="guide-detail__copy" variants={revealUp}>
          <a className="guide-detail__back" href="#guide">
            Back To All Guides
          </a>
          <p className="guide-detail__eyebrow">{topic.readTime}</p>
          <h1>{topic.title}</h1>
          <p className="guide-detail__summary">{topic.summary}</p>
        </motion.article>
      </motion.section>

      <motion.section
        className="guide-detail__mosaic"
        variants={detailStagger}
        initial="hidden"
        animate="show"
      >
        {galleryImages.map((imagePath, index) => (
          <motion.article
            className={`guide-detail__mosaic-item guide-detail__mosaic-item--${index + 1}`}
            key={`${imagePath}-${index}`}
            variants={revealUp}
            whileHover={{ y: -4 }}
          >
            <img src={imagePath} alt={`${topic.title} visual ${index + 1}`} loading="lazy" />
          </motion.article>
        ))}
      </motion.section>

      <motion.section
        className="guide-detail__body"
        variants={detailStagger}
        initial="hidden"
        animate="show"
      >
        <motion.article className="guide-detail__card guide-detail__card--enhanced" variants={revealUp}>
          <h2>Key Highlights</h2>
          <ul>
            {topic.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>

        <motion.article className="guide-detail__section guide-detail__section--details" variants={revealUp}>
          <h2>Detailed Steps</h2>
          {topic.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.article>

        <motion.article className="guide-detail__section guide-detail__section--routine" variants={revealUp}>
          <h2>Routine Plan</h2>
          <div className="guide-detail__timeline">
            {topic.routinePlan.map((step) => (
              <div className="guide-detail__timeline-row" key={step.phase}>
                <span>{step.phase}</span>
                <p>{step.action}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article className="guide-detail__section guide-detail__section--tips" variants={revealUp}>
          <h2>Pro Tips</h2>
          <ul>
            {topic.proTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </motion.article>

        <motion.article className="guide-detail__card guide-detail__card--full guide-detail__card--enhanced" variants={revealUp}>
          <h2>Frequently Asked Questions</h2>
          <div className="guide-detail__faq-list">
            {topic.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
              <div className="guide-detail__faq-item" key={faq.q}>
                <button
                  type="button"
                  className="guide-detail__faq-question"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${topic.key}-${index}`}
                >
                  <span>{faq.q}</span>
                  <span className="guide-detail__faq-toggle" aria-hidden="true">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <div
                  id={`faq-answer-${topic.key}-${index}`}
                  className={`guide-detail__faq-answer ${isOpen ? "is-open" : ""}`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
              );
            })}
          </div>
        </motion.article>
      </motion.section>
    </main>
  );
}

export default GuideDetailPage;
