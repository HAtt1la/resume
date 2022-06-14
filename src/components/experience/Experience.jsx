import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What hands-on knowledge I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
      <div>
        <h3>Engineer</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>Kubernetes</h4>
              <small className='text-light'>4 years</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>ArgoCD</h4>
              <small className='text-light'>1 years</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>Docker</h4>
              <small className='text-light'>4 years</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>Grafana & Prometheus</h4>
              <small className='text-light'>5+ years</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>Helm</h4>
              <small className='text-light'>1 years</small>
            </div>
          </article>
        </div>

      </div>
      <div >
      <h3>Admin</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>Ticketing tools</h4>
              <small className='text-light'>10 years  </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>Access Control</h4>
              <small className='text-light'>5 years</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>Linux</h4>
              <small className='text-light'>10 years</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>Scripting Languages</h4>
              <small className='text-light'>10 years</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details_icon' />
            <div>
              <h4>Databases</h4>
              <small className='text-light'>2 years</small>
            </div>
          </article>
        </div>
        </div>
    </div>
    
    </section>
  )
}

export default Experience