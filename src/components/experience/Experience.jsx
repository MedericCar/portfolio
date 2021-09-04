import React from 'react'
import { experienceData } from '../../data'
import Timeline from '../timeline/Timeline'
import './experience.scss'

export default function Experience({ darkTheme }) {

  let age = Date.now() - new Date(1998, 11, 19)
  age /= 31557600000
  age = Math.floor(age)

  return (
    <div className='experience' id='experience'>
      <h1 id='title'>Hi, I'm Médéric</h1>
      <div id='description'>
        <p>
          Student at <a href="https://www.epita.fr/">EPITA</a> currently 
          in the last year of my Master in Image Processing & Computer Graphics,
          I am looking for a 6 month internship starting in February.
          Although my studies are quite specific, I am generally interested in 
          Computer Science and Software Engineering but I always strive to learn more.
        </p>
      </div>
      <Timeline experience={experienceData} darkTheme={darkTheme}/>
    </div>
  )
}
