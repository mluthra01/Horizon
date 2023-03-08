import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, receiveProducts} from "../../../store/product"
import './ProductIndex.css'
import ProductItem from "./ProductItem/ProductItem";
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
        <div className="all-of-products-container">
      <div className="product-category-title">All Products</div>
      <ul className="all-the-products">
        {products.map(product => (
          <li className="product-cards" key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
      )
    
}

export default ProductIndex
