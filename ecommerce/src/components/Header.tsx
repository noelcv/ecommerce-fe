import React, {FunctionComponent} from 'react'
import './Header.css'
import eShop_logo from '../assets/eShop_logo.svg'
import Mettakin from '../assets/Mettakin.svg'
import magnify from '../assets/magnify.svg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const Header: FunctionComponent = () => {
  return (
    <div className='header'>
      <Link to="/">
      <img className='header-logo' src={Mettakin}/>
      </Link>
      <div className="header-search-bar-wrapper">
        <input className="header-search-bar-input" type="text" placeholder="Search"/>
        
        <button className="header-search-bar-button"><SearchIcon/></button>
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
        <div className="header-option-basket">
          <Link to="/checkout">
          <ShoppingCartIcon 
            fontSize='large'
          />
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Header