
import './Homepage.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { receiveProducts } from '../../store/product';



// here i will make 4 cards for each of the catrgory and the 
// and the best sellers(hot items) can go underneath

const Homepage = () => {

const products = useSelector(receiveProducts)

    products.map(product => {
        console.log(product.id)
    });

return (
        <div className='hompafe-container'>
            
            <NavLink to='/category/1'>
            <div className='grid-container'>Electronics</div>
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
