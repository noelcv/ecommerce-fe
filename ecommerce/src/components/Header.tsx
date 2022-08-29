import React, { FunctionComponent } from 'react';
import './Header.css';
import eShop_logo from '../assets/eShop_logo.svg';
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
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Mettakin} />
      </Link>
      <div className="header-search-bar-wrapper">
        <input
          className="header-search-bar-input"
          type="text"
          placeholder="Search"
        />

        <button className="header-search-bar-button">
          <SearchIcon />
        </button>
      </div>
      <div className="header-nav">
        <div className="header-options">
          <span className="header-option-l1">Hello</span>
          <span className="header-option-l2">Sign In</span>
        </div>
        <div className="header-options">
          <span className="header-option-l1">Returns</span>
          <span className="header-option-l2">& Orders</span>
        </div>
        <div className="header-options">
          <span className="header-option-l1">Your</span>
          <span className="header-option-l2">Subscription</span>
        </div>
        <Link to="/checkout">
          <div className="header-option-basket">
            <ShoppingCartIcon fontSize="large" />
            <span className="items-counter header-option-l2">{count}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
