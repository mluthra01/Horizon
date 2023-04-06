import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
import CategoryBar from './components/CategoryBar/CategoryBar';
import Header from './components/header/header';
import LoginFormPage from './components/LoginFormPage/LoginForm';
import SignUpFormPage from './components/SignupFormPage/SignUpForm';
import Footer from './components/Footer/Footer';
import './reset.css'
import ProductIndex from './components/Products/ProductsIndex/ProductIndex';
import ProductShow from './components/Products/ProductShowPage/ProductShowPage';
import CategoryIndex from './components/Category/CategoryIndex';
import CartIndex from './components/CartItems/CartIndex';
import Homepage from './components/Homepage/Homepage';
import CartEmpty from './components/CartItems/CartEmpty/CartEmpty';
import SearchResults from './components/SearchResults/SearchResults';
import Checkout from './components/CheckoutPage/Checkout';
import ReviewCreateForm from './components/ReviewForms/ReviewCreateForm/ReviewCreateForm';

function App() {
  return (
    <>
    
    <Switch>
      <Route exact path='/'>
        <Header />
        <CategoryBar />
        <Homepage />
        <Footer />
      </Route>
      <Route exact path="/login">
        <LoginFormPage />
      </Route>
      <Route exact path='/signup'>
        <SignUpFormPage />
      </Route>
      <Route exact path="/empty">
          <Header />
          <CategoryBar />
          <CartEmpty />
          <Footer />
      </Route>
      <Route exact path='/products/'>
        <Header />
        <CategoryBar />
        <ProductIndex />
        <Footer />
      </Route>
      <Route exact path="/products/:productId">
          <Header />
          <CategoryBar />
          <ProductShow />
          <Footer />
      </Route>
      <Route exact path="/category/:categoryId">
        <Header />
        <CategoryBar />
        <CategoryIndex />
        <Footer />
      </Route>
      <Route exact path="/cart">
          <Header />
          <CategoryBar />
          <CartIndex />
          <Footer />
      </Route>
      <Route exact path="/search/:query">
        <Header />
        <CategoryBar />
        <SearchResults />
        <Footer />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/products/:productId/review/:reviewId?">
        <Header />
        <CategoryBar />
        <ReviewCreateForm />
        <Footer />
      </Route>
      <Route path="*">
          <Redirect to="/" />
      </Route>
    </Switch>
    </>

  );
}

export default App;
