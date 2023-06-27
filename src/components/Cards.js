import React from 'react'

import '../static/cards.css'

const CarCards = (props) =>{
    const { image, title, desc} = props.cars;
    return (
        <div className='Cards'>
            <img src={image} alt='card-product-image' />
            <h4>{ title }</h4>
            <p>{ desc }</p>
            <button>See more Product <i class="uil uil-eye"></i></button>
            <br />
            <button>add to card <i class="uil uil-shop"></i> </button>
        </div>
      )
}

export default CarCards