import HeroContent from "./HeroContent";
import PetalSystem from "../animations/PetalSystem";

import "../../styles/components/_hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-bg" />

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Petals */}
      <PetalSystem />

      {/* Main Content */}
      <HeroContent />

      {/* Scroll Down */}
      <div className="scroll-indicator">
        <span />
      </div>
    </section>
  );
};

export default Hero;
