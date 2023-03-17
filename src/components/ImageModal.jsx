import React from 'react';
import { FiX } from 'react-icons/fi';

const ImageModal = ({ image, onClose }) => (
  <div className="image-modal" onClick={onClose}>
    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>
        <FiX />
      </button>
      <img
        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`}
        alt={image.title}
      />
    </div>
  </div>
);

export default ImageModal;
