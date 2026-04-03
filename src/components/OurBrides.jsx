import React from "react";
import { motion } from "framer-motion";
import "../styles/OurBrides.css";

const brides = [
  {
    name: "Alex",
    image: "/Images/wed1.jpg",
    alt: "Bride Alex in a white gown outdoors",
  },
  {
    name: "Sarah",
    image: "/Images/wed2.jpg",
    alt: "Bride Sarah with groom in garden setting",
  },
  {
    name: "Gabriella",
    image: "/Images/wed3.jpg",
    alt: "Bride Gabriella portrait in nature",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function OurBrides() {
  return (
    <section className="our-brides" aria-labelledby="our-brides-title">
      <motion.div
        className="our-brides__intro"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="our-brides__kicker">Our Brides</p>
        <h2 id="our-brides-title">Real moments, timeless stories.</h2>
        <p className="our-brides__copy">
          Every celebration is styled with intention and a signature glow crafted
          for the bride.
        </p>
      </motion.div>

      <div className="our-brides__grid">
        {brides.map((bride, index) => (
          <motion.article
            className="our-brides__card"
            key={bride.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={bride.image} alt={bride.alt} loading="lazy" />
            <h3>{bride.name}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default OurBrides;
