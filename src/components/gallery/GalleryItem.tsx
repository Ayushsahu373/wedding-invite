import { motion } from "framer-motion";

interface Props {
  image: string;

  onClick: () => void;
}

const GalleryItem = ({ image, onClick }: Props) => {
  return (
    <motion.div
      className="gallery-item"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <img src={image} alt="gallery" />
    </motion.div>
  );
};

export default GalleryItem;
