import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory, recieveProductsByCategory } from '../../store/category';
import { Link } from "react-router-dom";
import './CategoryIndex.css'

const CategoryIndex = () => {
const { categoryId } = useParams();
const dispatch = useDispatch();
const products = useSelector(recieveProductsByCategory());

useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId))
},[dispatch, categoryId]);

  let categoryName;
  if (categoryId === '1') {
      categoryName = 'Electronics'
  }
  else if (categoryId === '2') {
    categoryName = 'Home and Kitchen'
  }
  else if (categoryId === '3' ) {
      categoryName = 'Beauty'
  }
  else if (categoryId == '4') {
      categoryName = 'Sports and Outdoors'
  }
  else if (categoryId === '5') {
      categoryName = 'Best Sellers'
  }
  else {
    categoryName = ""
  };

    if (!products) return null;
    
    return (    
    <div className="all-products-container">
            <h2 className="product-category-title">{categoryName}</h2>
            <ul className="all-products">
                {products.map(product => (
                <li className="product-card" key={product.id}>
                    <div className="product-card-image">
                        <img src={product.photoUrl} alt={product.name} />
                    </div>
                    <div className="product-card-info">
                      <Link to={`/products/${product.id}`} >
            <h3 className="product-card-name">{product.name}</h3>
              </Link>
                {/* <p className="product-card__description">{product.description}</p> */}
                <div className="product-card-price">${product.price.toFixed(2)}</div>
              {/* <button className="product-card__button">Add to Cart</button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  
    );
};

export default CategoryIndex;