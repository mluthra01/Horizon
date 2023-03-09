import "./ReviewCreateForm.css"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { createReview } from "../../../store/review";
import { fetchProduct, receiveProduct } from "../../../store/product";


const ReviewCreateForm = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(receiveProduct(productId));
    const history = useHistory();
    const [errors, setErrors ] = useState([]);
    const [headline, setHeadline] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);
    const userId = useSelector(state => state.session.user?.id);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    },[dispatch, productId]);

    if (userId === undefined) history.push("/login");
    if (!product) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(createReview({ productId, userId, headline, body, rating }))
            .then(() => {
            history.push(`/products/${productId}`)
            })
            .catch(async (response) => {
                let data;
                try {
                    data = await response.clone().json();
                } catch {
                    data = await response.text();
                }
                if (rating === 0) {
                    if (data?.errors) {
                        data.errors.push("Rating must be chosen");
                    } 
                    else {
                        data.push("Ratings must be greater than 0")
                    }
                }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([response.statusText]);
            });
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
                    <div className="create-review-heading">Create Review</div>
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
                    {/* <div className="review-error">{displayError("rating")}</div> */}
                </div>
                <hr />
                    <label className="headline-label"> Add a headline
                        <input
                            className="review-content"
                            value={headline}
                            placeholder="What's most important to know?"
                            onChange={(e) => setHeadline(e.target.value)} 
                        />
                        {/* <div className="review-error">{displayError("headline")}</div> */}
                    </label>
                    <hr />
                    <label className="body-label"> Add a written review
                        <textarea
                            className="review-content"
                            placeholder="What did you like or dislike? What did you use this product for?"
                            value={body}
                            onChange={(e) => setBody(e.target.value)} 
                        />
                            {/* <div className="review-error">{displayError("body")}</div> */}
                    </label>
                    <hr />
                    <div className="create-review-submit-container">
                        <input
                            className="create-review-submit-button"
                            type="Submit"
                            value="Submit"
                            readOnly
                        />
                    </div>
            </form>
        </div>
    );
}   

export default ReviewCreateForm