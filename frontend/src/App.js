import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CategoryBar from './components/CategoryBar/CategoryBar';
import Header from './components/header/header';
import LoginFormPage from './components/LoginFormPage/LoginForm';
import SignUpFormPage from './components/SignupFormPage/SignUpForm';
import './reset.css'


function App() {
  return (
    <>
    
      <Switch>
        <Route exact path='/'>
          <Header />
          <CategoryBar />
        </Route>
      <Route exact path="/login">
        <LoginFormPage />
      </Route>
      <Route exact path='/signup'>
        <SignUpFormPage />
      </Route>
    </Switch>
    </>

  );
}

export default App;
