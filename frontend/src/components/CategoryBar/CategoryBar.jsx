
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
            <a rel="noreferrer" target="_blank" className='links' href="https://www.linkedin.com/in/madhur-luthra-08a53a126/">LinkedIn</a>
            <a rel="noreferrer" target="_blank" className='links' href="https://github.com/mluthra01">GitHub</a>
            <a rel="noreferrer" target="_blank" className='links' href="https://github.com/mluthra01/Horizon">Project repo</a>


            </div>
        </div>
    );
};

export default CategoryBar;