import React from 'react'
import { Link } from 'react-router-dom'
import './tour-card.css'
// import calculateAvgRating from '../utils/avgRating'
// import { BASE_URL } from './../utils/config'

const TourCard = ({ tour }) => {
    const { id, title, photo, avgRating } = tour

    // const { totalRating, avgRating } = calculateAvgRating(reviews)

    return (
        <div className='tour__card'>
            {/* <Card>
                <div className='tour__img'>
                    <img src={photo} alt='tour-img' />
                    {featured && <span>Featured</span>}
                </div>

                <CardBody>
                    <div className='card__top d-flex align-items-center justify-content-between'>
                        <span className='tour__location d-flex align-items-center gap-1'>
                            <i class="ri-map-pin-line"></i> {state}
                        </span>

                        <span className='tour__rating d-flex align-items-center gap-1'>
                            
                            <i class="ri-star-fill"></i> {avgRating} <span>0</span>
                        </span>
                    </div>

                    <h5 className='tour__title'><Link to={`/heritage/${id}`}>{title}</Link></h5>

                    <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                        <h5></h5>
                        <button className='btn booking__btn'>
                            <Link to={`/heritage/${id}`}>Explore</Link>
                        </button>
                    </div>
                </CardBody>
            </Card> */}


            <div className='card__container'>
                <div className='card d-flex align-items-center justify-content-center'>
                    <div className='imgBx'>
                        <img src={photo} alt='' />
                    </div>
                    <div className='content '>

                        {/* <h2>{title}</h2> */}

                        <div className='card__top text-center d-flex align-items-center justify-content-between'>
                            <span className='tour__location d-flex align-items-center gap-1'>
                                <i class="ri-map-pin-line"></i> {title}
                            </span>

                            <span className='tour__rating d-flex align-items-center gap-1'>

                                <i class="ri-star-fill"></i> {avgRating} <span>4</span>
                            </span>
                        </div>

                        <Link to={`/heritage/${id}`}>Explore</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TourCard
