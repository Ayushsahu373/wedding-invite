import { useMusic } from "../../hooks/useMusic";

const MusicToggle = () => {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <button
      onClick={toggleMusic}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
      }}
    >
      {isPlaying ? "🔊" : "🔇"}
    </button>
  );
};

export default MusicToggle;
