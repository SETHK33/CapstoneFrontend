import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";

export default function Product(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product: ", error));
  }, [props.match.params.id]);

  return (
    <div className="product-page page-container">
      <ProductItem
        product={product}
        identity="product-window"
        quantityBtns={true}
      />
    </div>
  );
}
