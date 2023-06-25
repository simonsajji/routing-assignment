import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
      <nav className="navbar">
        <ul className="nav-links">
        <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/product" activeClassName="active">
        Product
      </NavLink>
      <NavLink to="/cart" activeClassName="active">
        Cart
    </NavLink>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/product"
            element={<ProductPage  addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart}  />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
