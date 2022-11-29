import React from 'react'
import Announcement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Contact from '../components/contact/contact'


const Contactpage = () => {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Contact/>
      <Footer/>
      <Copyright/> 
    </div>
  )
}

export default Contactpage