// Product.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';

const Product = () => {
  const { state } = useLocation();
  const product = state?.product;

  console.log('Product Component - Product:', product);

  return (
    <div>
      {product ? (
        <>
          <ProductImages images={product.images} />
          <ProductDetails product={product} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
