import React from 'react'

import '../static/cards.css'

// importin Images
import BMWImage from '../static/image/040_bmw_x5.jpg'

function Cards() {
  return (
    <div className='Cards'>
        <img src={BMWImage} alt='card-product-image' />
        <h4>Title</h4>
        <p>This DICE for Product</p>
        <button>See more Product</button>
        <br />
        <button>add to card</button>
    </div>
  )
}

export default Cards