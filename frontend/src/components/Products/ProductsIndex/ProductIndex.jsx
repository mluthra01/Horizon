import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, receiveProducts } from "../../../store/product"
import './ProductIndex.css'
import { Link } from "react-router-dom";
const ProductIndex = () => {

    const products = useSelector(receiveProducts);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchProducts())
    },[dispatch])

    if (!products) {
      return null
    }
    
    return (
        <div className="all-products-container">
            <h2 className="product-category-title">All Products</h2>
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
                <div className="product-card-price">${product.price.toFixed(2)}</div>
              {/* <button className="product-card-button">Add to Cart</button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  
    )

}

export default ProductIndex
