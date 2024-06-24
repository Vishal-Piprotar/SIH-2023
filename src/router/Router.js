import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./../pages/Home"
import Heritage from './../pages/Heritage'
import HeritageDetails from '../pages/HeritageDetails'
import About from '../pages/About'


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />

            <Route path='/home' element={<Home />} />

            <Route path='/about' element={<About />} />

            <Route path='/heritage' element={<Heritage />} />

          

            <Route path='/heritage/:id' element={<HeritageDetails />} />

        </Routes>
    )
}

export default Routers