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
    const response = await csrfFetch(`/api/review/${reviewId}`)

        if (response.ok) {
            const review = await response.json();
            dispatch(getReview(review))
        };
};

export const deleteReview = (reviewId) => async dispatch => {
    const response =  await csrfFetch(`/api/review/${reviewId}`, {
        method: "delete"

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
            const review = await response.json();
            dispatch(receiveReview(review))
        }
        // else {
        //     const errors = await response.json();
        //     return errors;
        // };
};

export const updateReview = (review) => async dispatch => {
    const response = await csrfFetch(`api/reviews/${review.id}`, {
        method: 'patch',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({review})
    });
        if (response.ok) {
            const review = await response.json();
            dispatch(receiveReview(review));
        }
        else {
            const errors = await response.json();
            return errors;
        };
};

    const reviewReducer = (oldState = {}, action) => {
    const nextState = {...oldState}

    switch(action.type) {
        case GET_REVIEW:
            return action.reviews;
        case GET_REVIEWS:
            return nextState[action.review.id] = action.review;
        case REMOVE_REVIEW:
            const reviewId = action.reviewId
            delete nextState.review[reviewId]
            return nextState;
        case GET_PRODUCT:
            return action.payload.reviews
        default:
            return oldState;
    };
};   

export default reviewReducer;