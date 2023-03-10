import { NavLink } from "react-router-dom"
import './Checkout.css'
const Checkout = () => {
    
    return (
        <div className="checkout-page-container">
            <div className="checkout-confirm-container">
                <div className="checkout-page-header">  
                    <NavLink to="/" className='checkout-logo'><img src="/assets/logo.png" alt="black-logo" /></NavLink>
                </div>
                <div className="checkout-label-container">
                    <div className="order-placed">
                        <img 
                            className="tick-logo"
                            src="./assets/checkout.png"
                            alt="confirmed"
                        />
                        <div className="order-placed-thanks">Order placed, thanks!</div>
                    </div>
                </div>
                <div className='checkout-links-container'>
                <div className="address-links">
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/madhur-luthra-08a53a126/">
                        <img 
                        src='/assets/linkedin.png'
                        alt='linkedin'
                    />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/mluthra01">
                        <img 
                        src='/assets/github-logo.png'
                        alt='github'
                        />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/mluthra01/Horizon" className='repo'>Project repo</a>
                </div>
            </div>
            </div>
        </div>

    )

}

export default Checkout

