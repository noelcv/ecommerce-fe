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
    <div className="grid grid-cols-12 lg:flex lg:flex-row bg-slate-800 sticky z-2 w-screen">
      <div className="grid col-start-1">
        <Link to="/">
          <img className="w-34 -ml-7 mr-2" src={Mettakin} />
        </Link>
      </div>
      
      <div className="grid ml-16 col-start-1 col-end-2 grid-flow-col lg:col-end-10 lg:flex lg:flex-row lg:mr-16">
         <Link to="/admin">
            <div className="flex flex-row justify-center -ml-16 mt-3 lg:mr-20 lg:mt-12 2xl:ml-96">
              <SettingsIcon fontSize="large" />
            </div>
          </Link>
        <input
          className="h-10 grid mt-0 border-none text-zinc-900 lg:w-96 lg:mt-8 lg:-ml-16 2xl:w-96 2xl:pr-96 2xl:mt-9"
          type="text"
          placeholder="Search"
        />
        <button className=" grid col-start-3 bg-orange-400 w-16 h-14 -mt-92 lg:mt-8 lg:col-start-5 2xl:mt-9 2xl:w-20">
          <SearchIcon />
        </button>
            <div className="grid col-start-4 grid-flow-row ml-2 -mt-92 lg:mt-10 lg:flex lg:flex-row">
          <Link to="/checkout">
              <div className="flex mt-3 ml-3">
              <ShoppingCartIcon fontSize="large" />
              <span className="items-counter header-option-l2">{count}</span>
              </div>
          </Link>
            </div>
      </div>
      
      <div className="flex space-x-2 mt-16 lg:mt-0 lg:ml-3 lg:place-content-even 2xl:space-x-20 2xl:ml-96">
        <div className="flex flex-col lg:place-content-evenly">
          <span className="text-zinc-100 text-xl">Hi</span>
          <span className="text-zinc-300 text-2xl mt-0.5">Sign In</span>
        </div>
        <div className="flex flex-col lg:place-content-evenly">
          <span className="text-zinc-100 text-xl">Your</span>
          <span className="text-zinc-300 text-2xl mt-0.5">Orders</span>
        </div>
        <div className="flex flex-col lg:place-content-evenly">
          <span className="text-zinc-100 text-xl">Your</span>
          <span className="text-zinc-300 text-2xl mt-0.5">Subscription</span>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
