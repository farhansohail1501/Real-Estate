import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
//import 'swiper/swiper-bundle.min.css';
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { color } from 'framer-motion'
import { sliderSettings } from '../../utils/common'
import PropertyCard from '../PropertyCard/PropertyCard'
const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='greyText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />

                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                               <PropertyCard card={card}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-button">
            <button onClick={() => swiper.slidePrev()}>
                &lt;
            </button>
            <button onClick={() => swiper.slideNext()}>
                &gt;
            </button>
        </div>
    )
}