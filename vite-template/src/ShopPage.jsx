import React from "react";
import Items from "./Items";
import Cart from "./Cart";
import { useState } from "react";

const ShopPage = () => {
  const [cartNums, setCartNums] = useState(0);

  const updateCart = () => {
    setCartNums(cartNums + 1);
    console.log(cartNums);
  };

  return (
  <>
    {cartNums > 0 && <Cart cartNums={cartNums} />}
    <Items updateCart={updateCart}/>
  </>
)
};

export default ShopPage;
