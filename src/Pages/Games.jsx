import React from 'react'
import Header from '../Component/Header'
import "../Pages/Games.css"

function Games() {
  <div class='sale'>Very Specailly Sale Price</div>
  const products = [
    { name: 'The Last of Us Part II',story:' -Encounter new survivor groups, unfamiliar and treacherous environments, and terrifying evolutions of the infected.Brought to life by the latest iteration.', price: 'R709.00', sale:'R270.00', image: 'https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-keyart-01-en-18may22?$1600px$' },
    { name: 'Marvels Spider-Man',story:'-In the latest adventure in the Marvel’s Spider-Man is adjusting to his new home while following in the footsteps of as a new Spider-Man.', price: 'R 1000.00',sale:'R569.00', image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-spiderman-miles-morales-image-block-en-26aug22?$1600px--t$' },
    { name: 'Legacy of Thieves Collection',story:'-Legacy of Thieves Collection. Experience Naughty Dog’s thrilling, cinematic storytelling and the iconic franchise’s largest blockbuster action set pieces.', price: 'R1,700.00',sale:'R880.00',  image: 'https://gmedia.playstation.com/is/image/SIEPDC/uncharted-legacy-of-thieves-hero-keyart-02-en-15sep21?$1600px$' },
    { name: 'Resident Evil',story:'-Fight for your life or the Move overhaul of the award-winning horror, or face your darkest fears in the Resident Evil 7 Kitchen VR experience.', price: 'R1,649.00',sale:'R749.00',  image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-resident-evil-image-block-02-en-28jul21?$1600px--t$' },
    { name: 'DISCOVER GOD OF WAR',story:'God of War (2023) and God of War Ragnarök on a new journey with the Norse world, leaving his old life behind and seeking a new life with his son Atreus.', price: 'R1,449.00',sale:'R1,109.00', image: 'https://i.ytimg.com/vi/g1wr0DfV73E/maxresdefault.jpg' },
    { name: 'Returnal',story:'-Isolated and alone, she finds herself fighting tooth and nail for survival. Again and again, she’s defeated – forced to restart her journey every time she dies.', price: 'R1,360.00',sale:'R680.00', image: 'https://gmedia.playstation.com/is/image/SIEPDC/tmop-returnal-image-block-01-en-20apr21?$1600px$' },
    { name: 'Days Gone',story:'-Hunter trying to find a reason to live in a land surrounded by death and weapons, your chances with other survivors trying to out a living.', price: 'R1,199.00',sale:'R851.29', image: 'https://gmedia.playstation.com/is/image/SIEPDC/days-gone-listing-thumb-01-ps4-us-10jan19?$1600px$' },
    { name: 'Gran Turismo™ 7 PS4',story:'-Explore all that the Real Driving Simulator can be with new tools to help you put your own mark on your driving experiences.', price: 'R1,340.75',sale:'R 1,130.00', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/2806/y4liLwBLXmhWHIvakDIMG1T1.jpg?w=780&thumb=false' },
    

  ]
  return (
    <div>
      <Header/>
      <div class='grid-container'>

        {
          products.map(product => {
            return (
              <div clasNames="Addcart">
                <img src={product.image} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <br></br>
                  <h1>{product.story}</h1>
                  <h3><del>{product.price}</del></h3>
                  <h2>{product.sale}</h2>
                  <a href="#" class="btn btn-primary"> Add to Cart</a>
                </div>
              </div>
            )

          })
        }
      </div>
    </div>
  )
}

export default Games
