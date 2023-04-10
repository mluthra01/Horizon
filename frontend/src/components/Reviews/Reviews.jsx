import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { fetchReview, receiveReviews } from "../../store/review";
import { useEffect } from "react";
import ReviewShow from "./ReviewShow/ReviewShow";
import { deleteReview } from "../../store/review";
import RatingStars from "../RatingStars/RatingStar";
import "./Review.css"
const Review = () => {
const { reviewId, productId } = useParams();
const dispatch = useDispatch();
const history = useHistory();
const reviews = useSelector(receiveReviews) || {}
const userId = useSelector((state) => state.session.user?.id);


    let rating = 0;
    reviews.forEach((review) => {
    rating += review.rating;
    });
    if (rating > 0) {
    rating = (rating / reviews.length).toFixed(1);
    }

const userReviews = reviews.filter(review => review.userId === userId);
const alreadyReviewed = userReviews.length > 0;

    return (
        <div className="product-review-container">
            <div className="left-review-container">
                <div className="product-rating-container">
                    <div className="product-rating-heading">
                        Customer Reviews
                    </div>
                    <div className="product-rating-avg">
                        <RatingStars  rating={rating}/> <span>{rating} out of 5</span>
                    </div>    
                </div>
                <hr />
                <div className="reviewer-container">
                    <div className="reviewer-heading">
                        Review this product
                    </div>
                    <div className="reviewer-cmt-heading">
                            Share your thoughts with other customers
                    </div>
                </div>
                <div className="reviewer-create-btn-container">
                {alreadyReviewed ? (
                    <div className="link-to-create-review">You have already reviewed this product.</div>
                ) : (
                    <NavLink
                        className="link-to-create-review"
                        to={`/products/${productId}/review`}
                    >
                        Write a customer review
                    </NavLink>
                )}
            </div>
                <hr />
            </div>
            <div className="review-show-container">
                <div className="review-show-heading">
                    Top reviews from the United States
                </div>
                <div>
                <ReviewShow productId={productId}/>
                </div>
            </div>
        </div>   

    )
}

export default Review