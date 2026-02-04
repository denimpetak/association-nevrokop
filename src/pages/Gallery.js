import React, { useState } from "react";
import { gallery } from "../data/gallery";
import SectionTitle from "../components/common/SectionTitle";
import ImageLightbox from "../components/ImageLightbox";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openLightbox = (item) => {
    setActiveImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 fade-in">
      <SectionTitle>Галерия</SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((item) => (
          <button
            key={item.id}
            className="group relative overflow-hidden rounded-lg shadow w-full text-left"
            onClick={() => openLightbox(item)}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </button>
        ))}
      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        src={activeImage?.image}
        title=""
        onClose={closeLightbox}
      />
    </div>
  );
}
