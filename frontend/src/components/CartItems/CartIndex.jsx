import CartItem from "./CartItem/CartItemsIndex"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../store/cartItem";
import { fetchCartItems } from "../../store/cartItem";
import { receiveProducts } from "../../store/product";

const CartIndex = () => {
const dispatch = useDispatch();
const products = useSelector(receiveProducts);
console.log(products)
const listCart = products.map((product) => (
    <>
        <CartItem key={product.id} product={product} />
    </>
))

useEffect(() => {
    dispatch(fetchCartItems())
},[dispatch]);



    return (
        <div>
            {listCart}
        </div>
    )
}

export default CartIndex