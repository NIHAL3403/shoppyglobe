import React from "react";

const Checkout = ({ cart, removeFromCart }) => {
  return (
    <div className="container">
      <h1 className="title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item}</span>
              <button className="remove-btn" onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
