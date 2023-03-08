import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchDeleteCartItem, fetchUpdateCart } from "../../../store/cartItem";
import './CartItem.css'


const CartItem = ({product}) => {

const {id, name, photoUrl, price, cartItemId, quantity } = product 
const [count, setCount] = useState(quantity);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchUpdateCart(cartItemId, count))
},[ cartItemId, count])

const quantitySelect = [
    "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15",
    "16", "17", "18", "19", "20"].map((quantity) => {
    if (quantity === "0") {
        return <option hidden key={quantity}>{`Qty: ${count}`}</option>;
        } 
    else {
        return (
        <option value={quantity} key={quantity}>
            {quantity}
        </option>
        );
    };
});

    return (
        <div className="cart-product-container">
            <div className="cart-product-img-container">
                <NavLink to={`/products/${id}`} target="_blank">
                <img className="cart-product-img" 
                    src={photoUrl} 
                    alt="product-photo"
                />
                </NavLink>
            </div>
            <div className="cart-product-content-container">
                <div className="cart-product-name-container">
                    <div className="cart-product-name">{name}</div>
                    <div className="cart-available-stock">In Stock</div>
                    <div className="cart-eligible">
                        Eligble for FREE Shipping & <span>FREE Returns</span>
                    </div>
                </div>
            </div>
            <div className="cart-quantity-container">
                <div className="product-quanity">
                    <label className="cart-dropdown-quanity">
                        <select 
                        className="cart-count-select"
                        value={`Qty: ${count}`}
                        onChange={(e) => setCount(e.target.value)}
                        >
                                {quantitySelect}
                        </select>
                    </label>
                </div>
                <div className="cart-product-delete-container">
                    <div type='submit' className="cart-product-delete-btn"
                    onClick={() => dispatch(fetchDeleteCartItem(cartItemId))} >
                        Delete
                    </div>
                </div>
            </div>
                    <div className="cart-product-price">${price.toFixed(2)}</div>
</div>
    );
};

export default CartItem;