import { useState, useEffect } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return { products, loading };
};

export default useFetchProducts;
