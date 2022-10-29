import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_social">
        <a href="www.google.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="www.google.com" target="_blank"rel="noopener noreferrer"><BsGithub/></a>
        <a href="www.google.com" target="_blank"rel="noopener noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials