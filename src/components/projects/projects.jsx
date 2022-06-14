import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg'


const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Simple Azure Kubernetes Service</h3>
          <div className='projects__item-cta'>
            <a href="https://github.com/HAtt1la/simple.aks" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a projects item title</h3>
          <div className='projects__item-cta'>
            <a href="https://github.com/HAtt1la" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects