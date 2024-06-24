import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import './tour-card-culture.css'

const TourCardCulture = ({ tour }) => {
    const { sub_photo, sub_title, sub_state } = tour

    return (
        <div className='tour__card'>
            <Card>
                <div className='tour__img'>
                    <img src={sub_photo} alt='tour-img' />

                </div>

                <CardBody>
                    <div className='card__top'>
                        <span className='tour__location d-flex align-items-center gap-1'>
                            <i class="ri-map-pin-line"></i> {sub_state}
                        </span>
                    </div>

                    <h5 className='tour__title'><Link to={`/`}>{sub_title}</Link></h5>

                    {/* <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                        <h5>$ {price} <span> /per person</span></h5>
                        <button className='btn booking__btn'>
                            <Link to={`/culture/${id}`}>Book Now</Link>
                        </button>
                    </div> */}
                </CardBody>
            </Card>


        </div>
    )
}

export default TourCardCulture

// currently not using
