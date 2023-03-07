
import './Homepage.css'
import { NavLink } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
const Homepage = () => {
return (
        <div className='homepage-container'>
            <div className='carousel'>
                <Carousel  />
            </div>
            <div className='card-container'>
                <div className='grid-box'>
                    <NavLink to={'/category/1'}><div className='card-label'>Electronics</div></NavLink>
                    <div className='card-image-container'>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/2'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/macbook.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Apple Macbook pro</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/6'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/philips.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Philips-Play</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/5'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/bose.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Boss headphones</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/7'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/playstation.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Sony Playstation 5</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-container'>
                <div className='grid-box'>
                    <NavLink to={'/category/2'}><div className='card-label'>Best Sellers</div></NavLink>
                    <div className='card-image-container'>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/4'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/iphone13.webp'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>iphone 13</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/24'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/sports+and+outdoor/kids+bow.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Bow and Arrow Set </div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/17'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/beauty/maybellene.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Maybelline Mascara</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/9'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/instant+pot.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Instant Pot</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-container'>
                <div className='grid-box'>
                    <NavLink to={'/category/3'}><div className='card-label'>Horizon Basics</div></NavLink>
                    <div className='card-image-container'>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/15'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/beauty/amazon-basics-mirror.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Vanity Mirror </div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/8'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/glass+locking+lids.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Food Storage</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/21'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/sports+and+outdoor/dumbell.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Dumbells</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/1'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/horizon+basics+ausb+ethermet.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Type-C Docking</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-container'>
                <div className='grid-box'>
                    <NavLink to={'/category/3'}><div className='card-label'>Home and kitchen</div></NavLink>
                    <div className='card-image-container'>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/12'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/ninja.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Ninja Air Frier</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/14'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/robot+vacuum.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>iRobot</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/category/1'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/ninja.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Boss headphones</div>
                            </NavLink>
                        </div>
                        <div className='grid-box-image'>
                            <NavLink to={'/products/11'}>
                                <img 
                                    className='grid-img'
                                    src={'https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/dutch+oven.jpg'}
                                    alt='product-name'
                                    ></img>
                            <div className='grid-image-label'>Dutch Oven</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Homepage
