import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../../store/cartItem";
import './CartItem.css'


const CartItemIndex = () => {
const dispatch = useDispatch();
const cartItems = useSelector(state => state.cartItems);
const user = useSelector(state => state.session.user)



useEffect(() => {
    dispatch(fetchCartItems())
},[dispatch])


const cartItemKeys = Object.keys(cartItems)
    let quantity;
    let userId;
    let productId;
    cartItemKeys.map(cartItemKey => {
        quantity = cartItems[cartItemKey].quantity
        userId = cartItems[cartItemKey].userId
        productId = cartItems[cartItemKey].productId
    })

    return (
        <div className="cart-item-container">
                <div className="shopping-cart-heading">Shopping Cart</div>
                {/* <div>{id}</div> */}
                <hr />
            
                {/* <div className="quantity">{quantity}</div> */}
        </div>
    );
};

export default CartItemIndex;