import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, receiveProducts } from "../../../store/product"
import { getProducts } from "../../../store/product"
import './ProductIndex.css'
import { Link } from "react-router-dom";
const ProductIndex = () => {

    const products = useSelector(receiveProducts);
    const dispatch = useDispatch();
    
    useEffect(() => {
      // debugger
      dispatch(fetchProducts())
    },[dispatch])

    if (!products) {
      return null
    }
    
    return (
        // <div className="all-products-container">
        //     <ul className="all-products">
        // {products.map(product => <li key={product}>{product.name}</li>)}
        //     </ul>
        // </div>
    //   <div>
    //         {products.map((product) => (
    //             <div key={product.id}>
    //                 <h3>{product.name}</h3>
    //                 <p>{product.description}</p>
    //                 <p>{product.price}</p>
    //             </div>
    //         ))}
    //     </div>

        
    
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
              <button className="product-card__button">Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  
    )

}

export default ProductIndex
