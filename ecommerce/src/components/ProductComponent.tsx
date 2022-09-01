import React, { FunctionComponent } from 'react';
import { ProductType } from '../types/ProductType';
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasketCounter } from '../redux/reducers/counterSlice';
import { addAmountToSubtotal } from '../redux/reducers/subtotalSlice';
import { addProductToBasket } from '../redux/reducers/basketSlice';

const ProductComponent: FunctionComponent<ProductType> = ({
  id,
  name,
  price,
  rating,
  image,
  description,
}: ProductType) => {
  const dispatch = useDispatch();
  const product = { id, name, price, rating, image, description };
  
  const clickHandler = (product: ProductType) => {
      console.log(product, 'product inside clickHandler')
      dispatch(addToBasketCounter());
      dispatch(addProductToBasket(product));
      dispatch(addAmountToSubtotal(product.price));
    
  }
  
  
  return (
    <div className="grid gap-1 grid-cols-2 items-center justify-center m-2.5 p-8 max-h-auto z-10 bg-zinc-300 min-w-min max-w-prose">
      <img src={image} alt="" className="flex max-h-48 min-w-min max-w-full" />
      <div className="ml-5">
        <p className="mt-6 font-bold text-2xl mb-3">{name}</p>
        <div>
          <span className="antialiased text-lg">$</span>
          <span className="font-bold text-2xl"> {price}</span>
        </div>
        <div className="flex-row">
          {Array(rating)
            .fill(0)
            .map((_, i) => {
              return (
                <p key={i} className="px-1">
                  ⭐
                </p>
              );
            })}
        </div>
        <button
          className="bg-zinc-900 hover:bg-zinc-400 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => clickHandler(product)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
