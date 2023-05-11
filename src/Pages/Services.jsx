import React from 'react'
import Header from '../Component/Header'
import Carousel from 'react-bootstrap/Carousel';
import '../Pages/Services.css'

const Services = () => {
  return (
    <div>
      <Header />

      <div>
        <h1>Unlock Apple TV+ special offers on your PlayStation® console</h1>
      </div>
      <p>Your PS5™ and PS4™ consoles just got even more fun. Explore Apple Originals on your favourite gaming consoles.</p>
      <br>

      </br>
      <h1>The img element</h1>
      <img src="https://gmedia.playstation.com/is/image/SIEPDC/apple-tv-image-block-01-ps4-slim-en-07feb22?$1600px$" alt="" width="850" height="500" />
      <br />
      <h1>God of War</h1>
      <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-screenshot-clean-06-en-07sept21?$1600px$" alt="" width="850" height="500" />
      <br />
      <br />
      <h1>PS5 /PS4 Controllers</h1>
      <img src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-red-black-camo-grey-image-block-01-en-01sep22?$1600px$" alt="" width="850" height="500" />
      <br />
      <br />
      <h1>Wireless adaptor usb</h1>
      <img src="https://gmedia.playstation.com/is/image/SIEPDC/wireless-adaptor-image-block-01-en-02jul20?$1600px$" alt="" width="850" height="500" />
      <br />
      <br />
      <h1>Wireless Headset</h1>
      <div className='Funny'>
      
      Enjoy up to 12 hours of wireless play 
      <br></br>
      thanks to the built-in rechargeable battery.
      <br></br>
      Connect to PS5 and PS4™ consoles as well as
      <br></br> compatible Windows and macOS® 
      computers using the included adaptor.
    
      </div>
      <div className='Headset'>
      <img src="https://gmedia.playstation.com/is/image/SIEPDC/3d-pulse-wireless-headset-image-block-01-en-17jul20?$1600px$" alt="" width="850" height="500" />
      </div>
      <br />
      <br />
      <br />
      <h1>How To Redeem Your Offer</h1>
      <li>
        01 Find the Apple TV app from your PS4 console’s TV and Video section.
      </li>
      <li>
        02 Download and open the Apple TV app, and follow the on-screen instructions.
      </li>
      <li>
        03 Sign in with your Apple ID, or create an Apple ID if you don’t already have one.
      </li>
      <li>
        04 Enjoy your extended trial of Apple TV+.
      </li>
    </div>

  )
}

export default Services