import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hr.jpg'
import heroImg02 from '../assets/images/hero2.jpg'
import heroVideo from '../assets/images/hero.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import Category from '../categories/Category'
// import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
// import FeaturedCulture from '../components/Featured-tours/FeaturedCulture'
import taj from '../assets/images/04.jpg'
import MasonryImageGallery from '../components/Image-gallery/MasonryImageGallery'
import Testimoials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'
import Quotes from '../qoutes/Quotes'


const Home = () => {
    return (
        <>
            {/* ================== hero section start =================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className='hero__content'>
                                <div className='hero__subtitle d-flex align-items-center'>
                                    <Subtitle subtitle={'Know Before You Go'} />
                                    <img src={worldImg} alt='' />
                                </div>

                                <Quotes />


                                <p> India's heritage and traditions are a rich tapestry of ancient wisdom, diverse cultural practices, and artistic brilliance.India has given birth to a wealth of art forms, including classical music, dance, and architecture. The country's traditions are equally diverse, with each region celebrating its unique festivals and rituals. This heritage continues to shape the nation's identity and leaves an indelible mark on the world.</p>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className='hero__img-box'>
                                <img src={heroImg} alt='' />
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className='hero__img-box hero__video-box mt-4'>
                                <video autoPlay loop controls src={heroVideo} alt='video'  />
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className='hero__img-box mt-5'>
                                <img src={heroImg02} alt='' />
                            </div>
                        </Col>

                        <SearchBar />
                    </Row>
                </Container>
            </section>
            {/* ================== hero section end =================== */}

            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className='services__subtitle'>What we serve</h5>
                            <h2 className='services__title'>We describes our culture as</h2>
                        </Col>
                        <Category />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={'Explore'} />

                            <h2 className='featured__tour-title'>Heritage places</h2>
                        </Col>

                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>

            {/* <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={'Explore'} />

                            <h2 className='featured__tour-title'>Traditions and culture</h2>
                        </Col>

                        <FeaturedCulture />
                    </Row>
                </Container>
            </section> */}

            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className='experience__content'>
                                <Subtitle subtitle={'Display'} />

                                <h2>Proud to showcase</h2>

                                <p>India's rich Heritage, Culture & Traditions.</p>

                            </div>

                            <div className='counter__wrapper d-flex align-items-center gap-5 flex-wrap'>
                                <div className='counter__box'>
                                    <span>40</span>
                                    <h6>India's Heritage Sites</h6>
                                </div>

                                <div className='counter__box'>
                                    <span>1k+</span>
                                    <h6>Festivals</h6>
                                </div>

                                <div className='counter__box'>
                                    <span>780+</span>
                                    <h6>Regional Languages</h6>
                                </div>
                                {/* 

                                <div className='counter__box'>
                                    <span>9</span>
                                    <h6>Indian Folk Dances</h6>
                                </div> */}
                            </div>
                        </Col>

                        <Col lg='6'>
                            <div className='experience__img'>
                                <img src={taj} alt='' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='none'>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={"Gallery"} />
                            <h2 className='gallery__title'>Visit our customer tour gallery</h2>
                        </Col>

                        <Col lg='12'>
                            <MasonryImageGallery />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Fans Love'} />

                            <h2 className='testimonial__title'>What our fans say about us</h2>
                        </Col>

                        <Col lg='12'>
                            <Testimoials />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Newsletter />

        </>
    )
}

export default Home

