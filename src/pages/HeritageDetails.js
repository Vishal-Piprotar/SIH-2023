import React, { useEffect } from 'react'
import '../styles/heritage-details.css'
import { Container, Row, Col } from 'reactstrap'
import { useParams, NavLink } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import tourData from '../assets/data/tours'
import Newsletter from '../shared/Newsletter'
import Speech from 'react-speech'
import TourCard from '../shared/TourCardCulture'
import Subtitle from '../shared/Subtitle'

const HeritageDetails = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const { id } = useParams()

    const tour = tourData.find(tour => tour.id === id)

    const { photo, title, desc, lat, lon, reviews, state } = tour

    const { totalRating, avgRating } = calculateAvgRating(reviews)


    const nav__links = [
        {
            path: '/heritage/01',
            display: 'Agra Fort'
        },
        {
            path: '/heritage/02',
            display: 'Ajanta Caves'
        },
        {
            path: '/heritage/03',
            display: 'Ellora Caves'
        },
        {
            path: '/heritage/04',
            display: 'Taj Mahel'
        },

        {
            path: '/heritage/05',
            display: 'Group Of Monuments At Mahabalipuram'
        },

        {
            path: '/heritage/06',
            display: 'Sun Temple, Konarak'
        },

        {
            path: '/heritage/07',
            display: 'Kaziranga National Park'
        },

        {
            path: '/heritage/08',
            display: 'Keoladeo National Park'
        },

        {
            path: '/heritage/09',
            display: 'Manas Wildlife Sanctuary'
        },

        {
            path: '/heritage/10',
            display: 'Churches & Convents Of Goa'
        },
        {
            path: '/heritage/11',
            display: 'Fatehpur Sikri'
        },

        {
            path: '/heritage/12',
            display: 'Group Of Monuments At Hampi'
        },

        {
            path: '/heritage/13',
            display: 'Khajuraho Group Of Monuments'
        },

        {
            path: '/heritage/14',
            display: 'Elephenta Caves'
        },

        {
            path: '/heritage/15',
            display: 'Greate Living Chola Temple'
        },

        {
            path: '/heritage/16',
            display: 'Group Of Monuments At Pattadakal'
        },

        {
            path: '/heritage/17',
            display: 'Sundarbans  National Park'
        },

        {
            path: '/heritage/18',
            display: 'Nanda Devi & Valley Of Flowers National Park'
        },

        {
            path: '/heritage/19',
            display: 'Buddhist Monuments At Sanchi'
        },

        {
            path: '/heritage/20',
            display: `Humayun's Tomb, Delhi`
        },

        {
            path: '/heritage/21',
            display: 'Qutb Minar & Its Monuments, Delhi'
        },

        {
            path: '/heritage/22',
            display: 'Mountain Railways Of India'
        },

        {
            path: '/heritage/23',
            display: 'Mahabodhi Temple Complex At Bodh Gaya'
        },

        {
            path: '/heritage/24',
            display: 'Rock Shelters Of Bhimbetka'
        },

        {
            path: '/heritage/25',
            display: 'Champaner - Pavagadh Archaeologicl Park'
        },

        {
            path: '/heritage/26',
            display: 'Chhatrapati Shivaji Terminus'
        },

        {
            path: '/heritage/27',
            display: 'Red Fort Complex'
        },

        {
            path: '/heritage/28',
            display: 'The Jantar Mantar, Jaipur'
        },

        {
            path: '/heritage/29',
            display: 'Western Ghats'
        },

        {
            path: '/heritage/30',
            display: 'Hill Forts Of Rajasthan'
        },

        {
            path: '/heritage/31',
            display: 'Great Himalayan National Park Conservation Area'
        },

        {
            path: '/heritage/32',
            display: 'Rani-Ki-Vav At Patan, Gujrat'
        },

        {
            path: '/heritage/33',
            display: 'Archaeological Site Of Nalanda Mahavihara At Nalanda, Bihar'
        },

        {
            path: '/heritage/34',
            display: 'Khangchendzonga National Park'
        },
        {
            path: '/heritage/35',
            display: 'Historic City Of Ahmedabad'
        },

        {
            path: '/heritage/36',
            display: 'Victorian Gothic & Art Deco Ensembles Of Mumbai'
        },

        {
            path: '/heritage/37',
            display: 'Jaipur City, Rajasthan'
        },

        {
            path: '/heritage/38',
            display: 'Dholavira : A Harappan City'
        },

        {
            path: '/heritage/39',
            display: 'Kakatiya Rudreshwara Temple, Telangana'
        }
    ]


    useEffect(() => {
        const iframeData = document.getElementById('iframeId')
        iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&h1=es;&output=embed`
    })
    return (
        <>
            <section>
                <Container>


                    {
                        <Row>
                            <Col lg='8'>
                                <div className='tour__content'>
                                    {/* <img src={photo} alt='' /> */}

                                    <div className='tour__info'>
                                        <h2>{title}</h2>

                                        <div className='d-flex align-items-center gap-5'>
                                            <span className='tour__rating d-flex align-items-center gap-1'>
                                                <i class="ri-star-fill" style={{ 'color': "var(--secondary-color)" }}></i> {avgRating === 0 ? null : avgRating} {totalRating === 0 ? ('Not rated') : (<span>( {reviews?.length} )</span>)}
                                            </span>

                                            <span>
                                                <i class="ri-map-pin-user-fill"></i> {state}
                                            </span>
                                        </div>

                                        <div className='d-flex align-items-center gap-5'>
                                            <h5 className='mt-3'>Description</h5>

                                            <Speech
                                                textAsButton={true}
                                                displayText={<i class="ri-volume-up-fill"></i>}
                                                text={desc}

                                            />

                                        </div>
                                        <p>{desc}</p>

                                        <hr />

                                        <img src={photo} alt='' className='mt-3' />

                                    </div>

                                </div>
                            </Col>

                            <Col lg='4'>

                                <div className='heritage__map'>
                                    <iframe id='iframeId' height='300px' width='100%'></iframe>
                                </div>

                                <div className='navigation_heritage mt-4' >
                                    <ul className='menu_heritage'>
                                        {
                                            nav__links.map((item, index) => (
                                                <li className='nav__item d-flex gap-3 mt-3' key={index}>
                                                    <i class="ri-arrow-right-line"></i> <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}> {item.display}</NavLink>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </Col>
                        </Row>
                    }
                </Container>
            </section>

            <section className='nearest__place'>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={'Explore the nearest place'} />
                        </Col>
                    </Row>
                    <Row>{
                        tour?.nearest?.map(tour => (<Col lg='3' md='6' sm='6' key={tour._id} className='mb-4'> <TourCard tour={tour} /> </Col>))
                    }
                    </Row>
                </Container>
            </section>

            <Newsletter />
        </>
    )
}

export default HeritageDetails
