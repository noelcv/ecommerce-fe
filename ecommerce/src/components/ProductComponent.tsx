import React, { FunctionComponent } from 'react';
import './Product.css';
import { ProductType } from '../types/ProductType';


const ProductComponent: FunctionComponent<ProductType> = ({name, price, rating, image, description}: ProductType) => {
  return (
    <div className="product">
      <div className="product-info">
        <p className="product-name">{name}</p>
        <div className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product-rating">
          {Array(rating).fill(0).map((_, i) => { return ( <p>⭐</p> ) })}
        </div>
        </div>
        <img
          src={image}
          alt=""
          className="product-image"
        />
      <button className="add-to-basket-btn">Add to basket</button>
    </div>
  );
};

export default ProductComponent;
