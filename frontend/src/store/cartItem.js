import csrfFetch from "./csrf";

export const ADD_TO_CART = 'cartItems/add_to_cart'
export const GET_CART_ITEMS = 'cartItems/get_cart_items'
export const UPDATE_CART_ITEM = 'cartItems/update_cart_item'
export const DELETE_CART_ITEM = 'cartItems/delete_cart_item'
export const CLEAR_CART = 'cartItems/clear_cart'

export const addToCart = (cartItem) => {
    return {
        type: ADD_TO_CART,
        cartItem
    };
};

export const getCartItems = (cartItems) => {
    return {    
        type: GET_CART_ITEMS,
        cartItems
    };
};

export const deleteCartItem  = (cartItemId ) => {
    return {
        type: DELETE_CART_ITEM,
        cartItemId
    };
};

export const updateCartItem = (cartItem) => {
    return {
        type: UPDATE_CART_ITEM,
        cartItem
    };
};

export const clearCart = () => {
    return {
        type: CLEAR_CART,

    }

}

export const clearCartItems = () => async (dispatch) => {
    const response = await csrfFetch("/api/cart_items", {
    method: "DELETE"
})
    if (response.ok) {

        dispatch(clearCart())
    }
    }


export const fetchCartItems = () => async dispatch => {
    const response = await csrfFetch('/api/cart_items');

        if (response.ok) {
            const cartItems = await response.json();
            dispatch(getCartItems(cartItems));
        };
};

export const fetchAddToCart = (cartItem) => async dispatch => {
    const response = await csrfFetch('/api/cart_items', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(cartItem)
    });
        if (response.ok) {
            const cartItem = await response.json();
            dispatch(addToCart(cartItem));
        };
};

export const fetchUpdateCart = (cartItem) => async dispatch => {
    const response = await csrfFetch(`api/cart_items/`, {
        method: 'patch',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({cartItem})
    });
    if (response.ok) {
        const cartItem = await response.json();
        dispatch(updateCartItem(cartItem));
    };
};

export const fetchDeleteCartItem = (cartItemId) => async dispatch => {
    const response = await csrfFetch(`api/cart_items/${cartItemId}`, {
        method: 'Delete'
    });

        if (response.ok) {
            dispatch(deleteCartItem(cartItemId))
        };

};

const cartItemReducer = (oldState = {}, action) => {
    const nextState = {...oldState};    

    switch(action.type) {
        case ADD_TO_CART:
        return nextState[action.cartItem.id] = action.cartItem;
        case GET_CART_ITEMS:
            return action.cartItems;
        case UPDATE_CART_ITEM:
            return nextState[action.cartItem.id] = action.cartItem;
        case DELETE_CART_ITEM:
        const cartItemId = action.cartItemId
        delete nextState[cartItemId]
        return nextState;
        case CLEAR_CART:
            return {};
        default:
            return oldState;
    };
};

export default cartItemReducer;