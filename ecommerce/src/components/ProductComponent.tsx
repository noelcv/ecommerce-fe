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
  const count = useSelector((state: RootState) => state.counter.value);
  const subtotal = useSelector((state: RootState) => state.subtotal.value);
  const dispatch = useDispatch();
  const product = { id, name, price, rating, image, description };
  return (
    <div className="grid gap-1 grid-cols-2 items-center justify-center m-2.5 p-8 max-h-96 z-10 bg-zinc-300 min-w-min">
      <img src={image} alt="" className="flex max-h-48 min-w-min max-w-full" />
      <div className="product-info">
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
          onClick={() => {
            console.log('price', price);
            console.log('current count', count);
            console.log('subtotal before', subtotal);
            dispatch(addToBasketCounter());
            dispatch(addAmountToSubtotal(price));
            dispatch(addProductToBasket([product]));
            console.log('added to basket...current count', count);
            console.log('subtotal after', subtotal);
          }}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
