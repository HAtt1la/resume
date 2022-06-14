import React from 'react'
import './about.css'
import ME from '../../assets/me-2.png'
import {FaAward} from 'react-icons/fa'
import {SiKubernetes} from 'react-icons/si'
import {BiGitBranch} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About"  className='about__me-image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <p>10+ Years in IT</p>
            </article>

            <article className='about__card'>
              <SiKubernetes className='about__icon'/>
              <h5>Kubernetes</h5>
              <p>Hands-on with Kubernetes both Native and AKS</p>
            </article>

            <article className='about__card'>
              <BiGitBranch className='about__icon'/>
              <h5>IaC</h5>
              <p>Store the Infrasctructure as code</p>
            </article>
          </div>
          <p>I'm an Experienced DevOps Engineer with a demonstrated history of working in the information technology.<br/>I started as System Administrator but I keep climbing the ladder.<br/>I'm constantly expanding my professional direction and dedicated to continuous improvement along the DevOps technologies with cloud solutions, IaaS platforms, API integration, CI/CD and full automation processes.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About