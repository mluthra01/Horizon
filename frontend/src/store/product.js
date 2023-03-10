import csrfFetch from "./csrf";
import { GET_PRODUCTS_BY_CATEGORY } from "./category";
import { DELETE_CART_ITEM, GET_CART_ITEMS } from "./cartItem";
import { GET_REVIEWS } from "./review";
export const GET_PRODUCT = 'products/GET_PRODUCT';
export const GET_PRODUCTS = 'products/GET_PRODUCTS';
export const SET_SEARCH_QUERY = 'products/SET_SEARCH_QUERY';

export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    };
};

export const getProduct = (payload) => {
    return {
        type: GET_PRODUCT,
        payload
    };
};

export const setSearchQuery = (query) => {
    return {
        type: SET_SEARCH_QUERY,
        query
    };
};

export const receiveProducts = state => {

    return state.products ? Object.values(state.products) : [];
};

export const receiveProduct = (productId) => state => {
    return state.products ? state.products[productId] : null;
};


export const fetchProducts = () => async dispatch => {
    const response = await csrfFetch('/api/products');
        
        if (response.ok) {
            const products = await response.json();
            dispatch(getProducts(products));
        };

};

export const fetchProduct = (productId) => async dispatch => {
    const response = await csrfFetch(`/api/products/${productId}`);
        
        if (response.ok) {
            const product = await response.json();
            dispatch(getProduct(product));
        };

};

export const fetchRandomProducts = () => async dispatch => {
    const response = await csrfFetch('/api/products/random');

    if (response.ok) {
    const products = await response.json();
    dispatch(getProducts(products));
    };
};


export const searchProducts = (query) => async (dispatch) => {
    const response = await csrfFetch(`/api/products?search=${query}`);
        
        if (response.ok) {
        const products = await response.json();
            dispatch(getProducts(products));
    };
};

const productsReducer = (oldState = {}, action) => {
    const nextState = {...oldState}
    switch(action.type) {
        case GET_PRODUCTS:
        const products = action.products;
            return products;
        case GET_PRODUCT:
        const product =  action.payload.product
        nextState[product.id] = product
            return nextState;
        case GET_PRODUCTS_BY_CATEGORY:
            return action.products;
        case GET_CART_ITEMS:
            return action.payload.products 
        case DELETE_CART_ITEM:
            delete nextState[action.product];
            return nextState;
        case GET_REVIEWS:
            return action.payload.reviews
        default:
            return oldState;
    }
}

export default productsReducer;