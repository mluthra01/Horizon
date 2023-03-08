import './ProductItem.css'
import { NavLink } from 'react-router-dom'
const ProductItem = ({product}) => {

    if (!product) return null;
    const {id, name, price } = product
    
    return (
        <div className="all-products-container">
                    <NavLink style={{textDecoration: "none"}} to={`/products/${product.id}`} >
            <ul className="all-products">
                <li className="product-card" key={product.id}>
                    <div className="product-card-image">
                        <img src={product.photoUrl} alt={product.name} />
                    </div>
                    <div className="product-card-info">
            <h3 className="product-card-name">
                {product && product.name.length > 50 ?
            product.name.slice(0, product.name.lastIndexOf(' ', 50)) + "..."
                : product.name
                }
                </h3>
                <div className="product-card-price">${product.price.toFixed(2)}</div>
            </div>
        </li>
    </ul>
            </NavLink>
    </div>

    )
}   

export default ProductItem
