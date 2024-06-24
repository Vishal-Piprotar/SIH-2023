import React from 'react'
import Slider from 'react-slick'
import './category.css'
import catData from '../assets/data/traditionCat'

const Category = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
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
            {
                catData?.map((item, index) => (
                    <div className='category py-4 px-3 text-center' key={index}>
                        <img src={item.photo} alt='' />
                        <h1>{item.title}</h1>
                    </div>
                ))
            }
        </Slider>
    )
}

export default Category