import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, receiveProduct } from "../../../store/product";
import Review from "../../Reviews/Reviews";
import './ProductShowPage.css'

const ProductShow = ({prodcuts}) => {

const dispatch = useDispatch();
const { productId } = useParams();
const product = useSelector(receiveProduct(productId));
const [count , setCount ] = useState(1);


useEffect(() => {
    dispatch(fetchProduct(productId));
},[dispatch, productId]);

if (!product) {
    return null;
};
const descriptionNew = product.description.split('.');
const description = descriptionNew.slice(0,-1);

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




const price = parseFloat(product.price).toFixed(2)
const [wholePrice, fractionPrice] = price.split('.')

    return (
        <div className="product-show-container">
            {/* IMAGE */}
            <div className="product-left-container">
                <div className="product-img-container"> 
                <img 
                    className="product-image-show"
                    src='/assets/placeholder.webp'
                    alt={product.name}
                ></img>
            </div>


            {/* MAIN CONTENT */}
        <div className="product-middle-container">
                <span className="product-name">{product.name}</span>
                <div className="product-ratings">
                    Ratings go here
                </div>
                    <hr />
                <div className="product-price">
                    <div className="price-tag">Price:</div>
                    <div className="price-symbol">$</div>
                    <div className="price-main-price">{wholePrice}</div>
                    <div className="price-fraction">{fractionPrice}</div>
                </div>
                <div className="prime-logo">
                    <img src='/assets/prime.png' />
                    <div className="free-returns">FREE Returns</div>
                    <div className="prime-delivery">Get <b>Fast, Free Shipping</b> with <span className="free-delivery-prime">Horizon Prime</span></div>
                    <hr />
                </div>
                {/* <div className="product-description"> */}
                    <div className="description-heading">About this item</div>
                    <ul className="description-list">
                        {description.map(item =>  
                        <li className="description-content">{item + '.'}</li>
                    )}
                    </ul>
                
                {/* </div> */}
            </div>
        


            {/* SIDE PANEL */}
            <div className="product-right-panel">
                    <div className="product-price">
                        <div className="price-symbol">$</div>
                        <div className="price-main-price">{wholePrice}</div>
                        <div className="price-fraction">{fractionPrice}</div>
                    </div>
                    <div className="prime-logo">
                        <img src='/assets/prime.png' />
                        <div className="free-returns">FREE Returns</div>
                    </div>
                        <div className="prime-delivery-guarantee">FREE delivery <span className="date">Saturday, March 4. </span>Order within <span className='deadline'>7 hrs 58 mins</span></div>
                    <div className="in-stock">In Stock</div>
                    <div type="submit" className="add-to-cart-form">
                        <div className="quantiy-select">
                            <label className="dropdown-quantity">
                                <select 
                                    className="count-select"
                                    value={`Qty: ${count}`}
                                    onChange={(e) => setCount(e.target.value)}
                                    >{quantitySelect}
                                    </select>
                            </label>
                                <input 
                                    type="submit"
                                    className="add-to-cart-btn"
                                    value="Add to Cart"
                                    >
                                </input>
                        </div>
                    </div>
                    <div className="buy-now-form">
                        <input 
                            type='submit'
                            className="buy-now-btn"
                            value='Buy now'
                            >
                        </input>
                    </div>
                    <div className='secure-transaction'>
                        <div className='secure-transaction-icon'>
                            <img src="https://d1irxr40exwge2.cloudfront.net/secure.png" alt="Secure icon" height="15px" />
                        </div>
                        <div className='secure-text'>
                            Secure transaction
                        </div>
                    </div>
                    <div className="right-panel-footer">
                        <div>Ships from <span className="fullfillment1"> Horizon</span></div>
                        <div>Sold by <span className="fullfillment2"> Horizon</span></div>
                        <div className="return-conditions">Returns <span className="fullfillment3"> Eligible for Return</span></div>
                    </div>
                </div>
            </div>


            {/* REVIEWS */}
            <div className="product-review-section">

            </div>
        </div>
    )
}

export default ProductShow