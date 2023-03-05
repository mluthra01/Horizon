import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CategoryBar from './components/CategoryBar/CategoryBar';
import Header from './components/header/Header';
import LoginFormPage from './components/LoginFormPage/LoginForm';
import SignUpFormPage from './components/SignupFormPage/SignUpForm';
import Footer from './components/Footer/Footer';
import './reset.css'
import ProductIndex from './components/Products/ProductsIndex/ProductIndex';
import ProductShow from './components/Products/ProductShowPage/ProductShowPage';
import CategoryIndex from './components/Category/CategoryIndex';
import CartItem from './components/CartItems/CartItemsIndex';

import Homepage from './components/Homepage/Homepage';



function App() {
  return (
    <>
    
    <Switch>
      <Route exact path='/'>
        <Header />
        <CategoryBar />
        {/* <Carousel images={images} /> */}
        <Homepage />
        <Footer />
      </Route>
      <Route exact path="/login">
        <LoginFormPage />
      </Route>
      <Route exact path='/signup'>
        <SignUpFormPage />
      </Route>
      <Route exact path='/products'>
        <Header />
        <CategoryBar />
        <ProductIndex />
        <Footer />
      </Route>
      <Route exact path="/products/:productId">
          <Header />
          <CategoryBar />
          {/* <ProductIndex /> */}
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
          <CartItem />
          <Footer />
      </Route>
      <Route exact path="/search">
        <Header />
        <CategoryBar />
        <ProductIndex />
          <Footer />
      </Route>

    </Switch>
    </>

  );
}

export default App;
