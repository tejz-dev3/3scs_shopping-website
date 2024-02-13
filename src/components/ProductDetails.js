// ProductDetails.js
import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <div className="additional-details">
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Discount Percentage: {product.discountPercentage}%</p>
      </div>
    </div>
  );
};

export default ProductDetails
