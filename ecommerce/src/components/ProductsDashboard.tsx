import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../redux/reducers/allProductsSlice';
import { updateProduct } from '../redux/reducers/productSlice';
import { RootState } from '../redux/store';
import { deleteProduct, getAllProducts } from '../services/product';
import { ProductType } from '../types/ProductType';
import { editProduct } from '../services/product';
import EditProduct from './EditProduct';
import { updateEditingState } from '../redux/reducers/isEditingSlice';

const ProductsDashboard: FunctionComponent = () => {
  let products = useSelector((state: RootState) => state.allProducts.value);  
  const dispatch = useDispatch();
  //TODO: create edit button / service /reducer

  const isEditing = useSelector((state: RootState) => state.isEditing.value);
  

  const getProductsList = async () => {
    try {
      const products = await getAllProducts();
      dispatch(allProducts(products));
    } catch (err) {
      console.log('Error getting Products List', err);
    }
  };

  const editHandler = (product: ProductType) => {
    dispatch(updateEditingState(true))
    dispatch(updateProduct(product))
  };


  const deleteHandler = async (product: ProductType) => {
    try {
      console.log(product, 'product to delete');
      const deleted = await deleteProduct(product);
      if (deleted) {
        console.log('deleted successfully', deleted);
        getProductsList();
      }
    } catch (err) {
      console.log('Error at deleteHandler: ', err);
    }
  };

  useEffect(() => {
    if (products) {
      getProductsList();
      console.log('products', products);
    }
  }, []);

  return (
    <div className="flex justify-center mx-auto -mt-5 max-w-screen min-w-sm">
      <div className="max-w-screen min-w-sm">
        <div className="grid grid-cols-2 max-w-screen min-w-sm mx-px w-full">
          {!isEditing &&
            products.map((product, index) => {
              return (
                <div
                  className="grid gap-1 grid-cols-2 items-center justify-center m-5 p-8 max-h-auto z-10 bg-zinc-200 hover:bg-zinc-300  min-w-min max-w-prose"
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
                        <small>{product.currency}</small>
                        <strong>{product.price}</strong>
                      </div>

                      <button
                        className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => editHandler(product)}
                      >
                        Edit
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteHandler(product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          {isEditing && (
            <EditProduct />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsDashboard;
