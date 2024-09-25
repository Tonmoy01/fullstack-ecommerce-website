import React from 'react';
import Slider from 'react-slick';

import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import slider4 from '../../assets/slider4.jpg';

const HomeBanner = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className='home-banner-section'>
      <Slider {...settings}>
        <div className='item'>
          <img src={slider1} alt='' className='' />
        </div>
        <div className='item'>
          <img src={slider2} alt='' className='' />
        </div>
        <div className='item'>
          <img src={slider3} alt='' className='' />
        </div>
        <div className='item'>
          <img src={slider4} alt='' className='' />
        </div>
      </Slider>
    </div>
  );
};
export default HomeBanner;
