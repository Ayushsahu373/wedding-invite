import { motion } from "framer-motion";

import { couple } from "../../config/couple";

import "../../styles/components/_quote.scss";

const CoupleQuoteSection = () => {
  return (
    <section className="quote-section">
      {/* Overlay */}
      <div className="quote-overlay" />

      {/* Content */}
      <motion.div
        className="quote-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Decorative */}
        <span className="quote-symbol">❝</span>

        {/* Quote */}
        <h2>Together is a beautiful place to be.</h2>

        {/* Couple Names */}
        <p>
          {couple.groom.name} ❤️ {couple.bride.name}
        </p>
      </motion.div>

      {/* Glow Effects */}
      <div className="quote-glow glow-1" />
      <div className="quote-glow glow-2" />
    </section>
  );
};

export default CoupleQuoteSection;
