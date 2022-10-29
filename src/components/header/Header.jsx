import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me3.png'
import HeaderSocials from './HeaderSocials'
import './Header.css'

function Header() {
  return (

    <header>

      <div className="header_container">

        <h5>Hello Saya</h5>
        <h1>M Fadhlurrahman Muzakki</h1>
        <h5 className="text-light">Network Administration</h5>

        <CTA />

        <div className='me'>

          <HeaderSocials />
          <img src={ME} alt="me" />

        </div>
        
        <a href="#contact" className="scroll_down">Scroll Down</a>

        

      </div>

    </header>

    )
}

export default Header