import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import ProductItem from "../ProductItem";

export default function Cart() {
  const addCart = useContext(CartContext);
  console.log(addCart);
  return (
    <div className="cart-page page-container">
      <div className="cart-header">
        <h1>CART</h1>
      </div>
      <div>
        {addCart.cart.map((cartItem) => {
          return <ProductItem product={cartItem} />;
        })}
      </div>
    </div>
  );
}
