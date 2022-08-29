import React, { FunctionComponent } from 'react';
import './Product.css';

const Product: FunctionComponent = () => {
  return (
    <div className="product">
      <div className="product-info">
        <p className="product-name">Yin Yoga Course</p>
        <div className="product-price">
          <small>$</small>
          <strong>250</strong>
        </div>
        <div className="product-rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
        </div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5eb917658b5a4f0e02842abf/1592311381614-J10RYRQF5DQ4AE4LZQ31/mettayogapodcast.jpg?format=500w"
          alt=""
          className="product-image"
        />
      <button className="add-to-basket-btn">Add to basket</button>
    </div>
  );
};

export default Product;
