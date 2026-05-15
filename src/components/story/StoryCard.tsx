import { motion } from "framer-motion";

interface Props {
  item: {
    title: string;
    description: string;
    image: string;
    year: string;
  };

  reverse?: boolean;
}

const StoryCard = ({ item, reverse }: Props) => {
  return (
    <motion.div
      className={`story-card ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="story-image">
        <img src={item.image} alt={item.title} />
      </div>

      {/* Content */}
      <div className="story-content">
        <span className="story-year">{item.year}</span>

        <h3>{item.title}</h3>

        <p>{item.description}</p>
      </div>
    </motion.div>
  );
};

export default StoryCard;
