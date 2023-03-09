import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAddToCart } from "../../../store/cartItem";
import { fetchProduct, receiveProduct } from "../../../store/product";
import './ProductShowPage.css'
import { useHistory } from "react-router-dom";
import Review from "../../Reviews/Reviews";
import { fetchReview, receiveReviews } from "../../../store/review";


const ProductShow = () => {

const dispatch = useDispatch();
const { productId } = useParams();
const product = useSelector(receiveProduct(productId));
const [count , setCount ] = useState(1);
const user = useSelector(state => state.session.user)
const reviews = useSelector(receiveReviews)
const history = useHistory();

useEffect(() => {
    dispatch(fetchProduct(productId));
},[dispatch, productId]);

let rating = 0;
    reviews.forEach(review => {
        rating += review.rating
    });
    if (rating > 0 ) {
        rating = (rating / reviews.length ).toFixed(1);
    }

    const displayRating = (rating) => {
        let stars = [];
        for ( let i = 0; i < Math.floor(rating); i++) {
            stars.push(
                <img
                    className="star-ratings-img"
                    src="/assets/review_filled_star.png"
                    alt="filled-star"
                />
            );
        };
        for (let i = rating; i < 5; i++) {
        stars.push(
            <img
                className="star-ratings-image"
                src="/assets/review_empty_star.png"
                alt="empty-star"
            ></img>
            );
        };
    return stars;
    };


if (!product) {
    return null;
};
const descriptionNew = product.description.split('.');
const description = descriptionNew.slice(0,-1);

const quantitySelect = [
    "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15",
    "16", "17", "18", "19", "20"].map((quanity) => {
    if (quanity === "0") {
        return <option hidden key={quanity}>{`Qty: ${count}`}</option>;
        } 
    else {
        return (
        <option value={quanity} key={quanity}>
            {quanity}
        </option>
        );
    };
});
const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 2); 
const deliveryDay = deliveryDate.toLocaleDateString('en-US', { weekday: 'long' }); 
const deliveryTime = deliveryDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }); 

const deliveryMessage = `FREE delivery ${deliveryDay}, ${deliveryDate.toLocaleDateString()}.
Order within ${Math.floor(Math.random() * 12) + 1} hrs ${Math.floor(Math.random() * 60)} min`;


const handleSubmit = (e) => {
    e.preventDefault();
    const item = {productId: productId, quantity: count}
    if (user) {
        dispatch(fetchAddToCart(item));
    }
    else {
        history.push('/login')
    };
};

const price = parseFloat(product.price).toFixed(2)
const [wholePrice, fractionPrice] = price.split('.')

    return (
        <div className="product-show-container">
            {/* IMAGE */}
            <div className="product-left-container">
                <div className="product-img-container"> 
                <img 
                    className="product-image-show"
                    src={product.photoUrl}
                    alt={product.name}
                ></img>
            </div>


            {/* MAIN CONTENT */}
        <div className="product-middle-container">
                <span className="product-name">{product.name}</span>
                <div className="product-ratings">
                    {displayRating(rating)}
                    <span className="ratings-length"> {reviews.length} ratings</span>
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
                        <li className="description-content" key={item}>{item + '.'}</li>
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
                        <div className="prime-delivery-guarantee">FREE delivery <span className="date">{`${deliveryDay}, ${deliveryDate.toLocaleDateString()}.`} </span>Order within <span className='deadline'>{``}</span></div>
                    <div className="in-stock">In Stock</div>
                    <form onSubmit={handleSubmit} className="add-to-cart-form">
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
                    </form>
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
                <Review />
            </div>
        </div>
    )
}

export default ProductShow