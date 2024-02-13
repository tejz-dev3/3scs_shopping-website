import React, { useState, useEffect } from 'react';
import Carousels from './Carousels';
import Search from './Search';
import { Link } from 'react-router-dom';


const Home = () => {
  const [products, setProducts] = useState([]);
  // const [carouselImages, setCarouselImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        // setCarouselImages(data.carouselImages);
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Search onSearch={handleSearch} />

      <Carousels />

      {/* Display Products */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Link to={{ pathname: `/product/${product.id}`, state: { product } }}
           key={product.id} className="product-card-link" >

          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
                
            {/* Display Product Information */}
            <div className='product-info'>
              <p>{product.title}</p>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              {/* <p>Description: {product.description}</p> */}
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Stock: {product.stock}</p>
              <p>Discount Percentage: {product.discountPercentage}%</p>
            </div>
          </div>
          </Link>

        ))}
      </div>
    </div>
  );
};

export default Home;
