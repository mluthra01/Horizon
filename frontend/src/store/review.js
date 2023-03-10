import csrfFetch from "./csrf";
import { GET_PRODUCT } from "./product";
export const GET_REVIEWS = 'reviews/get_reviews'
export const GET_REVIEW = "reviews/get_review"
export const REMOVE_REVIEW = "reviews/delete_review"

export const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    };
};

export const getReview = (review) => {
    return {
        type: GET_REVIEW,
        review
    };
};

export const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    };
};


export const receiveReviews = (state) => {
    return state.reviews ? Object.values(state.reviews) : [];
};

export const receiveReview = (reviewId) => (state) => {
    return state.reviews ? state.reviews[reviewId] : null
}

export const fetchReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`)

        if (response.ok) {
            const reviewData = await response.json();
            dispatch(getReview(reviewData))
        };
};

export const deleteReview = (reviewId) => async dispatch => {
    const response =  await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"

    });
        if (response.ok) {
            dispatch(removeReview(reviewId))
        };

};

export const createReview = (review) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(review)
    });
        if (response.ok) {
            const newReview = await response.json();
            dispatch(getReview(newReview))
        };
};

export const updateReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    });
        if (response.ok) {
            const editedReview = await response.json();
            dispatch(getReview(editedReview));
        };
};

    const reviewReducer = (oldState = {}, action) => {
    const nextState = {...oldState}

    switch(action.type) {
        case GET_REVIEWS:
            return action.reviews || [];
        case GET_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        case GET_PRODUCT:
            return action.payload.reviews
        default:
            return oldState;
    };
};   

export default reviewReducer;