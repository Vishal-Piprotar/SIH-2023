import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/heritage.css'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'
import { Container, Row, Col } from 'reactstrap'
import tourData from '../assets/data/tours'

const Heritage = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = tourData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(tourData.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)


    useEffect(()=>{
        window.scrollTo(0,0);
    },[])


    return (
        <>
            <CommonSection title={"Rich Heritage Of India"} />

            <section>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Container>

                    {
                        <Row>
                            {
                                records?.map(tour => (<Col lg='3' md='6' sm='6' key={tour._id} className='mb-4'> <TourCard tour={tour} /> </Col>))
                            }

                            <Col lg='12'>
                                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>

                                    {
                                        numbers.map((n, i) => (
                                            <span key={i} onClick={() => setCurrentPage(n)} className={`${currentPage === n ? 'active__page' : ''}`}>
                                                {n}
                                            </span>
                                        ))
                                    }
                                </div>
                            </Col>
                        </Row>
                    }
                </Container>
            </section>

            <Newsletter />
        </>
    )
}

export default Heritage

