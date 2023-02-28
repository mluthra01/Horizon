import React from 'react';
import './header.css';


const Header = () => {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="/logo.png"
        alt="Amazon Logo"
      />
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
          <span className="header__optionLineTwo">Sign In</span>
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
