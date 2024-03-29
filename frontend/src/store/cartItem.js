import csrfFetch from "./csrf";

export const ADD_TO_CART = 'cartItems/add_to_cart'
export const GET_CART_ITEMS = 'cartItems/get_cart_items'
export const UPDATE_CART_ITEM = 'cartItems/update_cart_item'
export const DELETE_CART_ITEM = 'cartItems/delete_cart_item'
export const CLEAR_CART = 'cartItems/clear_cart'
export const GET_QUANTITY = 'cartItems/get_quantity'

export const addToCart = (cartItem) => {
    return {
        type: ADD_TO_CART,
        cartItem
    };
};

export const getCartItems = (payload) => {
    return {    
        type: GET_CART_ITEMS,
        payload
    };
};

export const getQuantity = (payload) => {
    return {
        type: GET_QUANTITY,
        payload
    }
}

export const deleteCartItem  = (productId) => {
    return {
        type: DELETE_CART_ITEM,
        productId: productId 
        
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
    });
    if (response.ok) {
        dispatch(clearCart())
    };
};

// export const fetchCartQuantity = () =>  async dispatch => {
//     const response = await csrfFetch(`/api/cart_items/quantity`)

//         if (response.ok) {
//             const quantity = await response.json();
//             dispatch(getCartItems(quantity))
//         };
// };

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
            return cartItem;
        };
};

export const fetchUpdateCart = (cartItemId, count) => async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({quantity: count})
    });
    if (response.ok) {
        const cartItem = await response.json();
        dispatch(updateCartItem(cartItem));
    };
};

export const fetchDeleteCartItem = (productId) => async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${productId}`, {
        method: 'DELETE'
    });

        if (response.ok) {
            dispatch(deleteCartItem(productId))
        };

};

const cartItemReducer = (oldState = {}, action) => {
    const nextState = {...oldState};    

    switch(action.type) {
        case ADD_TO_CART:
        return nextState[action.cartItem.id] = action.cartItem;
        case GET_CART_ITEMS:
        return action.payload.cartItems
        // case GET_QUANTITY:
        // return nextState["quantity"] = action.payload.quantity
        case UPDATE_CART_ITEM:
            return nextState[action.cartItem.id] = action.cartItem;
        case DELETE_CART_ITEM:
        delete nextState[action.productId];
        return nextState;
        case CLEAR_CART:
            return {};
        default:
            return oldState;
    };
};

export default cartItemReducer;
