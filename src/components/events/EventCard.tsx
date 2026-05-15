import { motion } from "framer-motion";

import type { EventItem } from "../../types/events";

interface Props {
  item: EventItem;
}

const EventCard = ({ item }: Props) => {
  return (
    <motion.div
      className={`event-card ${item.theme}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <div className="event-image">
        <img src={item.image} alt={item.name} />
      </div>

      {/* Overlay */}
      <div className="event-overlay" />

      {/* Content */}
      <div className="event-content">
        <span className="event-date">
          {item.date} • {item.time}
        </span>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="event-venue">📍 {item.venue}</div>
      </div>
    </motion.div>
  );
};

export default EventCard;
