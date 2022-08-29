import React, {FunctionComponent} from 'react'
import './Home.css'
import Product from './Product';

const Home: FunctionComponent = () => {
  return (
    <div className="home">
      <div className='home-container'>
        <img
          className="img-hero"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero-image"
        ></img>
        
        <div className="home-row">
          <Product/>
          <Product/>
        </div>
        <div className="home-row">
        <Product/>
        <Product/>
        <Product/>
        </div>
        <div className="home-row">
        <Product/>
        </div>
      
      </div>
      
    </div>
  )
}

export default Home;