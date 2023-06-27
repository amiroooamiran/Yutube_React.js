import React from 'react'

import '../static/cards.css'
function Cards() {
  return (
    <div className='Cards'>
        <img src='https://th.bing.com/th/id/R.073a6d506a3372ccf8c3f68f1ed2f8d0?rik=dBOCabMfw5VW4w&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f4108468%2fimages%2fo-TEST-facebook.jpg&ehk=itAF5kp0oC3cFGJlwHjcX3B4VHpsq0DX99e%2bLSuUksg%3d&risl=&pid=ImgRaw&r=0' alt='card-product-image' />
        <h4>Title</h4>
        <p>This DICE for Product</p>
        <button>See more Product</button>
        <br />
        <button>add to card</button>
    </div>
  )
}

export default Cards