import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup';
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/*left side*/}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <h1>Find <br />Your Dream<br /> Property</h1>
            </div>
            <div className="flexColStart hero-des">
              <span className='secondaryText'>Embark on a journey to your dream property with us.</span>
              <span className='secondaryText'>Discover tailored options that match your vision and aspirations.</span>
            </div>

            <div className="flexCenter search-bar">
              <HiLocationMarker color="blue" size={30} />
              <input type="text" placeholder=" " />
              <button className='button'>Search</button>
            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={7800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>Premium Products</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={2000} end={2500} duration={4} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>Happy Custumors</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp end={48} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>Award Winning</span>
              </div>
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
