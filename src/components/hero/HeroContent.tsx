import { motion } from "framer-motion";
import { couple } from "../../config/couple";
import CountdownTimer from "./CountdownTimer";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Together With Their Families
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {couple.groom.name}
        <span> ❤️ </span>
        {couple.bride.name}
      </motion.h1>

      <motion.p
        className="hero-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {couple.quote}
      </motion.p>

      <motion.p
        className="hero-date"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        December 12, 2026
      </motion.p>
      <CountdownTimer />
    </div>
  );
};

export default HeroContent;
