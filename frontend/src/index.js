import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/index';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';
import * as cartItemActions from './store/cartItem'




const store = configureStore()

// testing
if (process.env.NODE_ENV !== 'production') {
  window.store = store
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions
  window.cartItemActions = cartItemActions
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}
























// const initializeApp = () => {
//   let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
//   let initialState = {};

//     if (currentUser) {
//       initialState = {
//         users: {
//           [currentUser.id] : currentUser
//         }
//       }
//     }
//     const store = configureStore(initialState);
//       window.store = store;
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//     <App />
//     </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// }

// // ensure that we check id we are logged in before initalizing our app
// // sets up csrf and currentUser if we need it


// restoreSession().then(initializeApp);