import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
          <img
        className="header-logo"
        src="/logo.png"
        alt="Amazon Logo"
      />
      </Link>
      <div className="header-search">
        {/* <div className="header__searchInput" > */}
          <input  type="text" className="header-search-input" />
        {/* </div> */}
        {/* <div className="header__searchButton"> */}
          <i className='fa-solid fa-magnifying-glass search-icon'/>
        {/* </div> */}
      </div>
      
      <div className="header__nav">
        <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <Link to='/login'> 
            <span className="header__optionLineTwo">Sign In</span>
            </Link>
        </div>
        
      <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
      </div>

      <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
      </div>
      </div>
    </div>
  );
}

export default Header;
