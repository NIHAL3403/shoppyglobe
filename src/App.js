import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Checkout from "./components/Checkout";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item !== product));
  };

  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/checkout" className="nav-link">Checkout</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
