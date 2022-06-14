import React from 'react'
import './footer.css'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Attila</a>

      <ul className='permalink'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/HAtt1la"><BsGithub /></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer