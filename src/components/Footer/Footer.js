import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/lg.png"

const quick__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/heritage',
        display: 'Heritage'
    }
]

const quick__links2 = [
    {
        path: '/gallery',
        display: 'Gallery'
    },
    {
        path: '/',
        display: 'Explore'
    }
]

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className='logo'>
                            <img src={logo} alt='' />
                            <p>India's heritage and traditions are a rich tapestry of ancient wisdom, diverse cultural practices, and artistic brilliance.</p>

                            <div className='social__links d-flex align-items-center gap-4'>
                               

                                <span>
                                    <Link to='https://github.com/Vishal-Piprotar'><i class="ri-github-fill"></i></Link>
                                </span>

                               

                                <span>
                                    <Link to='https://www.instagram.com/mr_vishal_099/'><i class="ri-instagram-line"></i></Link>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <h5 className='footer__link-title'>Discover</h5>
                        <ListGroup className='footer__quick-links'>
                            {
                                quick__links.map((item, index) => (
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='3'>
                        <h5 className='footer__link-title'>Quick Links</h5>
                        <ListGroup className='footer__quick-links'>
                            {
                                quick__links2.map((item, index) => (
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='3'>
                        <h5 className='footer__link-title'>Contact</h5>
                        <ListGroup className='footer__quick-links'>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-map-pin-line"></i> Address : </span>
                                </h6>

                                <p className='mb-0'>Ahmedabad</p>
                            </ListGroupItem>

                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-mail-line"></i> Email : </span>
                                </h6>

                                <p className='mb-0'>piprotarvishal20@gmail.com</p>
                            </ListGroupItem>

                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-phone-fill"></i> Phone : </span>
                                </h6>

                                <p className='mb-0'>+91 6352497433</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='12' className='text-center pt-5'>
                        <p className='copyright'>Copyright {year}, design and develop by <Link to='https://Vishal-Piprotar.github.io/Vishal-Piprotar-portfolio' className='portfolio'>Vishal Piprotar</Link>. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
