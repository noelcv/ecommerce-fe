import React, { FunctionComponent } from 'react';
import './Header.css';
import Mettakin from '../assets/Mettakin.svg';
import magnify from '../assets/magnify.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Header: FunctionComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="flex flex-row bg-slate-800 sticky z-50">
      <Link to="/">
        <img className="object-contain mt-4" src={Mettakin} />
      </Link>
      <div className="flex flex-row ">
        <input
          className="w-96 h-10 mt-12 border-none text-zinc-900"
          type="text"
          placeholder="Search"
        />

        <button className="bg-orange-400 w-20 h-14 mt-12">
          <SearchIcon />
        </button>
      </div>
      <div className="flex place-content-evenly">
        <div className="flex flex-col place-content-evenly p-10">
          <span className="text-zinc-100 text-2xl">Hello</span>
          <span className="text-zinc-300 text-3xl mt-0.5">Sign In</span>
        </div>
        <div className="flex flex-col place-content-evenly p-10">
          <span className="text-zinc-100 text-2xl">Returns</span>
          <span className="text-zinc-300 text-3xl mt-0.5">& Orders</span>
        </div>
        <div className="flex flex-col place-content-evenly p-10">
          <span className="text-zinc-100 text-2xl">Your</span>
          <span className="text-zinc-300 text-3xl mt-0.5">Subscription</span>
        </div>
        <Link to="/checkout">
          <div className="flex flex-row mx-10 mt-14">
            <ShoppingCartIcon fontSize="large" />
            <span className="items-counter header-option-l2">{count}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
