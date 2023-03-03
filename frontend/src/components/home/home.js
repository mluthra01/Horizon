import React from "react";
import { Link } from "react-router-dom";
import './home.css'

const products = [
  {
    name: "Product 1",
    image: "https://via.placeholder.com/150",
    price: "$10.00",
    link: "/product/146",
  },
  {
    name: "Product 2",
    image: "https://via.placeholder.com/150",
    price: "$20.00",
    link: "/product/2",
  },
  {
    name: "Product 3",
    image: "https://via.placeholder.com/150",
    price: "$30.00",
    link: "/product/3",
  },
  {
    name: "Product 4",
    image: "https://via.placeholder.com/150",
    price: "$30.00",
    link: "/product/3",
  },
  {
    name: "Product 5",
    image: "https://via.placeholder.com/150",
    price: "$30.00",
    link: "/product/3",
  },
  {
    name: "Product 6",
    image: "https://via.placeholder.com/150",
    price: "$30.00",
    link: "/product/3",
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <Link to={product.link}>
              <img src={product.image} alt={product.name} />
              <div className="name">{product.name}</div>
              <div className="price">{product.price}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
