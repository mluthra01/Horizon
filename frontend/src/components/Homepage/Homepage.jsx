
import './Homepage.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { receiveProducts } from '../../store/product';



// here i will make 4 cards for each of the catrgory and the 
// and the best sellers(hot items) can go underneath
const Homepage = () => {

    const products = useSelector(receiveProducts)

    return (
        <div className='wrapper '>
            <div className='content'>
                <div className='heading'>
                    <NavLink to='/electronics' className='card-links'>
                        Electronics
                    </NavLink>
                </div>
                {Object.values(products).slice(0, 2).map((product, i) => <NavLink to={`/products/${product.id}`} className='tile' key={i}>
                            <img className='card-img' alt='' src='assets/logo.png' />
                            <div className='card-title'>title</div>
                        </NavLink>)}
            </div>
        </div>
    )
}
export default Homepage
