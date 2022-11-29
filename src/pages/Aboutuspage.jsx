import React from 'react'
import Announcement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Intro from '../components/intro/intro'
import Desc from '../components/desc/desc'
import About from '../components/about/about'

const Aboutuspage = () => {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Intro/>
      <Desc/>
      <About/>
      <Footer/>
      
      <Copyright/> 
    </div>
  )
}

export default Aboutuspage