import React from "react";
import Header from "../Component/Header";
// import Carousel from 'react-bootstrap/Carousel';
import "../Pages/Services.css";

const Services = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Unlock Apple TV+ special offers on your PlayStation® console</h1>
      </div>
      <p>
        Your PS5™ and PS4™ consoles just got even more fun. Explore Apple
        Originals on your favourite gaming consoles.
      </p>

      <section id="services" class="services section-bg">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box iconbox-blue">
                <div class="icon">
                  <h4>
                    <a href="">wireless adaptor headset</a>
                  </h4>
                  <img
                    src="https://www.takealot.com/soul-tech-wireless-bluetooth-cat-ear-headphones-black/PLID73672469"
                    alt=""
                  />
                  <i class="bx bxl-dribbble"></i>
                </div>

                <p>
                  Bluetooth headphone adapters are an easy solution to
                  wirelessly connect your wired headphones or earbuds to your
                  device that lacks a headphone jack.
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="icon-box iconbox-orange ">
              <div class="icon">
                <h4>
                  <a href="">4K entertainment with your 4K TV</a>
                </h4>
                <img
                  src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-horizontal-image-block-01-en-09nov20?$1600px--t$"
                  alt=""
                />
                <i class="bx bx-file"></i>
              </div>

              <p>
                Stream 4K entertainment from your favourite supported apps on
                PS5 with your 4K TV.
              </p>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="icon-box iconbox-pink">
              <div class="icon">
                <h4>
                  <a href=""> Grand Theft Auto</a>
                </h4>
                <img
                  src="https://www.keengamer.com/wp-content/uploads/2019/09/unnamed-file-780x439.jpeg"
                  alt=""
                />
                <i class="bx bx-tachometer"></i>
              </div>

              <p>
                A Grand Theft Auto game lives & dies on its mission structure.
                Each GTA features tons of missions that further the story,
                expand the world & reveal new opportunities
              </p>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="icon-box iconbox-yellow">
              <div class="icon">
                <h4>
                  <a href="">Media remote</a>
                </h4>
                <img
                  src="https://gmedia.playstation.com/is/image/SIEPDC/media-remote-image-block-ps5-02-en-16sep20?$1600px--t$"
                  alt=""
                />
                <i class="bx bx-layer"></i>
              </div>

              <p>
                Conveniently control movies, streaming services5 and more on
                your PS5 console with an intuitive layout.
              </p>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="icon-box iconbox-red">
              <div class="icon">
                <h4>
                  <a href="">Browse. Stream. Rent. Buy.</a>
                </h4>
                <img
                  src="https://gmedia.playstation.com/is/image/SIEPDC/ps4-entertainment-image-block-01-ps4-12jul22$en-gb?$1600px--t$"
                  alt=""
                />
                <i class="bx bx-slideshow"></i>
              </div>

              <p>
                Get fully immersed in amazing virtual reality experiences with
                PlayStation VR.
              </p>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="icon-box iconbox-red">
              <div class="icon">
                <h4>
                  <a href="">Browse. Stream. Rent. Buy.</a>
                </h4>
                <img
                  src="https://gmedia.playstation.com/is/image/SIEPDC/ps4-entertainment-image-block-01-ps4-12jul22$en-gb?$1600px--t$"
                  alt=""
                />
                <i class="bx bx-slideshow"></i>
              </div>

              <p>
                Get fully immersed in amazing virtual reality experiences with
                PlayStation VR.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      <div>
        <br />
        <br />
        <br />
        <h1>How To Redeem Your Offer</h1>
        <li>
          01 Find the Apple TV app from your PS4 console’s TV and Video section.
        </li>
        <li>
          02 Download and open the Apple TV app, and follow the on-screen
          instructions.
        </li>
        <li>
          03 Sign in with your Apple ID, or create an Apple ID if you don’t
          already have one.
        </li>
        <li>04 Enjoy your extended trial of Apple TV+.</li>
      </div>
    </div>
  );
};

export default Services;
