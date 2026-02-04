import React from "react";

export default function ImageLightbox({ isOpen, src, title, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={onClose}
      >
        ✕
      </button>
      <div className="max-w-3xl w-full px-4">
        <img
          src={src}
          alt={title}
          className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mb-4"
        />
        {title && (
          <p className="text-center text-gray-200 text-sm">{title}</p>
        )}
      </div>
    </div>
  );
}
