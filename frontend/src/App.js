import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CategoryBar from './components/CategoryBar/CategoryBar';
import Header from './components/Header/Header';
import LoginFormPage from './components/LoginFormPage/LoginForm';
import SignUpFormPage from './components/SignupFormPage/SignUpForm';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import './reset.css'
import ProductIndex from './components/Products/ProductsIndex/ProductIndex';
import ProductShow from './components/Products/ProductShowPage/ProductShowPage';
import CategoryIndex from './components/Category/CategoryIndex';
import Carousel from './components/Carousel/Carousel';

// const images = [
//   { id: 1, src: '/assets/placeholder.webp', alt: "Image 1" },
//   { id: 2, src: "image2.jpg", alt: "Image 2" },
//   { id: 3, src: "image3.jpg", alt: "Image 3" }
// ];

function App() {
  return (
    <>
    
    <Switch>
      <Route exact path='/'>
        <Header />
        <CategoryBar />
        {/* <Carousel images={images} /> */}
        {/* <Homepage /> */}
        {/* <Home /> */}
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

    </Switch>
    </>

  );
}

export default App;
