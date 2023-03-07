import './ProductItem.css'
import { Link } from 'react-router-dom'
const ProductItem = ({product}) => {

    const {id, name, price } = product
    
    return (
        <div className="all-products-container">
            <ul className="all-products">
                {/* {products.map(product => ( */}
                <li className="product-card" key={product.id}>
                    <div className="product-card-image">
                        <img src={product.photoUrl} alt={product.name} />
                    </div>
                    <div className="product-card-info">
                    <Link to={`/products/${product.id}`} >
            <h3 className="product-card-name">
                {product.name.length > 50 ?
            product.name.slice(0, product.name.lastIndexOf(' ', 50)) + "..."
                : product.name
                }
                </h3>
            </Link>
                <div className="product-card-price">${product.price.toFixed(2)}</div>
              {/* <button className="product-card-button">Add to Cart</button> */}
            </div>
        </li>
        {/* ))} */}
    </ul>
    </div>

    )
}   

export default ProductItem
