import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loader from './images/loader.gif'

const ProductPage = ({ addToCart, cartItems, removeFromCart }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      }).catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const isItemInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  const handleRemoveItem = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="product-page">
      <h1>Product Page</h1>
      {loading ? (
        <div className="loader-ctn">
          <span className='loader'><img src={loader} alt="loading..." /></span>
        </div>
      ) : (
        <div className="product-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <div className='d-flex gap-10'>
              <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
              {isItemInCart(product) && (
                <button className="button remove-button" onClick={() => handleRemoveItem(product)}>
                  Remove Item
                </button>
              )}
            </div>
            
          </div>
          ))}
        </div>
      )}
    </div>
  );

 
};

export default ProductPage;
