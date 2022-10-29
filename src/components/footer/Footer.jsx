import React from 'react'
import './Footer.css'

import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer-logo'>Me</a>

      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#experience'>Experience</a></li>
        <li> <a href='#services'>Services</a></li>
        <li> <a href='#portofolio'>Portofolio</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href='#'><AiOutlineInstagram /></a>
        <a href='#'><AiFillFacebook /></a>
      </div>

    </footer>
  )
}

export default Footer