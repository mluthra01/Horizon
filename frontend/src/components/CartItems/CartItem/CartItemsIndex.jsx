import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, fetchCartItems } from "../../../store/cartItem";
import { fetchProducts } from "../../../store/product";
import { receiveProducts } from "../../../store/product";
import CartEmpty from "../CartEmpty/CartEmpty";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './CartItem.css'


const CartItem = ({product}) => {
const {id, name, photoUrl, price } = product 
const [count, setCount] = useState(1)


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
})

const handleClick = () => {

};

    return (
        // <>
        // {products.length > 0 ?
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
                    onClick={(e) => {deleteCartItem()}} >
                        Delete
                    </div>
                </div>
            </div>
                    <div className="cart-product-price">${price.toFixed(2)}</div>
                {/* <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} </li>
                ))}
                </ul>
                <hr />
            
                <div className="quantity">5</div>
                <button onClick={handleClick()}>Delete</button> */}
</div>
        //     : null }
        //     <>
        //     {products.length < 1 ? 
        //     <CartEmpty /> : null }
        //     </>

        // </>
    );
};

export default CartItem;