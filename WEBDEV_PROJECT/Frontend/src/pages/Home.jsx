import React, { useEffect } from 'react'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
 
const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Category/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home;
