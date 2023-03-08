import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './CartEmpty.css'

const CartEmpty = () => {

const user = useSelector( state => state.session.user)
return (
    <div className='cart-page-container'>
        <div className="empty-cart-container">
        <div className='cart-empty-img'>
            <img 
            src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg'
            alt='svg-cart-empty'
            />
        </div>
        <div className='cart-empty-content'>
            <div className="empty-cart-heading">
                Your Horizon Cart is empty.
            </div>
            <NavLink to='/products'  style={{textDecoration: "none"}} >
            <div className='cart-continue-shopping'>
                Shop all Products
            </div >
            </NavLink>
        { !user && (
            <div className='route-buttons'>
            <NavLink to='/login'  style={{textDecoration: "none"}} >
            <div className="cart-signIn-button">
                Sign in to your account
            </div>
            </NavLink>
            <NavLink to='/signup' style={{textDecoration: "none"}}>
            <div className="cart-signup-button">
                Sign up now
            </div>
            </NavLink>
            </div>
        )}

        </div>
        </div>
    </div>
)
}

export default CartEmpty