import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Navigation";


const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Link to="/cartpage">
        <div id="cart">
          <h2>Shopping Cart</h2>
          <p>Items in Cart: {cartItems.length}</p>
        </div>
      </Link>
    </>
  );
};

export default Cart;
