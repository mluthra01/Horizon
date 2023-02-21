import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { restoreSession } from './store/csrf';
import { loginUser, logoutUser, signupUser } from './store/usersReducer';
import { Store } from 'redux';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// testing
window.store = store;
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
          // if we need to get a value from a key we need to wrap in it square brackets
        }
      }
    }
    const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

}

// ensure that we check id we are logged in before initalizing our app
// sets up csrf and currentUser if we need it
restoreSession().then(initializeApp);