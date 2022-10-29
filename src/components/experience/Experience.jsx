import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
  
    <section id='experience'>
      <h5>The Skills That I Have</h5>
      <h2>My Experience</h2>

      <div className='experience-container'>

        <div className='experience-frontend'>
          <div className='experience-head'>
            <h3 className='experience-details-text'>Front-End Development</h3>
          </div>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>HTML</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>
            
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>CSS</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>JAVASCRIPT</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>REACT</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>TAILWIND</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>BOOTSTRAP</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className='experience-backend'>
          <div className='experience-head'>
            <h3 className='experience-details-text'>Back-End Development</h3>
          </div>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>HTML</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>
            
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>CSS</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>JAVASCRIPT</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>REACT</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>TAILWIND</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4 className='experience-details-text'>BOOTSTRAP</h4>
                <small className='experience-details-text'>Experienced</small>
              </div>
            </article>

          </div>


        </div>


      </div>


    </section>
  
    )
}

export default Experience