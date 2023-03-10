import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import { receiveReviews, deleteReview, fetchReview } from "../../../store/review"
import RatingStars from "../../RatingStars/RatingStar"

const ReviewShow = ({productId}) => {
    const reviews = useSelector(receiveReviews)
    const history = useHistory();
    const userId = useSelector((state) => state.session.user?.id);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchReview())
    // },[dispatch]);

    const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];
    const createdToDate = (date) => {
    date = new Date(date);
    let str = date.toDateString();
    str = str.split(" ");
    return `${monthNames[date.getMonth()]} ${str[2]}, ${str[3]}`;
    };


    const handleEditClick = (e, review) => {
    history.push(`/products/${productId}/review/${review.id}`);
    };
    return (
    <>
    {reviews.map((review) => (
    <div key={review.id} className="product-review">
        <div className="review-name-container">
        <div className="placeholder-pic">
            <img className="placeholder" src="/assets/fake.jpg" alt="avatar"></img>
            <span className="review-name"></span>
        </div>
        </div>
        <div
        className="review-rating"
        onClick={(e) => handleEditClick(e, review)}
        >
        <div className="review-star-ratings">
            <RatingStars rating={review.rating} />
            <span className="review-heading">{review.headline}</span>
        </div>
        </div>
        <div className="review-location-label">
        Reviewed in the United States on {createdToDate(review.createdAt)}
        </div>
        <div className="review-body">{review.body}</div>
        {review.userId === userId && (
        <div className="authorized-review-buttons">
            <div className="edit-button-container">
            <NavLink to={`/products/${productId}/review/${review.id}/`}>
                <div className="authorized-button-label">Edit</div>
            </NavLink>
            </div>
            <div className="delete-button-container">
            <button
                className="delete-button"
                onClick={(e) => dispatch(deleteReview(review.id))}
            >
                <div className="authorized-button-label">Delete</div>
            </button>
            </div>
        </div>
        )}
    </div>
    ))}
    </>
    )

}

export default ReviewShow