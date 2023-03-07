import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Testimonial from './components/testimonial/Testimonial'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Portafolio from './components/portafolio/Portafolio'

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portafolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App