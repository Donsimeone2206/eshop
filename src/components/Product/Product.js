import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div id={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img alt="" src={image} />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
