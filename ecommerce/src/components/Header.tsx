import { FunctionComponent } from 'react';
import Mettakin from '../assets/Mettakin.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Header: FunctionComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="grid grid-cols-12 md:flex md:flex-row bg-slate-800 sticky z-2 w-screen">
      <div className="grid col-start-1">
        <Link to="/">
          <img className="w-34 -ml-7 mr-2" src={Mettakin} />
        </Link>
      </div>
      
      <div className="grid ml-16 col-start-1 col-end-2 grid-flow-col md:col-end-10 md:flex md:flex-row md:mr-16">
         <Link to="/admin">
            <div className="flex flex-row justify-center -ml-16 mt-3 md:mr-20 md:mt-12 4xl:ml-96">
              <SettingsIcon fontSize="large" />
            </div>
          </Link>
        <input
          className="h-10 grid mt-0 border-none text-zinc-900 md:w-96 md:mt-8 md:-ml-16 4xl:w-96 4xl:pr-96 4xl:mt-9"
          type="text"
          placeholder="Search"
        />
        <button className=" grid col-start-3 bg-red-300 w-16 h-14 -mt-92 md:mt-8 md:col-start-5 4xl:mt-9 4xl:w-20">
          <SearchIcon />
        </button>
            <div className="grid col-start-4 grid-flow-row ml-2 -mt-92 md:mt-10 md:flex md:flex-row">
          <Link to="/checkout">
              <div className="flex mt-3 ml-0">
              <ShoppingCartIcon fontSize="large" />
              <span className="items-counter header-option-l2">{count}</span>
              </div>
          </Link>
            </div>
      </div>
      
      <div className="flex space-x-2 mt-16 ml-10 md:mt-0 md:ml-3 md:place-content-even 3xl:ml-80 3xl:space-x-20 4xl:space-x-20 4xl:ml-96">
        <div className="flex flex-col md:place-content-evenly">
          <span className="text-zinc-100 text-xl">Hello</span>
          <span className="text-zinc-300 text-xl mt-0.5">Sign In</span>
        </div>
        <div className="flex flex-col md:place-content-evenly">
          <span className="text-zinc-100 text-xl">Your</span>
          <span className="text-zinc-300 text-xl mt-0.5">Orders</span>
        </div>
        <div className="flex flex-col md:place-content-evenly">
          <span className="text-zinc-100 text-xl">Your</span>
          <span className="text-zinc-300 text-xl mt-0.5">Subscription</span>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
