import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">


                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="circle" />
                        <motion.h1 initial={{y: "2rem", opacity:0}}
                        animate={{y: 0, opacity:1}}
                        transition={{
                            duration: 4,
                            type:"spring"
                        }}>
                            Navigating<br /> To Your Dream <br /> Property
                        </motion.h1>

                    </div>
                    <div className=" flexColStart hero-des">
                        <span className='secondaryText'>Embark on a journey to your dream property with us.</span>
                        <span className='secondaryText'> Discover tailored options that match your vision and aspirations.</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type='text' />
                        <button className='button'> Search </button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Premium Products
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Happy Customers
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Award Winning
                            </span>
                        </div>
                    </div>
                </div>



                <div className="flexCenter hero-right">
                    <motion.div
                    initial={{x: "7rem", opacity: 0}}
                    animate={{x: 0, opacity: 1}} 
                    transition={{
                        duration: 4,
                        type: "spring"
                    }}
                    className="image-container">
                        <img src='./hero-image.jpg' alt=''></img>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default Hero