import './ProductItem.css'
import { NavLink } from 'react-router-dom'
import RatingStars from '../../../RatingStars/RatingStar';
const ProductItem = ({product}) => {

    return (
    <div className="all-products-container">
        <NavLink style={{textDecoration: "none"}} to={`/products/${product.id}`} >
        <div className="all-products">
            <div className="product-card" key={product.id}>
                <div className="product-card-image">
                    <img src={product.photoUrl} alt={product.name} />
                </div>
                <div className="product-card-info">
                    <div className="product-card-name">
                        {product && product.name.length > 50 ?
                        product.name.slice(0, product.name.lastIndexOf(' ', 50)) + "..."
                        : product.name}
                    </div>
                    <div className="product-item-rating">
                        <span className="product-item-rating-val"></span>
                        <RatingStars rating={product.avgRating} />
                        <span className="product-ratings-length"></span>
                    </div>
                    <div className="product-card-price">${product.price.toFixed(2)}</div>
                </div>
            </div>
        </div>
        </NavLink>
    </div>

    );
};   
export default ProductItem;
