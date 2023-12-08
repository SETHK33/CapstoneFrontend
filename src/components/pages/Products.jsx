import { useEffect, useState } from "react";

import ProductItem from "../ProductItem";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products: ", error));
  }, []);

  return (
    <div className="products-page page-container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
