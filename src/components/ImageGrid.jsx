import React from 'react';

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
