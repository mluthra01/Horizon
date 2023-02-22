import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { loginUser, logoutUser, signupUser } from './store/usersReducer';
import { csrfFetch, restoreSession } from './store/csrf';
// import { Store } from 'redux';

const store = configureStore()

// testing
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
}
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.signupUser = signupUser;

const initializeApp = () => {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  let initialState = {};

    if (currentUser) {
      initialState = {
        users: {
          [currentUser.id] : currentUser
        }
      }
    }
    const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

}

// ensure that we check id we are logged in before initalizing our app
// sets up csrf and currentUser if we need it


restoreSession().then(initializeApp);