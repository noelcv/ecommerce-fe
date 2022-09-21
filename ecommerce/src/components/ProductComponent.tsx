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
    <div className="grid grid-cols-2 md:grid-cols-3 static shadow-lg md:ml-10 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl 4xl:max-w-4xl m-2.5 p-6 max-h-auto z-10 bg-zinc-300 hover:bg-zinc-200">
        <div className="bottom-2 left-2 col-start-1 col-end-1">
          <img src={image} alt="" className="w-32 h-32 static object-cover" />
        </div>
      <div className="inline-block ml-2 mt-0.5 md:-ml-5 col-start-2 col-end-2">
        <p className="inline-block -mt-2 font-bold text-xl md:text-2xl mb-3">{name}</p>
        <div className="flex">
          <span className="font-bold text-xl md:text-2xl"> {price}</span>
          <span className="antialiased text-lg mx-2">{currency}</span>
            </div>
          <div className='static flex flex-col'>
            <span className="flex antialiased border-2 rounded-sm border-solid border-gray-900  w-fit px-2 font-extrabold text-zinc-600">
              {category}
            </span>
          </div>
          {rating !== null && <div className="flex flex-row mt-0.5">
            {Array(rating)
              .fill(0)
              .map((_, i) => {
                return (
                  <p key={i} className="px-1 ml-0 mt-0 font-bold text-zinc-800">
                    ⭐
                  </p>
                );
              })} <span className="font-bold">{rating}/5</span>
          </div>}
      </div>
      <div className="grid col-start-1 col-span-2 md:col-span-3">
        <p className="grid col-start-1 col-end-2 md:col-end-3 static antialiased mt-2 text-base max-w-xs">{description}</p>
      </div>
      
      <div className="grid col-start-1 col-end-2 space-x-2 w-fit md:ml-72">

        <button
          className="bg-red-300 grid col-start-1 ml-16 md:ml-12 hover:bg-zinc-400 min-w-12 max-h-16 md:max-h-14 w-21 text-zinc-800 font-bold py-2 px-4 rounded mt-4"
          onClick={() => addProductHandler(product)}
        >
          View Details
        </button>
        <button
          className="bg-zinc-800 grid col-start-2 hover:bg-zinc-400 min-w-12 max-h-16 w-21 text-red-300 antialiased font-bold py-2 px-4 rounded mt-4"
          onClick={() => addProductHandler(product)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
