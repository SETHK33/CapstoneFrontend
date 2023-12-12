import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

export default function ProductItem(props) {
  const cartContext = useContext(CartContext);
  const { product, identity } = props;
  const [quantity, setQuantity] = useState(1);


  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const subQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={`product-card ${identity}`}>
      <div className="card-image">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>
          {product.description?.length > 100 && props.identity === false
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </p>
        <p>${product.price?.toFixed(2)}</p>
        <div className="cart-btn">
          <button
            onClick={() =>
              cartContext.setCart((prevState) => [...prevState, product])
            }
          >
            + Add Cart
          </button>
          {console.log(cartContext)}
          <div className="cart-quantity">
        <button onClick={addQuantity}>+</button>
        <span>{quantity}</span>
        <button onClick={subQuantity}>-</button>
      </div>
      <div className="remove-btn">
        <button
          onClick={() =>
            cartContext.setCart((prevState) =>
              prevState.filter((product) => product.id !== )
            )
          }
        >
          - Remove
        </button>
      </div>
        </div>
      </div>
    </div>
  );
}
