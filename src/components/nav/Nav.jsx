import React from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser, FiBookOpen } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { FaProjectDiagram } from 'react-icons/fa'
import { BiMessageRounded } from 'react-icons/bi'

import { useState } from 'react'

const Nav = () => {
  
  // useState HOOKS IN REACT: 
  // activeNav is the state variable
  // setActiveNav is the function that changes the state variable
  // We could name them anything we want, but we'll use activeNav and setActiveNav

  const [activeNav, setActiveNav] = useState('#');
  
  return (
    //a
    <nav>
      <a href="#" 
        onClick={ () => setActiveNav('#')} 
        className={ activeNav === '#' ? 'active' : ''}><AiOutlineHome />
      </a> {/* home */}

      <a href="#about" 
        onClick={ () => setActiveNav('#about')} 
        className={ activeNav === '#about' ? 'active' : ''}><AiOutlineUser />
      </a> {/* about */}
      
      <a href="#experience"
        onClick={ () => setActiveNav('#experience')} 
        className={ activeNav === '#experience' ? 'active' : ''}><BsBook />
      </a> {/* experience */}
      
      <a href="#services"
        onClick={ () => setActiveNav('#services')} 
        className={ activeNav === '#services' ? 'active' : ''}><FaProjectDiagram />
      </a> {/* projects */}
      
      <a href="#contact"
        onClick={ () => setActiveNav('#contact')} 
        className={ activeNav === '#contact' ? 'active' : ''}><BiMessageRounded />
      </a> {/* contact */}

    </nav>

  )
}

export default Nav