import React from 'react'
import CV from '../../assets/CV NANANG.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA