import React from "react";

const products = [
  "Essence Mascara Lash Princess",
  "Eyeshadow Palette with Mirror",
  "Powder Canister",
  "Red Lipstick",
  "Red Nail Polish",
  "Calvin Klein CK One",
  "Chanel Coco Noir Eau De",
  "Dior J'adore"
];

const Home = ({ addToCart }) => {
  return (
    <div className="container">
      <h1 className="title">Our Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <span>{product}</span>
            <button className="add-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
