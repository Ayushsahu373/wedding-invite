import { events } from "../../config/events";

import EventCard from "./EventCard";

import "../../styles/components/_events.scss";

const EventsSection = () => {
  return (
    <section className="events-section">
      {/* Heading */}
      <div className="events-heading">
        <p>Wedding Celebrations</p>

        <h2>Moments We Wish To Celebrate With You</h2>
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {events.map((item) => (
          <EventCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
