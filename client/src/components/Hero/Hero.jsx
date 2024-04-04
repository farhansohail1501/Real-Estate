import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/*left side*/}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="circle" />
              <h1>Find <br />Your Dream<br /> Property</h1>
            </div>
            <div className="flexColStart hero-des">
              <span>Embark on a journey to your dream property with us.</span>
              <span>Discover tailored options that match your vision and aspirations.</span>
            </div>

            <div className="flexCenter search-bar">
              <HiLocationMarker color="blue" size={30} />
              <input type="text" placeholder=" " />
              <button className='button'>Search</button>
            </div>
          </div>

          {/*right side*/}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="./hero-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
