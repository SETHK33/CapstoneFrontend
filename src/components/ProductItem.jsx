import { Link } from "react-router-dom";

export default function ProductItem(props) {
  const { product, identity } = props;
  return (
    <Link to={`/products/${product.id}`}>
      <div className={`product-card ${identity}`}>
        <div className="card-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <p>
            {product.description?.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>
          <p>${product.price?.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
