import React from 'react'
import './projects.css'
import AKS from '../../assets/aks.png'
import REACT from '../../assets/react.png'


const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={AKS} alt="" />
          </div>
          <h3>Simple Azure Kubernetes Service</h3>
          <div className='projects__item-cta'>
            <a href="https://github.com/HAtt1la/simple.aks" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={REACT} alt="" />
          </div>
          <h3>You can find here this react page source code</h3>
          <div className='projects__item-cta'>
            <a href="https://github.com/HAtt1la/resume" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects