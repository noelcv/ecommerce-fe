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
      dispatch(removeProductFromBasket(product));
      dispatch(removeAmountFromSubtotal(product.price));
      dispatch(removeFromBasketCounter());
    }

    console.log('products after: ', products);
    return;
  };

  return (
    <div className="md:ml-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 4xl:max-w-4xl m-2.5 p-6 max-h-auto z-10">
       <div className="static max-w-xs">
        <Subtotal />
      </div>
      <img
          className="static object-cover object-right max-w-xs h-32 md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout-image"
        />
      <div className="">
        <div className="inline-block -ml-8 mt-2 lg:mt-2 md:-mt-55 lg:ml-0">
          <h2 className="m-5">Your shopping Basket</h2>
          {products.map((product, index) => {
            return (
              <div
                className="shadow-lg static grid gap-1 grid-cols-2 items-center justify-center m-5 p-8 max-h-auto z-10 bg-zinc-300 max-w-xs md:max-w-sm lg:max-w-md hover:bg-zinc-200"
                key={index}
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-32 h-32 static object-cover"
                />
                <div className="col-start-2 pl-5">
                  <div className="img-wrapper"></div>
                  <div className="product-result-details">
                    <h3 className="product-name-result">{product.name}</h3>
                    
                    <div className="product-price">
                      <small>$</small>
                      <strong>{product.price}</strong>
                    </div>
                    <button
                      className="bg-zinc-800"
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
     
    </div>
  );
};

export default CheckoutComponent;
