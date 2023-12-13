import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../context/CartContext";
import ProductItem from "../ProductItem";

export default function Cart() {
  const addCart = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const tax = total * 0.0485;

  useEffect(() => {
    let toTotal = 0;
    addCart.cart.forEach((cartItem) => {
      toTotal = toTotal + cartItem.price;
    });
    setTotal(toTotal);
  }, [addCart.cart]);

  return (
    <div className="cart-page page-container">
      <div className="cart-header">
        <h1>CART</h1>
      </div>
      <div>
        {addCart.cart.map((cartItem) => {
          return (
            <ProductItem
              product={cartItem}
              identity={false}
              setTotal={setTotal}
              key={cartItem.id}
              productDescription={false}
            />
          );
        })}
        <div className="checkout-section-wrapper">
          <div className="checkout-section">
            <div>Subtotal: ${total.toFixed(2)}</div>
            <div>Tax: ${tax.toFixed(2)}</div>
            <div>Shipping (Flat Rate): $10.00</div>
            <div>Total: ${(total + tax + 10).toFixed(2)}</div>
            <div className="checkout-btn">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
