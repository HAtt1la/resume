import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/horv%C3%A1th-attila' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/HAtt1la' target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials