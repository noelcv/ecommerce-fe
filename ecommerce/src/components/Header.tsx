import React, {FunctionComponent} from 'react'
import './Header.css'
import eShop_logo from '../assets/eShop_logo.svg'
import magnify from '../assets/magnify.svg'

const Header: FunctionComponent = () => {
  return (
    <div className='header'>
      <img className='header-logo' src={eShop_logo}/>
      <div className="header-search-bar-wrapper">
        <input className="header-search-bar-input" type="text" placeholder="Search"/>
        <button className="header-search-bar-button"><img src={magnify} width="30"/></button>
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
        
      </div>
    </div>
  )
}

export default Header