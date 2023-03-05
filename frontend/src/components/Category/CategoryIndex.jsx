import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { fetchProductsByCategory, recieveProductsByCategory } from '../../store/category';
import ProductIndex from '../Products/ProductsIndex/ProductIndex';
import { Link } from "react-router-dom";
import './CategoryIndex.css'

const CategoryIndex = () => {


const { categoryId } = useParams();
const dispatch = useDispatch();
const products = useSelector(recieveProductsByCategory());
// const products = useSelector(state => Object.values(state.products))
// console.log(products)
// const products = Object.values(productsObj);

    useEffect(() => {
        dispatch(fetchProductsByCategory(categoryId))
    },[dispatch, categoryId])

        if (!products) {
        return null
    }
    
    return (    
    //     <div>
    // {products.map((product) => (
    //     <div>{product.name}</div> 
    //     ))}
    // </div>
    <div className="all-products-container">
            <h2 className="product-category-title">All Products</h2>
            <ul className="all-products">
                {products.map(product => (
                <li className="product-card" key={product.id}>
                    <div className="product-card__image">
                        <img src='/assets/placeholder.webp' alt={product.name} />
                    </div>
                    <div className="product-card__info">
                      <Link to={`/products/${product.id}`} >
            <h3 className="product-card__name">{product.name}</h3>
              </Link>
                {/* <p className="product-card__description">{product.description}</p> */}
                <div className="product-card__price">${product.price.toFixed(2)}</div>
              {/* <button className="product-card__button">Add to Cart</button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  
    );
};

export default CategoryIndex