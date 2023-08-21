import React from 'react'
//import img2 from './img2.png'
//mport img3 from './img3.png'

// import img1 from './img1.png'
import Slider1 from './slider1'
import Slider2 from './slider2'
import Slider3 from './slider3'
export default function slider() {
  return (
    <>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <Slider1/>
    </div>
    <div className="carousel-item">
      <Slider2/>
    </div>
    <div className="carousel-item">
    <Slider3/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

