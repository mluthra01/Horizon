import { NavLink } from "react-router-dom"

const Checkout = ({numItems}) => {
    
    return (
        <div className="checkout-page-container">
            <div className="checkout-page-header">  
                <NavLink to="/" className='header-logo'><img src="/assets/logo.png" alt="black-logo" /></NavLink>
                <div className="checkout-header-heading">Checkout 
    
                </div>
            </div>
        </div>

    )

}

export default Checkout

