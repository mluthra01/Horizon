import React, { useEffect, useRef} from 'react';
import './header.css';
import { NavLink} from 'react-router-dom'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { searchProducts } from '../../store/product';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchCartItems, clearCart} from '../../store/cartItem';

const Header = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const  [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef(null);
  const cartItems = useSelector(state => state.cartItems);
  const quantities = Object.values(cartItems);
  const totalQuantity = quantities.reduce((sum, item) => sum += item.quantity, 0);


  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItems());
    }
  },[dispatch, user, totalQuantity]);

  const handleLogout = () => {
    dispatch(sessionActions.logout());
      dispatch(clearCart());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.style.outline = null;
        inputRef.current.style.boxShadow = null;
      }
    };
    setSearchQuery('')
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


    const handleSearch =  (e) => {
      e.preventDefault();
      dispatch(searchProducts(searchQuery))
      if (searchQuery.length > 0) {
      history.push(`/search/${searchQuery}`);
    }

    };


const handleClick = () => {
  const headerSearch = document.querySelector('.header-search')
  headerSearch.style.outline = "none";
  headerSearch.style.boxShadow = "0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%)"
};

  const demoLogin = () => {
        const demoUser = {
        email: "demo@user.io",
        password: "password",
        };
    dispatch(sessionActions.login(demoUser));

    };

    
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
    <NavLink to="/addresses"  style={{textDecoration: "none"}}>
    <div className='address-section'>
            <div className='address-icon' />
        <div className='header-address-button'>
            <div className='address-greeting'>Hello,</div> 
            <div className='address-select'>Select your address</div>
        </div>
    </div>
    </NavLink>


    {/* SEARCH BAR */}
        <form className="header-search" ref={inputRef} onSubmit={handleSearch} onClick={handleClick}>
              <input 
                type="text"
                className="header-search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
              <i className='fa-solid fa-magnifying-glass search-icon'
                />
        </form>
  
  
    {/* PROFILE BUTTON */}
      <div className="header-profile"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
        <div className="header-user-content" >
              <NavLink to={'/login'} >
                  <div className="header-greeting" >
                    Hello, {user ? user.name.split(" ")[0] : 'sign in'}
                  </div>
              </NavLink>
      
                  <div type='submit' className="signIn-signOut-button">
                          Accounts and Lists
                    <img src={"https://d1irxr40exwge2.cloudfront.net/nav-arrow.png"} alt="▼" />
                  </div>  
                  
        </div>
        {!user  && <div className="dropdown-logout">
                <div className="dropdown__toggle"  >
                </div>
              {isDropdownOpen && (
                <div className="dropdown__menu">
                    <div className='your-account'></div>
                  <NavLink style={{textDecoration: "none" ,color: "black"}} className='dropdown-links dropdown-signin-button' to="/login">Sign in</NavLink>
                  <div onClick={demoLogin} className="dropdown-links dropdown-demo-login-button" > Demo login</div>
                <div className="dropdown-signup-label">
                        New customer?{" "}
                        <NavLink className="dropdown-signup-link" to="/signup">
                          Start here.
                        </NavLink>
                      </div>
                </div>
              )}
          </div>}

                  
        {user && <div className="dropdown">
                <div className="dropdown__toggle"  >
                </div>
              {isDropdownOpen && (
                <div className="dropdown__menu">
                    <div className='your-account'>Your Account</div>
                  <NavLink className='dropdown-links' to="/addresses">Manage addresses</NavLink>
                  <NavLink className='dropdown-links' to="/returns">Manage orders</NavLink>
                  <NavLink className='dropdown-links' to={(pathname === '/cart' ? '/cart' : '/')} onClick={handleLogout}>Sign out</NavLink>
                </div>
              )}
          </div>}
                {isDropdownOpen && <div className='dropdown-up-arrow'></div>}
      </div>

    {/* RETURNS AND ORDERS */}
    <NavLink to="/returns"  style={{textDecoration: "none"}}>
      <div className="header-return-and-orders">
            <div className="header-returns">Returns</div>
            <div className="header-orders">& Orders</div>
      </div>
      </NavLink>


    {/* CART-ITEMS */}
    
    <NavLink style={{textDecoration: "none"}} to={!user ? '/empty' : "/cart"}>
      <div className="header-cart-items">
          <div className={ totalQuantity < 10 ? 'header-cart-count': 'large-count'}>
            {totalQuantity}
          </div>
          <div className="header-cart-img">
              <img src='/assets/cart.png' alt='cart_logo'/>
          </div>
          <div className='header-cart-label'>
              Cart
          </div>
      </div>
      </NavLink>
          
    
</div>
  );
}
export default Header;
