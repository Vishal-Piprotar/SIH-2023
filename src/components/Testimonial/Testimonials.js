import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimoials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                }
            }
        ]
    }
    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>"Swarnim Bharat embodies the golden spirit of our nation, where ancient wisdom and modern aspirations intertwine to create a tapestry of unparalleled beauty."</p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    {/* <img src={ava01} alt='' className='w-25 h-25 rounded-2' /> */}
                    <div>
                        <h6 className='mb-0 mt-3'>Jay Charola</h6>
                        <p>Visitor</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>"In the heart of Swarnim Bharat, I found the essence of our timeless traditions, breathing life into every street corner and festival celebration."</p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    {/* <img src={ava02} alt='' className='w-25 h-25 rounded-2' /> */}
                    <div>
                        <h6 className='mb-0 mt-3'>Shreya Kumar</h6>
                        <p>Visitor</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>"To experience Swarnim Bharat is to walk through millennia of history, where every step resonates with the echoes of our rich cultural heritage."
                </p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    {/* <img src={ava03} alt='' className='w-25 h-25 rounded-2' /> */}
                    <div>
                        <h6 className='mb-0 mt-3'>Disha Kavar</h6>
                        <p>Visitor</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>"The vibrant colors, melodious music, and aromatic cuisines of Swarnim Bharat are a testament to the diversity and unity that define our great nation."</p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    {/* <img src={ava01} alt='' className='w-25 h-25 rounded-2' /> */}
                    <div>
                        <h6 className='mb-0 mt-3'>Dev Patel</h6>
                        <p>Visitor</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>"Swarnim Bharat is not just a concept; it's a living, breathing entity that honors our past while embracing the promise of a golden future."</p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    {/* <img src={ava02} alt='' className='w-25 h-25 rounded-2' /> */}
                    <div>
                        <h6 className='mb-0 mt-3'>Raj Pavara</h6>
                        <p>Visitor</p>
                    </div>
                </div>
            </div>

            
        </Slider>
    )
}

export default Testimoials
