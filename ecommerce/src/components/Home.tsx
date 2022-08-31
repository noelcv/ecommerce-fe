import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../services/product';
import './Home.css';
import ProductComponent from './ProductComponent';

const Home: FunctionComponent = () => {
  const products = useSelector((state) => state.products)
  
  useEffect(()=>{
    getAllProducts();
  }, [produc])
  
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="img-hero"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero-image"
        ></img>

        <div className="home-row">
          {products.map((product) => (
            <ProductComponent />
          ))}
        
        </div>
        <div className="home-row"></div>
        <div className="home-row"></div>
      </div>
    </div>
  );
};

export default Home;
