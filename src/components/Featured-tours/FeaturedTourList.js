import React from 'react'
import TourCard from '../../shared/TourCard'
import { Col } from 'reactstrap'
import tourData from '../../assets/data/tours'

const FeaturedTourList = () => {

    const data = tourData.slice(0, 4)

    return (
        <>

            {
                data?.map(tour => (
                    <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
                        <TourCard tour={tour} />
                    </Col>
                ))
            }
        </>
    )
}

export default FeaturedTourList