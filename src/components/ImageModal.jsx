import React from 'react';
import { FiX } from 'react-icons/fi';

// This component renders a modal dialog that displays a larger version of the clicked thumbnail image.
// It receives an image object as a prop and displays the image in a full-sized container.
// This component also handles the close button click event and passes the close event to the parent component using a callback function.

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
