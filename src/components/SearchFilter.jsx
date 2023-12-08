import { useEffect, useState } from "react";

export default function SearchFilter({ products, setFilterProducts }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProducts(filtered);
  }, [searchTerm, products, setFilterProducts]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
