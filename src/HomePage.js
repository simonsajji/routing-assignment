import React from 'react';
import image1 from './images/banner-1.png';
import product1 from './images/product-1.jpg';
import product2 from './images/product-2.jpg';
import product3 from './images/product-3.jpg';
import './styles.css'
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="banner-container">
        <img src={image1} alt="Banner 1" className="banner-image" />
      </div>
      <h1>Welcome to Amazon</h1>
      <div className="product-container">
        <div className="product-card">
          <img src={product1} alt="Product 1" className="product-image" />
          <h3>Product 1</h3>
          <p>Product description</p>
        </div>
        <div className="product-card">
          <img src={product2} alt="Product 2" className="product-image" />
          <h3>Product 2</h3>
          <p>Product description</p>
        </div>
        <div className="product-card">
          <img src={product3} alt="Product 3" className="product-image" />
          <h3>Product 3</h3>
          <p>Product description</p>
        </div>
      </div>
      <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
        Start Shopping
      </a>
    </div>
  );
};

export default HomePage;
