import React from 'react'
import './contact.css'
import {MdOutlineMail} from "react-icons/md"
import {RiLinkedinBoxLine} from "react-icons/ri"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div>
        <div className='container contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:attila.horvath@outlook.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiLinkedinBoxLine className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/horv%C3%A1th-attila/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact