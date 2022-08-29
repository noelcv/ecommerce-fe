import React, { FunctionComponent } from 'react';
import './CheckoutComponent.css';
import { useSelector } from 'react-redux';
import Subtotal from './Subtotal';
import { RootState } from '../redux/store';
import ProductComponent from './ProductComponent';

const CheckoutComponent: FunctionComponent = () => {
  const products = useSelector((state: RootState) => state.basket.value);
  console.log(products, 'products');
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout-image"
        />
        <div className="checkout-shopping-basket">
          <h2 className="checkout-title">Your shopping Basket</h2>
          {products.map((product) => {
            return (
              <div className="product-results" key={product.id}>
                <div className="product-info-result">
                <img src={product.image} alt="" className="product-image result-img" />
                  <div className="product-result-details">
                    <h3 className="product-name-result">{product.name}</h3>
                    <div className="product-rating">
                    {Array(product.rating)
                      .fill(0)
                      .map((_, i) => {
                        return <p key={i}>⭐</p>;
                      })}
                  </div>
                  <div className="product-price">
                    <small>$</small>
                    <strong>{product.price}</strong>
                  </div>
                  
                  
                  <button
                  className="remove-from-basket-btn"
                  onClick={() => {
                    console.log('price');
                  }}
                >
                  Remove from basket
                </button>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default CheckoutComponent;
