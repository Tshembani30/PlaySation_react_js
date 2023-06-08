import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="slid"
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <p>The Best Games Out There</p>
            <h1>Get the free PlayStation App from the iOS App Store.</h1> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slid"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide "
          />
          <Carousel.Caption>
            {/* <p>The Best Games Out There</p>
            <h1>LGet the free PlayStation App from the iOS App Store.</h1> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slid"
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
            alt="Second slide "
          />
          <Carousel.Caption>
            {/* <p>The Best Games Out There</p>
            <h1>LGet the free PlayStation App from the iOS App Store.</h1> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slid"
            src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="Second slide "
          />
          <Carousel.Caption>
            {/* <p>The Best Games Out There</p>
            <h1>LGet the free PlayStation App from the iOS App Store.</h1> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
