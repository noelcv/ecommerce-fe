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
  currency,
  rating,
  image,
  category,
  description,
}: ProductType) => {
  const dispatch = useDispatch();
  const product = {
    id,
    name,
    price,
    currency,
    rating,
    image,
    category,
    description,
  };

  const addProductHandler = (product: ProductType) => {
    console.log(product, 'product inside clickHandler');
    dispatch(addToBasketCounter());
    dispatch(addProductToBasket(product));
    dispatch(addAmountToSubtotal(product.price));
  };

  return (
    <div className="grid gap-1 grid-cols-2  shadow-lg items-center justify-center m-2.5 p-8 max-h-auto z-10 bg-zinc-300 min-w-min max-w-prose hover:bg-zinc-200">
      <img src={image} alt="" className="flex max-h-48 min-w-min max-w-full" />
      <div className="ml-5">
        <p className="mt-6 font-bold text-2xl mb-3">{name}</p>
        <div>
          <span className="font-bold text-2xl"> {price}</span>
          <span className="antialiased text-lg mx-2">{currency}</span>
          <span className="flex antialiased border-2 rounded-sm border-solid border-gray-900  w-fit px-2 py-0.5 font-extrabold text-zinc-600">
            {category}
          </span>
        </div>
        <div className="flex-row">
          {Array(rating)
            .fill(0)
            .map((_, i) => {
              return (
                <p key={i} className="px-1 font-bold text-zinc-800">
                  {rating} ⭐
                </p>
              );
            })}
        </div>
        <p className="antialiased text-base">{description}</p>
        <button
          className="bg-zinc-900 hover:bg-zinc-400 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => addProductHandler(product)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
