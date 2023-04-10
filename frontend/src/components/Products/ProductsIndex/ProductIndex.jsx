import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, receiveProducts} from "../../../store/product"
import { receiveReviews } from "../../../store/review";
import './ProductIndex.css'
import ProductItem from "./ProductItem/ProductItem";
import { useState } from "react";
const ProductIndex = () => {
    const products = useSelector(receiveProducts);
    const reviews = useSelector(receiveReviews);
    const [isLoading, setIsLoading ] = useState(true)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    if (!products) {
      return null
    }

      return (
        <div className="all-of-products-container">
      <div className="product-category-title">All Products</div>
      <ul className="all-the-products">
        {products.map(product => (
          <li className="product-cards" key={product.id}>
            <ProductItem product={product} reviews={reviews}/>
          </li>
        ))}
      </ul>
    </div>
      )
    
}

export default ProductIndex
