import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from "./usersReducer";


const rootReducer = combineReducers({
// users: usersReducer
});

// let enhancer;


// if (process.env.NODE_ENV === 'production') {
//     enhancer = applyMiddleware(thunk);
// } else {
//     const logger = require('redux-logger').default;
//     const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     enhancer = composeEnhancers(applyMiddleware(thunk, logger));
// }

const configureStore = (preloadedState = {}) => (
    legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;
