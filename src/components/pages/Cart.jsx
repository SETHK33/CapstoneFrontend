import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import ProductItem from "../ProductItem";

export default function Cart(props) {
  const addCart = useContext(CartContext);
  const cartContext = useContext(CartContext);
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
    <div className="cart-page page-container">
      <div className="cart-header">
        <h1>CART</h1>
      </div>
      <div>
        {addCart.cart.map((cartItem) => {
          return <ProductItem product={cartItem} identity={false} />;
        })}
      </div>
      <div className="cart-quantity">
        <button onClick={addQuantity}>+</button>
        <span>{quantity}</span>
        <button onClick={subQuantity}>-</button>
      </div>
      <div className="remove-btn">
        <button
          onClick={() =>
            cartContext.setCart((prevState) =>
              prevState.filter((product) => product.id)
            )
          }
        >
          - Remove
        </button>
      </div>
    </div>
  );
}
