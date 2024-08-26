import React from "react";
import { useContext } from "react";
import { CartContext } from "./Navigation";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems.map((cartItem) => (
        <div key={cartItem.id}>
          <h3>{cartItem.title}</h3>
          <p>{cartItem.price}</p>
        </div>
      ))}
    </>
  );
};

export default CartPage;
