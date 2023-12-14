import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

export default function ProductItem(props) {
  const cartContext = useContext(CartContext);
  const { product, identity, setTotal } = props;
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
    setTotal((prevState) => parseFloat(prevState) + product.price);
  };

  const subQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal((prevState) => parseFloat(prevState) - product.price);
    }
  };

  return (
    <div className={`product-card ${identity}`}>
      <div className="card-image">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </Link>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        {props.productDescription ? (
          <p>
            {product.description?.length > 100 && props.identity === false
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>
        ) : null}
        <p>${product.price?.toFixed(2)}</p>
        <div className="cart-btn">
          {props.quantityBtns ? (
            <button
              onClick={() =>
                cartContext.setCart((prevState) => [...prevState, product])
              }
            >
              + Add Cart
            </button>
          ) : (
            <>
              <div className="cart-quantity">
                <button onClick={addQuantity}>+</button>
                <button onClick={subQuantity}>-</button>
                <span>{quantity}</span>
              </div>
              <div className="remove-btn">
                {console.log(props)}
                <button
                  onClick={() =>
                    cartContext.setCart((prevState) =>
                      prevState.filter(
                        (prevStateItem) => prevStateItem.id !== props.product.id
                      )
                    )
                  }
                >
                  - Remove
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
