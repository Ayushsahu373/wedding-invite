import MainLayout from "../layouts/MainLayout";

import Hero from "../components/hero/Hero";
import StoryTimeline from "../components/story/StoryTimeline";
import EventsSection from "../components/events/EventsSection";
import GallerySection from "../components/gallery/GallerySection";
import VenueSection from "../components/venue/VenueSection";

import CoupleQuoteSection from "../components/quote/CoupleQuoteSection";

const Home = () => {
  return (
    <MainLayout>
      <Hero />

      <StoryTimeline />

      <EventsSection />

      <GallerySection />

      <VenueSection />

      <CoupleQuoteSection />
    </MainLayout>
  );
};

export default Home;
