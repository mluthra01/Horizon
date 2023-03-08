import CartItem from "./CartItem/CartItemsIndex"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../store/cartItem";
import { fetchCartItems } from "../../store/cartItem";
import { fetchProducts, receiveProducts } from "../../store/product";
import './CartIndex.css'
import CartEmpty from "./CartEmpty/CartEmpty";

const CartIndex = () => {
const dispatch = useDispatch();
const products = useSelector(receiveProducts);
const cartItems = useSelector(state => state.cartItems);
const carts = Object.values(cartItems)
const listCart = products.map((product) => (
    <>
        <CartItem key={product.id} product={product} />
        <hr />
    </>
))

const calculateCartSize = () => {
    let size = 0;
    carts.map(cart => {
        size += cart.quantity
    });
    return size
}

    useEffect(() => {
        
    dispatch(fetchCartItems())

    },[dispatch]);

    if (!carts) return null;
    return (

        <div className="cart-background-container">
            { calculateCartSize() > 0 && (
            <>
            <div className="cart-heading">Shopping Cart</div>
            <div className="cart-price-heading">Price</div>
            <hr className="top-border" />
            <div className="card-item-products">{listCart}</div>
            <div className="sub-total-container">
                Subtotal
                    <span className="sub-total-amt">$</span>
            </div>
            <div className="checkout-container">
                <div className="sub-total-container">
                    Subtotal
                    <span className="sub-total-amt">$</span>
                </div>
                <form>
                    <input 
                        type='submit'
                        className="checkout-btn"
                        value="Proceed to Checkout"
                    ></input>
                </form>
            </div>
            </>
            )}
            { calculateCartSize() < 1 && (
                <>
                <CartEmpty />
                </>
            )}
    
        </div>
    )
}

export default CartIndex