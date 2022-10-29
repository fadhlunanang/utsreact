import React from 'react'
import './Portofolio.css'

import IMG1 from '../../assets/fb-clone.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Facebook Clone',
    github: 'https://github.com/Hvdri/fb-clone2',
  }
]

function Portofolio() {
  return (
    <section id='portofolio'>
        <h5>My Work</h5>
        <h2>Portofolio</h2>

        <div className='portofolio-container'>
            {
              data.map( ({id, image, title, github}) => {
                return (
                  <article 
                  key={id}
                  className='portofolio-item'>
                    <div className='portofolio-item-image'>
                      <a className='btn-primary' 
                         target='_blank' 
                         rel="noreferrer" 
                         href={github}>
                          <img src={image} alt='fb-clone' />
                      </a>
                    </div>
                    <div className='portofolio-item-cta'>
                      <h3>{title}</h3>
                    </div>
                  </article>
                )
              })
            }
        </div>

    </section>
  )
}

export default Portofolio