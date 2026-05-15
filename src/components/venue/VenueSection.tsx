import { motion } from "framer-motion";

import { venue } from "../../config/venue";

import VenueInfoCard from "./VenueInfoCard";

import "../../styles/components/_venue.scss";

const VenueSection = () => {
  return (
    <section className="venue-section">
      {/* Heading */}
      <div className="venue-heading">
        <p>Wedding Venue</p>

        <h2>Where The Celebration Begins</h2>
      </div>

      {/* Main Layout */}
      <div className="venue-layout">
        {/* Left Content */}
        <motion.div
          className="venue-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3>{venue.name}</h3>

          <p className="venue-address">{venue.address}</p>

          <div className="venue-info-grid">
            <VenueInfoCard title="Parking" value={venue.parking} />

            <VenueInfoCard title="Accommodation" value={venue.accommodation} />

            <VenueInfoCard title="Contact" value={venue.contactNumber} />
          </div>

          <a
            href={venue.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="venue-btn"
          >
            Get Directions
          </a>
        </motion.div>

        {/* Map */}
        <motion.div
          className="venue-map"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <iframe src={venue.mapEmbedUrl} loading="lazy" allowFullScreen />
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
