import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../redux/reducers/allProductsSlice';
import { RootState } from '../redux/store';
import { getAllProducts } from '../services/product';
import './Home.css';
import ProductComponent from './ProductComponent';

const Home: FunctionComponent = () => {
  const products = useSelector((state: RootState) => state.allProducts.value)
  const dispatch = useDispatch()
  
  const getProductsList = async () => {
    try {
      const products = await getAllProducts()
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
        <img
          className="-z-50 -mb-36 gradient-mask-b-10"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero-image"
        ></img>

        <div className="grid grid-cols-2 max-w-screen min-w-sm mx-px">
          {products.map((product, id) => (
            <ProductComponent 
              key={id} 
              name={product.name}
              rating={product.rating}
              description={product.description}
              image={product.image}
              price={product.price} 
              currency={product.currency}
          />
          ))}        
        </div>
      </div>
    </div>
  );
};

export default Home;
