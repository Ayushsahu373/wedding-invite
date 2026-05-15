interface Props {
  image: string;

  onClose: () => void;
}

const GalleryLightbox = ({ image, onClose }: Props) => {
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>
        ✕
      </button>

      <img src={image} alt="preview" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default GalleryLightbox;
