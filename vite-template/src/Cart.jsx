import React from "react";
import './Cart.css'

const Cart = ({ cartNums }) => {
  return (
    <>
      <div id="cart">
        <h2>Shopping Cart</h2>
        <p>Items in Cart: {cartNums}</p>
      </div>
    </>
  );
};

export default Cart;
