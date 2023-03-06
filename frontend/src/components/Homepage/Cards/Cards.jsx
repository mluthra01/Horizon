import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchProducts } from '../../../store/product'
import './Cards.css'

const Cards = ({products}) => {

    const categories = useSelector(state => state.categories)
    // const productIds = Object.values(products);
    // const dispatch = useDispatch;

//     const ProductList = ({ products }) => {
//   const productList = Array.isArray(products) ? products : [];
//  if (!Array.isArray(products)) {
//     return <p>Products are not available</p>;
//  }

//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           <h2>{product.name}</h2>
//           {/* <p>{product.description}</p> */}
//           <p>{product.price}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };


    return (
        <div className='container'>
            <div className='category-content'>
                <div className='category-name'><NavLink to='/category/1' className="heading-link"></NavLink></div>
                <div className='card-product-image'>
                    <img />
                    <div className='title'>title</div>
                </div>

            </div>

        </div>
  )
 }

export default Cards