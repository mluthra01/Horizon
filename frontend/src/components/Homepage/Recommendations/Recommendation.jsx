import { useEffect } from "react"
import { fetchRandomProducts, receiveProducts } from "../../../store/product"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import RatingStars from "../../RatingStars/RatingStar"
import './Recommendations.css'

const Recommendations = () => {
    
    const products = useSelector(receiveProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRandomProducts())
    },[dispatch])


    return (

        <div className="recommendations-container">
        <h2 className="recommendations-heading">Recommendations for You</h2>
        <div className="recommend-cards-container">
        {products.map((product) => (
            <div className="recommend-card" key={product.id}>
            <NavLink
                style={{ textDecoration: "none" }}
                to={`/products/${product.id}`}
            >
                <div className="product-card-image">
                <img src={product.photoUrl} alt={product.name} />
                </div>
                <div className="recommend-card-info">
                <div className="recommend-card-name">
                    {product.name.length > 50
                    ? product.name.slice(0, product.name.lastIndexOf(" ", 50)) +
                        "..."
                    : product.name}
                </div>
                    <div className="recommend-item-rating">
                        <span className="recommend-item-rating-val"></span>
                        <RatingStars rating={product.avgRating} />
                        <span className="recommend-ratings-length"></span>
                    </div>
                <div className="recommend-card-price">
                    ${product.price.toFixed(2)}
                </div>
                </div>
            </NavLink>
            </div>
        ))}
        </div>
    </div>

    )
}

export default Recommendations