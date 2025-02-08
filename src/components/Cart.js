import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
