import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  allProducts,
  removeProductFromStore,
} from '../redux/reducers/allProductsSlice';
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
        <div className="flex flex-row items-center justify-center space-x-2">
          <h2 className="ml-2 text-md md:ml-1 mt-10 -mb-1 md:text-3xl">
            Products Overview
          </h2>

          {!isEditing && (
            <SideBtn
              onClick={() => dispatch(updateIsAddingNewProductState(true))}
              text="Add New Product"
              className=" justify-center antialiased z-20 text-xs md:text-lg items-center mt-10 -ml-12 mr-12 md:ml-16 md:-mr-80 my-0 w-fit transition ease-in-out delay-100"
            />
          )}
        </div>
        {!isEditing && isAddingNewProduct && <AddProductForm />}
        <div className="bg-red-500 -ml-3 md:grid md:grid-cols-1 z-50 max-w-xs md:max-w-4xl md:min-w-sm mx-px w-full">
          <div className="md:grid md:grid-cols-2">
            {!isEditing &&
              products.map((product, index) => {
                return (
                  <div
                    className="ml-1 mb-3 px-3 py-3 grid gap-1 grid-cols-1 md:grid md:grid-cols-2 items-center drop-shadow-2xl justify-center md:m-5 md:p-8 md:max-h-auto z-10 bg-zinc-200 hover:bg-zinc-300  min-w-min md:max-w-xl"
                    key={index}
                  >
                    <div className="static bottom-2 left-2 ">
                      <img
                        src={product.image}
                        alt=""
                        className="w-32 h-32 md:w-32 md:h-32 md:-mt-80 static object-cover"
                      />
                    </div>
                    <div className="static">
                      <div className="inline-block ml-36 -mt-48 pt-7 md:-mt-16 md:ml-2">
                        <p className="mt-6 font-bold text-lg mb-3">
                          {product.name}
                        </p>

                        <div className="product-price">
                          {' '}
                          <span className="font-bold text-2xl">
                            {' '}
                            {product.price}
                          </span>
                          <span className="antialiased text-lg mx-2">
                            {product.currency}
                          </span>
                          <div className="product-rating">
                            {Array(product.rating)
                              .fill(0)
                              .map((_, i) => {
                                return <p key={i}>⭐</p>;
                              })}
                          </div>
                        </div>
                        <div className="-ml-36">
                          <span className="mt-2 md:mt-8 md:ml-36 flex antialiased border-2 rounded-sm border-solid border-gray-900  w-fit px-2 py-0.5 font-extrabold text-sm text-zinc-600">
                            {product.category}
                          </span>
                          <p className="antialiased text-base md:mt-12 md:-ml-9">
                            {product.description}
                          </p>

                          <div className="ml-20 md:ml-32">
                            <button
                              className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                              onClick={() => deleteHandler(product)}
                            >
                              Delete
                            </button>

                            <button
                              className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded mr-2"
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
