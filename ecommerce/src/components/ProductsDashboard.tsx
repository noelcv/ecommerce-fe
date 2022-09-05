import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {allProducts,removeProductFromStore } from '../redux/reducers/allProductsSlice';
import { updateProduct } from '../redux/reducers/productSlice';
import { RootState } from '../redux/store';
import { deleteProduct, getAllProducts } from '../services/product';
import { ProductType } from '../types/ProductType';
import EditProductForm from './EditProductForm';
import { updateEditingState } from '../redux/reducers/isEditingSlice';
import SideBtn from './btn/SideBtn';
import AddProductForm from './AddProductForm';
import { updateIsAddingNewProductState } from '../redux/reducers/isAddingNewProductSlice';

const ProductsDashboard: FunctionComponent = () => {
  let products = useSelector((state: RootState) => state.allProducts.value);
  const isEditing = useSelector((state: RootState) => state.isEditing.value);
  const isAddingNewProduct = useSelector((state:RootState) => state.isAddingNewProduct.value)
  const dispatch = useDispatch();


  const getProductsList = async () => {
    try {
      const products = await getAllProducts();
      dispatch(allProducts(products));
    } catch (err) {
      console.log('Error getting Products List', err);
    }
  };

  const editHandler = (product: ProductType) => {
    dispatch(updateEditingState(true));
    dispatch(updateProduct(product));
  };

  const deleteHandler = async (product: ProductType) => {
    try {
      console.log(product, 'product to delete');
      const deleted = await deleteProduct(product);
      if (deleted) {
        console.log('deleted successfully', deleted);
        dispatch(removeProductFromStore(product));
      }
    } catch (err) {
      console.log('Error at deleteHandler: ', err);
    }
  };

  useEffect(() => {
    //fetch API onMount and cache results on Redux store;
    getProductsList();
  }, []);

  return (
    <div className="flex justify-center mx-auto -mt-5 max-w-screen min-w-sm">
      <div className="max-w-screen min-w-sm">
        <div className="flex flex-row items-center justify-center space-x-80">
          <h2 className="ml-10 mt-10 -mb-1 text-3xl justify-center items-center">
            Products Overview
          </h2>

          {!isEditing && (
            <SideBtn
              onClick={() => dispatch(updateIsAddingNewProductState(true))}
              text="Add New Product"
              className=" justify-center antialiased text-lg items-center mt-10 ml-16 my-0 w-fit transition ease-in-out delay-100"
            />
          )}
        </div>
        {!isEditing && isAddingNewProduct && <AddProductForm />}
        <div className="grid grid-cols-2 max-w-screen min-w-sm mx-px w-full">
          {!isEditing &&
            products.map((product, index) => {
              return (
                <div
                  className="grid gap-1 grid-cols-2 items-center drop-shadow-2xl justify-center m-5 p-8 max-h-auto z-10 bg-zinc-200 hover:bg-zinc-300  min-w-min max-w-prose"
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

                      <div className="product-price">
                        {' '}
                        <span className="font-bold text-2xl">
                          {' '}
                          {product.price}
                        </span>
                        <span className="antialiased text-lg mx-2">
                          {product.currency}
                        </span>
                        <span className="flex antialiased border-2 rounded-sm border-solid border-gray-900  w-fit px-2 py-0.5 font-extrabold text-zinc-600">
                          {product.category}
                        </span>
                      </div>

                      <div className="product-rating">
                        {Array(product.rating)
                          .fill(0)
                          .map((_, i) => {
                            return <p key={i}>⭐</p>;
                          })}
                      </div>

                      <p className="antialiased text-base">
                        {product.description}
                      </p>

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
          {isEditing && <EditProductForm />}
        </div>
      </div>
    </div>
  );
};

export default ProductsDashboard;
