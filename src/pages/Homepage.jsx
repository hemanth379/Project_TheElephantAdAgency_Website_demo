import React from 'react'
import Announcement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import Intro from '../components/intro/intro'
import About from '../components/about/about'
import Desc from '../components/desc/desc'
import Copyright from '../components/Copyright'


function home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <About/>
      <Desc/>
      <Announcement/>
      <Intro/>
      <Newsletter/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default home