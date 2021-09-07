import React from 'react'
import { experienceData } from '../../data'
import Timeline from '../timeline/Timeline'
import './experience.scss'

export default function Experience({ darkTheme, isTablet }) {

  //let age = Date.now() - new Date(1998, 11, 19)
  //age /= 31557600000
  //age = Math.floor(age)

  return (
    <div className='experience' id='experience'>
      <h1 id='title'>Hi, I'm Médéric</h1>
      <div id='description'>
        <p>
          Student at <b><a href="https://www.epita.fr/">EPITA</a></b> currently 
          in the last year of the Image Processing & Computer Graphics Master,
          I am looking for a <b>6-month internship</b> starting in <b>February 2021</b>.
        </p>
        <p>
          This is what I've been up to the <b>last 5 years</b>.
        </p>
      </div>
      <Timeline experience={experienceData} darkTheme={darkTheme} isTablet={isTablet}/>
    </div>
  )
}
