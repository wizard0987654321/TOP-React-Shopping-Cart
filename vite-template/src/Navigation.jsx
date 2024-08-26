import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    cartItems: [],
    updateCart: () => {},
  })

const Navigation = () => {
    const [cartItems, setCartItems] = useState([]);

    const updateCart = (newItem) => {
      setCartItems((prevItems) => [...prevItems, newItem]);
    };

    return (
    <CartContext.Provider value={{ cartItems, updateCart }}>
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="shoppage/">Shopping</Link>
            <Link to="contactpage/">Contact</Link>
        </div>
        <Outlet />
    </ CartContext.Provider>
    )
}

export default Navigation