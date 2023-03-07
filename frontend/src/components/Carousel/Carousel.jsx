import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
      
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
      
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
          <img src="https://horizon-seeds.s3.us-west-1.amazonaws.com/carousel/alexa.jpg" alt="Carousel 1" />
        </div>
        <div>
          <img src="https://horizon-seeds.s3.us-west-1.amazonaws.com/carousel/lacome.jpg" alt="Carousel 2" />
        </div>
        <div>
          <img src="https://horizon-seeds.s3.us-west-1.amazonaws.com/carousel/primevideo.jpg" alt="Carousel 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
