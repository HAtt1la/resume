import React from 'react'
import './skills.css'
import {BiCheck} from 'react-icons/bi'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What are my skills</h5>
      <h2>Skills</h2>

      <div className='container skills__container'>
        <article className='skill'>
          <div className='skill__head'>
            <h3>Hard Skills</h3>
          </div>
          <ul className='skill__list'>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>I written 50+ alerts as code in Grafana, and Humio </p>
            </li>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>Created 10+ Grafana dashboards as code</p>
            </li>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>I built 2 AKS with Terraform</p>
            </li>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>Using ArgoCD with gitlab for deployments</p>
            </li>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>Deployed 10+ Helm charts and costumized them to fit for the requirements</p>
            </li>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>I wrote 30+ guides for the Admin Teams</p>
            </li>
          </ul>
        </article>


        <article className='skill'>
          <div className='skill__head'>
            <h3>Soft Skills</h3>
          </div>
          <ul className='skill__list'>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>I'm thinking strategically and focus on solutions rather than the problems.</p>
            </li>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>Improve the Team efficiency by sharing knowledge and mentoring Team members.</p>
            </li>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>ITIL to ensure quality in IT products and services.</p>
            </li>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>Agile to deliver a consistent stream of advancements in applications.</p>
            </li>
            <li>
              <BiCheck className='skill__list-icon' />
              <p>I am Hungarian, but I speak English at a good level, and have basic German language skills</p>
            </li>
          </ul>
        </article>



        
      </div>
    </section>
  )
}

export default Skills