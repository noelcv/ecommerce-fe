import React, { FunctionComponent } from 'react';
import './Home.css';
import ProductComponent from './ProductComponent';

const Home: FunctionComponent = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="img-hero"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero-image"
        ></img>

        <div className="home-row">
          <ProductComponent name="Yin Yoga" rating={5} price={20} image="https://images.squarespace-cdn.com/content/v1/5eb917658b5a4f0e02842abf/1593730136137-1OO8ZZ53OR0JMQ2HS82Q/image2.jpeg?format=1500w" />
          <ProductComponent name="Yoga at the Farm" rating={5} price={20} image="https://images.squarespace-cdn.com/content/v1/5eb917658b5a4f0e02842abf/9721616f-530d-4258-8b86-9dd85c234e8a/038.jpg?format=750w"/>
          <ProductComponent name="Sound Bath" rating={5} price={15} image="https://images.squarespace-cdn.com/content/v1/5eb917658b5a4f0e02842abf/1653580542512-1UNWRUYKITSTK18SJM3X/035.jpg?format=1500w" />
        </div>
        <div className="home-row"></div>
        <div className="home-row"></div>
      </div>
    </div>
  );
};

export default Home;
