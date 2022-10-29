import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portofolio from './components/portofolio/Portofolio'

function App() {
  return (
    <>

        <Header/>
        <About />
        <Experience />
        <Services />
        <Portofolio />
        <Testimonials />
        <Contact />
        <Footer />
        <Nav />

    </>
  )
}

export default App

