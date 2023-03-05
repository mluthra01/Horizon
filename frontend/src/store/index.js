import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import session from "./session";
import products from "./product";
import cartItems from "./cartItem"
import { compose } from "redux";


const rootReducer = combineReducers({
    session,
    products,
    cartItems
});



let enhancer;
if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => (
    legacy_createStore(rootReducer, preloadedState, enhancer)
);

export default configureStore;
