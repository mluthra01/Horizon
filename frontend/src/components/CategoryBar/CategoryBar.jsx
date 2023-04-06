
import './CategoryBar.css'
import { NavLink } from 'react-router-dom'

const CategoryBar = () => {


    return (
        <div className="category-bar-container">
            <div className="category-links">
            <NavLink className='links' to='/products'>All Products</NavLink>
            <NavLink className='links' to='/category/1'>Electronics</NavLink>
            <NavLink className='links' to='/category/2'>Home and Kitchen</NavLink>
            <NavLink className='links' to='/category/3'>Beauty</NavLink>
            <NavLink className='links' to='/category/4'>Sports and Outdoors</NavLink>
            <NavLink className='links' to='/category/4'>Best Sellers</NavLink>

            </div>
        </div>
    );
};

export default CategoryBar;