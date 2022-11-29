import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Hservices from '../components/Hservices'
import Oslider from '../components/Oslider'
import Services from '../components/Services'
import Mslider from '../components/Mslider'
import Mservices from '../components/Mservices'

const Ourservicespage = () => {
  return (
    <div>
      <Navbar/>
      <Hservices/>
      <Oslider/>
      <Services/>
      <Mslider/>
      <Mservices/>
      <Footer/>
      <Copyright/> 
    </div>
  )
}

export default Ourservicespage