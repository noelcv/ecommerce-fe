import React, { FunctionComponent } from 'react';
import './Product.css';
import { ProductType } from '../types/ProductType';
import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux/reducers/counterSlice'


const ProductComponent: FunctionComponent<ProductType> = ({id, name, price, rating, image, description}: ProductType) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="product">
      <div className="product-info">
        <p className="product-name">{name}</p>
        <div className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product-rating">
          {Array(rating).fill(0).map((_, i) => { return ( <p key={i}>⭐</p> ) })}
        </div>
        </div>
        <img
          src={image}
          alt=""
          className="product-image"
        />
      <button className="add-to-basket-btn" onClick={() => {
        console.log('added to basket')
        dispatch(increment())
        console.log('count', count)
        }}>Add to basket</button>
    </div>
  );
};

export default ProductComponent;
