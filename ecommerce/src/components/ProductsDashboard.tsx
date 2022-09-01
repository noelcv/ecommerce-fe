import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../redux/reducers/allProductsSlice';
import { RootState } from '../redux/store';
import { getAllProducts } from '../services/product';
import ProductComponent from './ProductComponent';

const ProductsDashboard: FunctionComponent = () => {
  //TODO: create delete button / service /reducer
  //TODO: create edit button / service /reducer
  
  const products = useSelector((state: RootState) => state.allProducts.value)
  const dispatch = useDispatch()
  console.log(products, 'products at Homepage')
  
  const getProductsList = async () => {
    try {
      const products = await getAllProducts()
      console.log(products, 'products at Homepage inside getAllProducts')
      dispatch(allProducts(products))
    } catch (err) {
      console.log("Error getting Products List", err);
    }
    
  }
  
  useEffect(() => {
    getProductsList()
    console.log("products", products)
  }, [])
  
  return (
    <div className="flex justify-center mx-auto max-w-screen min-w-sm">
      <div className="max-w-screen min-w-sm">
        <div className="grid grid-cols-2 max-w-screen min-w-sm mx-px">
        {products.map((product, index) => {
            return (
              <div
                className="grid gap-1 grid-cols-2 items-center justify-center m-5 p-8 max-h-auto z-10 bg-zinc-300 min-w-min max-w-prose"
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
                      <small>$</small>
                      <strong>{product.price}</strong>
                    </div>

                    <button
                      className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => console.log(product)}
                    >
                      Edit
                    </button>
                    
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => console.log(product)}
                    >
                      Delete
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




export default ProductsDashboard