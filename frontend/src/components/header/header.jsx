import React from 'react';
import './header.css';
import {Link, NavLink, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';
import * as sessionActions from '../../store/session'
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { searchProducts } from '../../store/product';


const Header = () => {

  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchQuery));
  };


  // for header we need logo in the left, then address, then search, then sign in,
  // dropdown, then returns and orders, then cart

return (
<div className="header">
    {/* LOGO */}
      <div className='header-logo'>
          <NavLink to='/'>
              <img
              src="/assets/logo.png"
              alt="Amazon Logo"
              />
          </NavLink>
      </div>

    {/* ADDRESS BUTTON */}
    <div className='address-section'>
            <div className='address-icon' />
        <div className='header-address-button'>
            <div className='address-greeting'>Hello,</div> 
            <div className='address-select'>Select your address</div>
        </div>
    </div>


    {/* SEARCH BAR */}
        <form className="header-search" onSubmit={handleSearch}>
              <input 
                type="text"
                className="header-search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
              <i className='fa-solid fa-magnifying-glass search-icon'
                />
        </form>
  
  
    {/* PROFILE BUTTON */}
      <div className="header-profile">
        <div className="header-user-content">
              <Link to={'/login'} >
                  <div className="header-greeting" style={{textDecoration: 'none'}}>
                    Hello, {user ? user.name.split(" ")[0] : 'sign in'}
                  </div>
              </Link>
      
                  <div type='submit' className="signIn-signOut-button">
                          Accounts and Lists
                    <img src={"https://d1irxr40exwge2.cloudfront.net/nav-arrow.png"} alt="▼" />
                  </div>  
                  
        </div>

        {user && <div className="dropdown">
                <div className="dropdown__toggle" onMouseEnter={toggleMenu} onMouseLeave={!toggleMenu} >
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                </div>
              {isOpen && (
                <div className="dropdown__menu">
                    <div className='your-account'>Your Account</div>
                  <NavLink className='dropdown-links' to="/addresses">Manage addresses</NavLink>
                  <NavLink className='dropdown-links' to="/orders">Manage orders</NavLink>
                  <NavLink className='dropdown-links' to='/' onClick={() => dispatch(sessionActions.logout())}>Sign out</NavLink>
                </div>
              )}
            

        </div>}
        <div className='dropdown-up-arrow'></div>
            {/* <div className='background'></div> */}
      </div>

    {/* RETURNS AND ORDERS */}
      <div className="header-return-and-orders">
            <div className="header-returns">Returns</div>
            <div className="header-orders">& Orders</div>
      </div>


    {/* CART-ITEMS */}
      <div className="header-cart-items">
          <div className='header-cart-count'>
                0
          </div>
          <div className="header-cart-img">
              <img src='/assets/cart.png' alt='cart_logo'/>
          </div>
          <div className='header-cart-label'>
              Cart
          </div>
      </div>
        
          
    
</div>
  );
}
        export default Header;

