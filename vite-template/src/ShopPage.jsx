import React from "react";
import Items from "./Items";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "./Navigation";

const ShopPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
  <>
    {cartItems.length > 0 && <Cart />}
    <Items 
    />
  </>
)
};

export default ShopPage;
