import { useEffect, useState } from "react";

import ProductItem from "../ProductItem";
import AlphaSort from "../AlphaSort";
import SearchFilter from "../SearchFilter";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products: ", error));
  }, []);

  return (
    <div className="products-page page-container">
      <div className="products-header-wrapper">
        <h1>Products</h1>
        <div className="sort-features">
          <AlphaSort products={products} setProducts={setProducts} />
          <SearchFilter
            products={products}
            setFilterProducts={setFilterProducts}
          />
        </div>
      </div>
      <div className="products-grid">
        {filterProducts.map((product, index) => (
          <ProductItem
            product={product}
            key={index}
            identity={false}
            quantityBtns={true}
            productDescription={true}
          />
        ))}
      </div>
    </div>
  );
}
