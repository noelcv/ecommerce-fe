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
  }, [])
  
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="img-hero"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero-image"
        ></img>

        <div className="home-row">
          {products.map((product, id) => (
            <ProductComponent 
              key={id} 
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price} 
              currency={product.currency} 
          />
          ))}
        
        </div>
        <div className="home-row"></div>
        <div className="home-row"></div>
      </div>
    </div>
  );
};

export default Home;
