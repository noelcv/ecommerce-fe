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
    <div className="shadow-lg max-w-xs m-2.5 p-6 max-h-auto z-10 bg-zinc-300 hover:bg-zinc-200">
      <div className="static">
        <div className="static bottom-2 left-2">
          <img src={image} alt="" className="w-32 h-32 static object-cover" />
        </div>
      </div>
      <div className="inline-block ml-36 -mt-72 lg:ml-72">
        <p className="mt-6 font-bold text-2xl mb-3">{name}</p>
        <div className="flex">
          <span className="font-bold text-2xl"> {price}</span>
          <span className="antialiased text-lg mx-2">{currency}</span>
            </div>
          <div className='flex flex-col'>
            <span className="flex antialiased border-2 rounded-sm border-solid border-gray-900  w-fit px-2 font-extrabold text-zinc-600">
              {category}
            </span>
          </div>
          <div className="flex-row mt-0.5">
            {Array(rating)
              .fill(0)
              .map((_, i) => {
                return (
                  <p key={i} className="px-1 ml-3 mt-0 font-bold text-zinc-800">
                    {rating} ⭐
                  </p>
                );
              })}
          </div>
      </div>
      
        <p className="static antialiased mt-2 text-base max-prose">{description}</p>
      <div className="grid grid-cols-2 space-x-2 w-fit">

        <button
          className="bg-zinc-900 hover:bg-zinc-400 min-w-12 max-h-16 w-21 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => addProductHandler(product)}
        >
          View Details
        </button>
        <button
          className="bg-orange-400 hover:bg-zinc-400 min-w-12 max-h-16 w-21 text-zinc-900 antialiased font-bold py-2 px-4 rounded mt-4"
          onClick={() => addProductHandler(product)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
