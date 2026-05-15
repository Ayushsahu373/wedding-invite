import { createContext } from "react";

export interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  startMusic: () => void;
}

export const MusicContext = createContext<MusicContextType | null>(null);
