import React from 'react'
import Banner from '../../Components/Banner.jsx';
import About from '../../Components/About.jsx'
import Navbar from '../../Components/Navbar.jsx';
import CoreServices from '../../Components/CoreServices.jsx';
import Footer from '../../Components/Footer.jsx';



function Home() {
  return (
    <>
        <Navbar />
        <Banner/>
        <About />
        <CoreServices />
        <Footer />
    </> 
  )
}

export default Home
