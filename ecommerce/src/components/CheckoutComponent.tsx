import React, { FunctionComponent } from 'react';
// import './CheckoutComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import Subtotal from './Subtotal';
import { RootState } from '../redux/store';
import { ProductType } from '../types/ProductType';
import { removeProductFromBasket } from '../redux/reducers/basketSlice';
import { removeFromBasketCounter } from '../redux/reducers/counterSlice';
import { removeAmountFromSubtotal } from '../redux/reducers/subtotalSlice';

const CheckoutComponent: FunctionComponent = () => {
  const products = useSelector((state: RootState) => state.basket.value);
  const dispatch = useDispatch();

  const removeHandler = (product: ProductType) => {
    console.log('this product', product);
    console.log('this product id', product.id);
    console.log('products before: ', products);
    if (product.price) {
      dispatch(removeAmountFromSubtotal(product.price));
      dispatch(removeFromBasketCounter());
      dispatch(removeProductFromBasket(product));
    }

    console.log('products after: ', products);
    return;
  };

  return (
    <div className="grid grid-cols-2">
      <div className="checkout-left">
        <img
          className="checkout-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout-image"
        />
        <div className="checkout-shopping-basket">
          <h2 className="m-5">Your shopping Basket</h2>
          {products.map((product, index) => {
            return (
              <div
                className="grid gap-1 grid-cols-2 items-center justify-center m-5 p-8 max-h-auto z-10 bg-zinc-300 min-w-min max-w-prose"
                key={index}
              >
                <img
                  src={product.image}
                  alt=""
                  className="flex max-h-48 min-w-min max-w-full"
                />
                <div className="product-info-result">
                  <div className="img-wrapper"></div>
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
                      onClick={() => removeHandler(product)}
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
