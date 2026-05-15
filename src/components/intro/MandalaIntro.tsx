import { useEffect } from "react";
import gsap from "gsap";
import { useMusic } from "../../hooks/useMusic";
import "../../styles/pages/_intro.scss";

interface Props {
  onEnter: () => void;
}

const MandalaIntro: React.FC<Props> = ({ onEnter }) => {
  const { startMusic } = useMusic();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".mandala",
      { scale: 0.6, opacity: 0, rotate: 0 },
      {
        scale: 1,
        opacity: 1,
        rotate: 180,
        duration: 2.5,
        ease: "power3.out",
      },
    )
      .fromTo(
        ".intro-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1",
      )
      .fromTo(
        ".intro-subtitle",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5",
      )
      .fromTo(
        ".enter-btn",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "+=0.5",
      );

    // subtle glow pulse
    gsap.to(".mandala", {
      filter: "drop-shadow(0 0 40px rgba(212,175,55,0.8))",
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
  }, []);

  const handleEnter = () => {
    startMusic(); // 🔥 unlock music

    gsap.to(".intro-container", {
      opacity: 0,
      scale: 1.05,
      duration: 1,
      ease: "power2.inOut",
      onComplete: onEnter,
    });
  };

  return (
    <div className="intro-container">
      <div className="mandala-wrapper">
        <img
          src="/assets/images/mandala.png"
          alt="mandala"
          className="mandala"
        />
      </div>

      <h1 className="intro-title">XYZ ❤️ ABC</h1>
      <p className="intro-subtitle">A Journey of Love</p>

      <button className="enter-btn" onClick={handleEnter}>
        Tap to Enter
      </button>
    </div>
  );
};

export default MandalaIntro;
