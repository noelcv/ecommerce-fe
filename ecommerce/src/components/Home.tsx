import { FunctionComponent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useQuery } from '@apollo/client';
import { allProducts } from '../redux/reducers/allProductsSlice';
import { RootState } from '../redux/store';
import { getAllProducts } from '../services/product/getAllProducts.service';
// import Schwarz from '../assets/schwarz.svg';
import ProductComponent from './ProductComponent';
import GET_ALL_PRODUCTS from '../graphQL/queries/GET_ALL_PRODUCTS';

const Home: FunctionComponent = () => {
  const products = useSelector((state: RootState) => state.allProducts.value);
  // const { loading, error, data } = useQuery(GET_ALL_PRODUCTS)
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const getProductsList = async () => {
    try {
      setLoading(true);
      const products = await getAllProducts();
      if (products) {
        dispatch(allProducts(products));
        setLoading(false)
      }
    } catch (err) {
      console.log('Error getting Products List', err);
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <div className="flex">
      <div className="max-w-xs md:max-w-fit">
        <img
          className="-z-50 -mb-28  md:-mb-36 bg-red-300 gradient-mask-b-10 w-screen object-cover"
          // src={Schwarz} //TODO: Replace with CDN link
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero-image"
        ></img>
        {(isLoading &&
          <div className="flex justify-center items-center -mt-40">
            <div className="-ml-96 z-50 w-12 h-12 bg-red">
              <div className="animate-pulse border-8 mb-12">Loading</div>
              <div className="animate-pulse font-extrabold ml-3">
                `-,-`
                <div className="animate-spin">____________</div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full mt-28 md:mt-0 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3">
          {products ? (
            products.map((product, id) => (
              <div key={id} className="mt-2">
                <ProductComponent
                  key={id}
                  id={product.id}
                  name={product.name}
                  rating={product.rating}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                  price={product.price}
                  currency={product.currency}
                />
              </div>
            ))
          ) : (
            <h2 className="flex justify-center">No products found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
