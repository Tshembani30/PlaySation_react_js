import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Slider.css'

function Slider() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="slid"
            src="https://images.immediate.co.uk/production/volatile/sites/4/2022/09/PS5-Accessories-f513938.jpg?quality=90&webp=true&resize=1200,510"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Get the free PlayStation App from the iOS App Store.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slid"
            src="http://t1.gstatic.com/images?q=tbn:ANd9GcR838aIiZRHyhNgC2ro0ehkGSDI7EzgofEPfJDJdms3deLhYV6r"
            alt="Second slide "
          />
          <Carousel.Caption>
            <h1>LGet the free PlayStation App from the iOS App Store.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </>

  );
}

export default Slider;