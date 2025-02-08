import React, { useState } from "react";

const products = [
  { id: 1, name: "Essence Mascara Lash Princess" },
  { id: 2, name: "Eyeshadow Palette with Mirror" },
  { id: 3, name: "Powder Canister" },
  { id: 4, name: "Red Lipstick" },
  { id: 5, name: "Red Nail Polish" },
  { id: 6, name: "Calvin Klein CK One" },
  { id: 7, name: "Chanel Coco Noir Eau De" },
  { id: 8, name: "Dior J'adore" },
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    } else {
      alert("Item already in cart!");
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <a href="#">Home</a>
        <a href="#">Checkout</a>
      </div>

      {/* Product List */}
      <div className="product-list">
        <h1>Our Products</h1>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <span>{product.name}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>Cart Items ({cart.length})</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
