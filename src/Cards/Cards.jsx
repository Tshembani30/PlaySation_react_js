import React, { useState } from 'react'
import './Cards.css'

function Cards() {
  const [toggle, setToggle] = useState(false)

  const products = [
    { name: 'SONY PlayStation 4 Slim 1TB Console,1TB Hard Drive', price: 'R4,499.00', image: 'data:image/jpeg;base64,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' },
    { name: 'Original Sony PlayStation Console Price  [PS5 | PS4 ]', price: 'R40,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12FCcPpiqB52n11lbhN8r7eXUX3nP-KwPUQ&usqp=CAU' },
    { name: 'PS4 Sony PlayStation 4 console + Wireless Controller', price: 'R4,750.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0C3pFlleG479JvYX-lsae6eGdUPBsfAEwWQ&usqp=CAU' },
    { name: 'Sony PlayStation 4 PS4 1TB with 2 controllers & 1 game', price: 'R7,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2QbXtiTsoeGnfqFmOnbPf-vaR_JrwwQ7kw&usqp=CAU' },
    { name: 'Sony PS4 Slim 500GB Console+FIFA21 Game', price: 'R8,351.55', image: 'https://gmedia.playstation.com/is/image/SIEPDC/buy-ps4-product-thumbnail-01-en-18mar22?$facebook$' },
    { name: 'PlayStation PS4 in Half After Spider-Man Is Coming to PC', price: 'R6,799.00', image: 'https://sm.ign.com/t/ign_in/screenshot/default/71mcfku1-jl-sl1500_21eh.1280.jpg' },
    { name: 'Building the Portable PlayStation 4 PS4 1TB SLIMLINE with 1', price: 'R3,699.00', image: 'https://i.ytimg.com/vi/roW8GhMbBpg/maxresdefault.jpg' },
    { name: 'Doubleshock 4 PlayStation 4 Wirless 2 Controllers.', price: 'R499.00', image: 'https://media.takealot.com/covers_images/9882fd38fd7d4294964222a5f0324e10/s-pdpxl.file' },


  ]
  return (
    <div>
      <div class='grid-container'>

        {
          products.map(product => {
            return (
              <div clasNames="card">
                <img src={product.image} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <h3>{product.price}</h3>
                  <a href="#" class="btn btn-primary">View more</a>
                </div>
              </div>
            )

          })
        }
      </div>
    </div>
  )
}

export default Cards
