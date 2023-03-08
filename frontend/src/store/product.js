import csrfFetch from "./csrf";
import { GET_PRODUCTS_BY_CATEGORY } from "./category";
import { DELETE_CART_ITEM, GET_CART_ITEMS } from "./cartItem";
export const GET_PRODUCT = 'products/GET_PRODUCT';
export const GET_PRODUCTS = 'products/GET_PRODUCTS';
export const SET_SEARCH_QUERY = 'products/SET_SEARCH_QUERY';

export const getProducts = (products) => {
    // debugger
    return {
        type: GET_PRODUCTS,
        products
    };
};

export const getProduct = (product) => {
    return {
        type: GET_PRODUCT,
        product
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
    // debugger
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


export const searchProducts = (query) => async (dispatch) => {
    const response = await csrfFetch(`/api/products?search=${query}`);
        
        if (response.ok) {
        const products = await response.json();
            dispatch(getProducts(products));
            // dispatch(setSearchQuery(query));
    };
};

const productsReducer = (oldState = {}, action) => {
    const nextState = {...oldState}
    // debugger
    switch(action.type) {
        case GET_PRODUCTS:
        const products = action.products;
            return products;
        case GET_PRODUCT:
        const product =  action.product
        nextState[product.id] = product
            return nextState;
        // case SET_SEARCH_QUERY:
        //     return { ...nextState, searchQuery: action.query}
        case GET_PRODUCTS_BY_CATEGORY:
            return action.products;
        case GET_CART_ITEMS:
            return action.payload.products; 
        case DELETE_CART_ITEM:
            delete nextState[action.product];
            return nextState;
        default:
            return oldState;
    }
}

export default productsReducer