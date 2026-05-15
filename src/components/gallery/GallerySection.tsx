import { useState } from "react";

import { gallery } from "../../config/gallery";

import GalleryItem from "./GalleryItem";
import GalleryLightbox from "./Lightbox";

import "../../styles/components/_gallery.scss";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="gallery-section">
      {/* Heading */}
      <div className="gallery-heading">
        <p>Captured Memories</p>

        <h2>Moments Framed In Love</h2>
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {gallery.map((item) => (
          <GalleryItem
            key={item.id}
            image={item.image}
            onClick={() => setSelectedImage(item.image)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <GalleryLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default GallerySection;
