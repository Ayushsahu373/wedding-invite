import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import { MusicContext } from "./MusicContext";
import bgMusicFile from "../assets/audio/bg-music.mp3";

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const bgMusic = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    bgMusic.current = new Audio(bgMusicFile);
    bgMusic.current.loop = true;
    return () => {
      bgMusic.current?.pause();
      bgMusic.current = null;
    };
  }, []);

  const startMusic = useCallback(async () => {
    try {
      await bgMusic.current?.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn("Audio playback failed:", err);
    }
  }, []);

  const toggleMusic = useCallback(async () => {
    if (!bgMusic.current) return;
    if (isPlaying) {
      bgMusic.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await bgMusic.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Audio playback failed:", err);
      }
    }
  }, [isPlaying]);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, startMusic }}>
      {children}
    </MusicContext.Provider>
  );
};
