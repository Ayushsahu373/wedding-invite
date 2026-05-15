export interface EventItem {
  id: number;

  name: string;

  date: string;

  time: string;

  venue: string;

  description: string;

  image: string;

  theme: "haldi" | "mehendi" | "sangeet" | "wedding" | "reception";
}
