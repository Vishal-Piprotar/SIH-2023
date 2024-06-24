import React, { useState } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup, Row } from 'reactstrap';
import heritage from "../assets/data/tours";
import TourCard from './TourCard'

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (event) => {
        const searchQuery = query.toLowerCase();

        if (searchQuery.length > 0) {
            const filteredResults = heritage.filter(item =>
                item.title.toLowerCase().includes(searchQuery) ||
                item.desc.toLowerCase().includes(searchQuery) ||
                item.state.toLowerCase().includes(searchQuery)
            );
            setResults(filteredResults);
        } else {
            setResults([]);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSearch();
    };

    return (
        <>
            <Col lg='12'>
                <div className='search__bar'>
                    <Form className='d-flex align-items-center gap-4' onSubmit={handleFormSubmit}>
                        <FormGroup className='d-flex gap-3 form__group form_group-fast'>
                            <span><i className="ri-map-pin-line"></i></span>
                            <div>
                                <h6>Location</h6>
                                <input
                                    type='text'
                                    placeholder='Where are you going?'
                                    value={query}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </FormGroup>
                        <span className='search__icon' type='submit' onClick={handleFormSubmit}><i className="ri-search-line"></i></span>
                    </Form>
                </div>
            </Col>



            <div id='resultDiv'>
                <div className='result'>

                    <Row>
                        {
                            results?.map(tour => (<Col lg='3' md='6' sm='6' key={tour._id} className='mb-4'> <TourCard tour={tour} /> </Col>))
                        }
                    </Row>




                </div>
            </div>
        </>
    );
};

export default SearchBar;