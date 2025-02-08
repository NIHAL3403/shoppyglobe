import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);
  const dispatch = useDispatch();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
