import React from 'react'
import Slider from 'react-slick'
import fort from '../assets/images/fort2.jpeg'
import { Link } from 'react-router-dom'
import './quotes.css'

const Quotes = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                }
            }
        ]
    }
    return (
        <Slider {...settings}>
            <div className='quote'>
                <h1>Walking up in <span className='highlight'>India</span> is like walking up to life itself.</h1>
                <span className='author'>- Mark Twain</span>
            </div>

            <div className='quote'>
                <h1>India lives in <span className='highlight'>several centuries</span> at the same time.</h1>
                <span className='author'>- Arundhati Roy</span>
            </div>

            <div className='quote'>
                <h1>India is land of <span className='highlight'>sprituality</span> and vibrant <span className='highlight'>festivals</span>.</h1>
                <span className='author'>- Steve Jobs</span>
            </div>
        </Slider>
    )
}

export default Quotes
