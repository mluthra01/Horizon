
import './CategoryBar.css'
import { NavLink } from 'react-router-dom'

const CategoryBar = () => {


    return (
        <div className="category-bar-container">
            <div className="category-links">
            <NavLink className='links' to='/'>All Products</NavLink>
            <NavLink className='links' to='/'>Category 1</NavLink>
            <NavLink className='links' to='/'>Category 2</NavLink>
            <NavLink className='links' to='/'>Category 3</NavLink>
            <NavLink className='links' to='/'>Category 4</NavLink>
            <NavLink className='links' to='/'>Category 5</NavLink>
            <a rel="noreferrer" target="_blank" className='links' href="https://www.linkedin.com/in/madhur-luthra-08a53a126/">LinkedIn</a>
            <a rel="noreferrer" target="_blank" className='links' href="https://github.com/mluthra01">GitHub</a>
            <a rel="noreferrer" target="_blank" className='links' href="https://github.com/mluthra01/Horizon">Project repo</a>


            </div>
        </div>

    

    )
}

export default CategoryBar