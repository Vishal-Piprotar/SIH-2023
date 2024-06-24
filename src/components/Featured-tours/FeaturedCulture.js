import React from 'react'
import { Col } from 'reactstrap'
import tourData from '../../assets/data/culture'
import CategoryCard from '../../shared/CategoryCard'

const FeaturedCulture = () => {

    return (
        <>
            {
                tourData?.map(tour => (
                    <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
                        <CategoryCard tour={tour} />
                    </Col>
                ))
            }
        </>
    )
}

export default FeaturedCulture