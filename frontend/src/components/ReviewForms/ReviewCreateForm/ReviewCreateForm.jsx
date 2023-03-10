import "./ReviewCreateForm.css"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { createReview, fetchReview, receiveReview, updateReview } from "../../../store/review";
import { fetchProduct, receiveProduct } from "../../../store/product";


const ReviewCreateForm = () => {
    const dispatch = useDispatch();
    const { productId, reviewId } = useParams();
    const product = useSelector(receiveProduct(productId));
    const history = useHistory();
    const userId = useSelector(state => state.session.user?.id);
    const formType = reviewId ? 'Edit Review' : 'Create Review'

    const review = useSelector(state => {
    if (formType === "Edit Review") {
    return receiveReview(reviewId)(state);
    } else {
    return { headline: "", body:"", rating:"", productId: productId || "", userId: userId || ""} ;
    }
});

useEffect(() => {
if (reviewId) {
        dispatch(fetchReview(reviewId))
    }
},[reviewId, dispatch]);

useEffect(() => {
dispatch(fetchProduct(productId));
},[dispatch, productId]);

    const [errors, setErrors ] = useState([]);
    const [headline, setHeadline] = useState(review ? review.headline ? review.headline : '' : '');
    const [body, setBody] = useState(review ? review.body ? review.body : '' : '');
    const [rating, setRating] = useState(review ? review.rating ? review.rating : '' : '');

    if (userId === undefined) history.push("/login");
    if (!product) return null;

    const handleSubmit =  (e) => {
        e.preventDefault();

        const reviewData = {
            ...review,
            headline,
            body,
            rating,
            userId,
            productId
        }
        setErrors([]);
        if (formType === "Edit Review") {
        dispatch(updateReview(reviewData))
            .then(() => {
            history.push(`/products/${productId}`)
        })
            .catch(handleError);
        } else {
        dispatch(createReview({ productId, userId, headline, body, rating }))
        .then(() => {
            history.push(`/products/${productId}`)
        })
            .catch(handleError);
        }
    }
    
const handleError = async (response) => {
    let data;
    try {
    data = await response.clone().json();
    } catch {
    data = await response.text();
    }
    if (rating === 0) {
    if (data?.errors) {
        data.errors.push("Rating must be chosen");
    } else {
        data.push("Ratings must be greater than 0");
    }
    }
    if (data?.errors) setErrors(data.errors);
    else if (data) setErrors([data]);
    else setErrors([response.statusText]);
};


    const handleRatingClick = (e, num) => {
    e.preventDefault();
    setRating(num);
};

const renderStar = (index) => {
    if (index < rating) {
    return (
        <button
        className="review-star"
        onClick={(e) => handleRatingClick(e, index + 1)}
        key={index}
        >
        <img
            className="review-star-image"
            src="/assets/filled.svg"
            alt="filled-star"
        />
        </button>
    );
    } else {
    return (
    <button
        className="review-star"
        onClick={(e) => handleRatingClick(e, index + 1)}
        key={index}
    >
        <img
            className="review-star-image"
            src="/assets/img.svg"
            alt="empty-star"
        />
        </button>
    );
    }
};

const stars = [...Array(5)].map((_, index) => renderStar(index));

<div className="create-review-star-rating-container">{stars}</div>



    return (
        <div className="create-review-container">
            <form onSubmit={handleSubmit}>
                <div className="create-review-top-container">
                    <div className="create-review-heading">{formType}</div>
                    <div className=" create-review-product-container">
                        <div className="create-review-product-img">
                            <img
                                className="review-product-img"
                                src={product && product.photoUrl}
                                alt="add-review"
                            />
                        </div>
                        <div className="create-review-product-name">
                            {product && product.name.length > 80 ?
                            product.name.slice(0, product.name.lastIndexOf(' ', 80)) + "..."
                                : product.name}
                                {/* {product && product.name} */}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="create-review-rating-container">
                    <div className="create-review-rating-heading">
                        Overall Rating
                    </div>
                    <div className="create-review-star-rating-container">{stars}</div>
    
                </div>
                <hr />
                    <label className="headline-label"> Add a headline
                        <input
                            className="review-content"
                            value={headline}
                            placeholder="What's most important to know?"
                            onChange={(e) => setHeadline(e.target.value)} 
                        />
                        
                    </label>
                    <hr />
                    <label className="body-label"> Add a written review
                        <textarea
                            className="review-content"
                            placeholder="What did you like or dislike? What did you use this product for?"
                            value={body}
                            onChange={(e) => setBody(e.target.value)} 
                        />
            
                    </label>
                    <hr />
                    <div className="create-review-submit-container">
                        <input
                            className="create-review-submit-button"
                            type="Submit"
                            value={formType}
                            readOnly
                        />
                    </div>
            </form>
        </div>
    );
}   

export default ReviewCreateForm