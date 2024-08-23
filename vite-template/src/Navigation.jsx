import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
    <>
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="shoppage/">Shopping</Link>
            <Link to="contactpage">Contact</Link>
        </div>
        <Outlet />
    </>
    )
}

export default Navigation