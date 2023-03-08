import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory, recieveProductsByCategory } from '../../store/category';
import { NavLink } from "react-router-dom";
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
        <div className="product-category-title">
          {categoryName}
        </div>
        <ul className="all-products">
          {products.map(product => (
            <li className="product-card" key={product.id}>
              <NavLink style={{textDecoration: "none"}} to={`/products/${product.id}`} >
                <div className="product-card-image">
                  <img src={product.photoUrl} alt={product.name} />
                </div>
                <div className="product-card-info">
                <div className="product-card-name">
                  {product.name.length > 50 ?
                  product.name.slice(0, product.name.lastIndexOf(' ', 50)) + "..."
                  : product.name }
                </div>
                <div className="product-card-price">
                  ${product.price.toFixed(2)}
                </div>
            </div>
              </NavLink>
          </li>
          ))};
        </ul>
    </div>
  
    );
};

export default CategoryIndex;