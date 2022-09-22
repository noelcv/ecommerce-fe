import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  allProducts,
  removeProductFromStore,
} from '../redux/reducers/allProductsSlice';
import { updateProduct } from '../redux/reducers/productSlice';
import { RootState } from '../redux/store';
import { deleteProduct } from '../services/product/deleteProduct.service';
import { ProductType } from '../types/ProductType';
import EditProductForm from './EditProductForm';
import { updateEditingState } from '../redux/reducers/isEditingSlice';
import SideBtn from './btn/SideBtn';
import AddProductForm from './AddProductForm';
import { updateIsAddingNewProductState } from '../redux/reducers/isAddingNewProductSlice';
import { getAllProducts } from '../services/product/getAllProducts.service';

const ProductsDashboard: FunctionComponent = () => {
  let products = useSelector((state: RootState) => state.allProducts.value);
  const isEditing = useSelector((state: RootState) => state.isEditing.value);
  const isAddingNewProduct = useSelector(
    (state: RootState) => state.isAddingNewProduct.value
  );
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
    <div className="mx-auto -mt-5">
      <div className="">
        <div className="grid grid-cols-2 items-center justify-center space-x-2 md:space-x-20">
          <h2 className="ml-2 grid col-start-1 text-md md:ml-1 mt-10 -mb-1 md:text-3xl">
            Products Overview
          </h2>

          {!isEditing && (
            <SideBtn
              onClick={() => dispatch(updateIsAddingNewProductState(true))}
              text="Add New Product"
              className="grid col-start-2 antialiased z-20 text-xs md:text-lg items-center mt-10 -ml-12 mr-12 md:ml-16 md:-mr-80 my-0 w-fit transition ease-in-out delay-100"
            />
          )}
        </div>
        {!isEditing && isAddingNewProduct && <AddProductForm />}
        <div className="md:w-96 -ml-3 md:ml-2 md:grid md:grid-cols-2">
          <div className="md:grid md:grid-cols-1 md:w-96">
            {!isEditing &&
              products.map((product, index) => {
                return (
                  <div
                    className="md:w-full md:my-2 md:py-2 md:px-2 grid grid-cols-2 m-2.5 p-6 max-h-auto z-10 md:grid-cols-2 static shadow-lg md:-ml-2 md:max-w-xl  bg-zinc-300 hover:bg-zinc-200"
                    key={index}
                  >
                    <div className="bottom-2 left-2 col-start-1 col-end-1">
                      <img
                        src={product.image}
                        alt=""
                        className="w-32 h-32 static object-cover"
                      />
                    </div>
                
                      <div className="inline-block ml-2 mt-0.5 md:-ml-5 col-start-2 col-end-2">
                        <p className="inline-block -mt-2 font-bold text-xl md:text-2xl mb-3">
                          {product.name}
                        </p>

                        <div className="product-font-bold text-xl md:text-2xl">
                          {' '}
                          <span className="font-bold text-2xl">
                            {' '}
                            {product.price}
                          </span>
                          <span className="antialiased text-lg mx-2">
                            {product.currency}
                          </span>
                          <div className="flex flex-row mt-0.5">
                            {Array(product.rating)
                              .fill(0)
                              .map((_, i) => {
                                return <p key={i}>⭐</p>;
                              })}
                          </div>
          
                        <div className="-ml-36">
                          <span className="mt-2 md:mt-8 md:ml-0 flex antialiased border-2 rounded-sm border-solid border-gray-900  w-fit px-2 py-0.5 font-extrabold text-sm text-zinc-600">
                            {product.category}
                          </span>
                          <p className="grid col-start-1 col-end-2 md:col-end-3 static antialiased mt-2 text-base max-w-xs">
                            {product.description}
                          </p>

                          <div className="grid col-start-1 col-end-2 space-x-2 w-fit md:ml-12">
                            <button
                              className="bg-red-500 hover:bg-red-700 grid col-start-1 ml-16 min-w-12 max-h-16 md:max-h-14 w-21 text-zinc-200 font-bold py-2 px-4 rounded mt-4"
                              onClick={() => deleteHandler(product)}
                            >
                              Delete
                            </button>

                            <button
                              className="bg-zinc-800 grid col-start-2 hover:bg-zinc-400 min-w-12 max-h-16 w-21 text-zinc-100 antialiased font-bold py-2 px-4 rounded mt-4"
                              onClick={() => editHandler(product)}
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="-ml-2">{isEditing && <EditProductForm />}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDashboard;
