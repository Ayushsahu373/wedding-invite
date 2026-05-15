import { useMusic } from "../../hooks/useMusic";
import "../../styles/components/_music-toggle.scss";

const MusicToggle = () => {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <button
      className={`music-toggle ${isPlaying ? "playing" : "muted"}`}
      onClick={toggleMusic}
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      <span className="music-toggle__icon">
        {isPlaying ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18V5l12-2v13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="6"
              cy="18"
              r="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="18"
              cy="16"
              r="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18V5l12-2v13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="6"
              cy="18"
              r="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="18"
              cy="16"
              r="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="2"
              y1="2"
              x2="22"
              y2="22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>

      <span className="music-toggle__bars">
        <span />
        <span />
        <span />
        <span />
      </span>
    </button>
  );
};

export default MusicToggle;
