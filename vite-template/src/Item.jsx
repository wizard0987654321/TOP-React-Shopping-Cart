import React from "react";
import "./Item.css"
import { useContext } from "react";
import { CartContext } from "./Navigation";

const Item = ({product}) => {
    const { updateCart } = useContext(CartContext);

    return (
        <div className="card">
            <h4>{product.title}</h4>
            <img
            className="productImg"
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            />
            <h6>{product.price}$</h6>
            <p>{product.description}</p>
            <button className="cartButton" onClick={() => updateCart(product)}>Add to Cart</button>
        </div>
      );
}

export default Item