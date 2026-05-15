import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../../styles/components/_petalSystem.scss";
import petalSrc from "../../assets/images/hero/petal.png";

const PetalSystem = () => {
  const [engineReady, setEngineReady] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!engineReady) return null;

  return (
    <Particles
      id="petals"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: isMobile ? 15 : 30,
          },
          color: { value: "#f5c6d6" },
          shape: {
            type: "image",
            options: {
              image: [
                {
                  src: petalSrc,
                  width: 20,
                  height: 20,
                },
              ],
            },
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: { min: 8, max: 16 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            outModes: {
              default: "out",
            },
            straight: false,
          },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
              enable: true,
              speed: 5,
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
      }}
    />
  );
};

export default PetalSystem;
