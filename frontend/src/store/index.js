import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from "./usersReducer";


const rootReducer = combineReducers({
users: usersReducer
});

const configureStore = (preloadedState = {}) => (
    legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;
