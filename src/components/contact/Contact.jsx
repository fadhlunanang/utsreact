import React from 'react';
import './Contact.css';

import { AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jfmo0is', 'template_yrujhkw', form.current, 'rTSNSvW0Q-x_ghTN5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='contact-container'>
        <div className='contact-options'>
          <article className='contact-options-items'>
            <a href="mailto:fadhlu@upi.edu" target='blank'>
            <AiOutlineMail className='contact-options-icon'/>
            <h4>E-mail</h4>
            </a>
          </article>
          <article className='contact-options-items'>
            <a href="https://github.com/fadhlunanang" target='blank'>
            <AiOutlineGithub className='contact-options-icon'/>
            <h4>Github</h4>
            </a>
          </article>  

          <article className='contact-options-items'>
            <a href="https://www.linkedin.com/in/nanangfdhl" target='blank'>
            <AiFillLinkedin className='contact-options-icon'/>
            <h4>Linkedin</h4>
            </a>
          </article>

          <article className='contact-options-items'>
            <a href="https://wa.me/+6281290415495" target='blank'>
            <AiOutlineWhatsApp className='contact-options-icon'/>
            <h4>WhatsApp</h4>
            </a>
          </article> 

              
        </div> 

          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Name' required/>
            <input type='email' name='email' placeholder='Email' required/>
            <textarea name='message' placeholder='Your Message' rows='1' required></textarea>
            <button className='btn2' type='submit'>Submit</button>
          </form>
      </div>
    </section>
  )
}

export default Contact