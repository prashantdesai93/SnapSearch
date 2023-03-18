import React from 'react';

// This component renders a grid of thumbnail images.
// It receives an array of image objects as a prop and maps over them to render an ImageThumbnail component for each image.
// If the array is empty, it displays an error message.
// This component also handles the click event on each thumbnail image and passes the clicked image object to the parent component using a callback function.

const ImageGrid = ({ images, onThumbnailClick }) => (
  <div className="image-grid">
    {images.map((image) => (
      <div key={image.id} className="image-thumbnail" onClick={() => onThumbnailClick(image)}>
        <img
          src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
          alt={image.title}
        />
      </div>
    ))}
  </div>
);

export default ImageGrid;
