import { Howl } from "howler";

export const bgMusic = new Howl({
  src: ["/assets/audio/bg-music.mp3"],
  loop: true,
  volume: 0.5,
  html5: true,
});