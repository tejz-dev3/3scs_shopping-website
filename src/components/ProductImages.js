// ProductImages.js
import React from 'react';

const ProductImages = ({ images }) => {
  return (
    <div>
      
      {images.map((image, index) => (
        <img key={index} src={image} alt=""/>
      ))}
    </div>
  );
};

export default ProductImages;
