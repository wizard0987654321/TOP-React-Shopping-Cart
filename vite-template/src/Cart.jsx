import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cartNums }) => {
  return (
    <>
      <Link to="/cartpage">
        <div id="cart">
          <h2>Shopping Cart</h2>
          <p>Items in Cart: {cartNums}</p>
        </div>
      </Link>
    </>
  );
};

export default Cart;
