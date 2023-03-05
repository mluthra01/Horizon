
import './Homepage.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { recieveProductsByCategory } from '../../store/category';
import { useEffect } from 'react';
import { fetchProductsByCategory } from '../../store/category';
import { useDispatch } from 'react-redux';




// here i will make 4 cards for each of the catrgory and the 
// and the best sellers(hot items) can go underneath

const Homepage = () => {

const products = useSelector(recieveProductsByCategory());
const dispatch = useDispatch();

    let prodId;
    products.map(product => {
        prodId = product.categoryId
    });

    useEffect(() => {
            // products.map(product => {
        dispatch(fetchProductsByCategory(prodId))
    },[dispatch, prodId])
// })

return (
        <div className='homepage-container'>

            <NavLink to='/category/1'>
            <div className='grid-container'>Electronics

            </div>
            </NavLink>

            <NavLink to='/category/2'>
                <div className='grid-container'>Home and Kitchen</div>
            </NavLink>

            <NavLink to='/category/3'>
                <div className='grid-container'>Sports and Outdoors</div>
            </NavLink>

            <NavLink to='/category/4'>
                <div className='grid-container'>Clothing and Accessories</div>
            </NavLink>


        </div>
    )
}

export default Homepage
