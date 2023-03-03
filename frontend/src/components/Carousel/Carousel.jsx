import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const Carousel = ({images}) => {
    return (
    <Slider {...carouselSettings}>
        {images.map((image) => (
        <div key={image.id}>
            <img src={image.src} alt={image.alt} />
        </div>
        ))}
    </Slider>
    );
}

export default Carousel