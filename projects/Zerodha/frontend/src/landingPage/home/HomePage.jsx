import React from 'react'
import Hero from './Hero';
import Education from './Education';
import Pricing from './Pricing';
import Awards from './Awards';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function HomePage() {
    return ( <>
    <Navbar/>
    <Hero />
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education />
    <OpenAccount/>
    <Footer/>
    </> );
}

export default HomePage;