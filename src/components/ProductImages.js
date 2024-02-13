// ProductImages.js
import React from 'react';

const ProductImages = ({ images }) => {
  return (
    <div>
      
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Product Image ${index}`} />
      ))}
    </div>
  );
};

export default ProductImages;
