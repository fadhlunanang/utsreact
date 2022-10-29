import React from 'react'
import './About.css'
import ME from '../../assets/DSC09044-removebg-preview.png'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About me</h2>

      <div className='about_container'>
          <div className='img-container'>
          <img src={ME} className='img' alt="about-image" />
          </div>

          <div className='container_text'>
            
            <p>Saya berusia 19 tahun, dan saat ini saya merupakan mahasiswa.<br></br> <br></br>
            Saya sangat suka belajar hal baru yang membuat pengalaman saya bertambah.<br></br> <br></br>
            Untuk sekarang, saya sedang sibuk dalam berorganisasi di Universitas Pendidikan Indonesia. <br></br><br></br>
            Selain itu, saat ini saya juga sedang mencoba menedalami pembelajaran yang ada selama perkuliahan
            </p>
      
          </div>
        
      </div>

    </section>
  )
}

export default About