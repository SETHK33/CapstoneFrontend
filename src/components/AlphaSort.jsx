import { useState } from "react";

export default function AlphaSort({ products, setProducts }) {
  const [order, setOrder] = useState(true);

  const handleSort = () => {
    const sortedProducts = [...products];

    if (order) {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setProducts(sortedProducts);
    setOrder(!order);
  };

  return (
    <button className="-alpha-sort btn" onClick={handleSort}>
      {order ? "Sort A-Z" : "Sort Z-A"}
    </button>
  );
}
