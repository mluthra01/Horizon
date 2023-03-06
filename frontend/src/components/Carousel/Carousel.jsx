import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/id/10/800/600" alt="Carousel 1" />
        </div>
        <div>
          <img src="https://picsum.photos/id/20/800/600" alt="Carousel 2" />
        </div>
        <div>
          <img src="https://picsum.photos/id/30/800/600" alt="Carousel 3" />
        </div>
        <div>
          <img src="https://picsum.photos/id/40/800/600" alt="Carousel 4" />
        </div>
        <div>
          <img src="https://picsum.photos/id/50/800/600" alt="Carousel 5" />
        </div>
        <div>
          <img src="https://picsum.photos/id/60/800/600" alt="Carousel 6" />
        </div>
        <div>
          <img src="https://picsum.photos/id/70/800/600" alt="Carousel 7" />
        </div>
        <div>
          <img src="https://picsum.photos/id/80/800/600" alt="Carousel 8" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
