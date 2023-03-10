import React from 'react';
import './Address.css';
import { NavLink } from 'react-router-dom';
const Address = ()  => {

    return (
    <div className='address-container'>
        <div className="card">
            <NavLink to={'/'}>
            <img 
            className='login-logo'
            src="/assets/logo.png" alt='black-logo'
            />
        </NavLink>
            <div className='address-heading'>Welcome to Horizon </div>
            <div className="address-content">
                Thank you for using Horizon. 
                At this time, the address and orders features are not implemented.
                I plan to implement these features in the future,
                feel free to reach out with any feedback or suggestions you may have. 
            </div>
            <div className='address-links-container'>
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
    );
    }

export default Address;
