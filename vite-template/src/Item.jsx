import React from "react";
import "./Item.css"

const Item = ({product, updateCart}) => {
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
            <button className="cartButton" onClick={updateCart}>Add to Cart</button>
        </div>
      );
}

export default Item