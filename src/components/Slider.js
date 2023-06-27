import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'

const images = [
  { url: "https://wallpapercave.com/wp/wp2599594.jpg" },
  { url: "https://i.pinimg.com/originals/bc/f8/6d/bcf86da45229b593da4967a30315168c.jpg" }
]
function Slider() {
  return (
    <div className='Slider_main'>
      <div className='Slider' >
        <SimpleImageSlider
          width={890}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  )
}

export default Slider