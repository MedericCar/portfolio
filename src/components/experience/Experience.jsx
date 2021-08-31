import React from 'react'
import { experienceData } from '../../data'
import Timeline from '../timeline/Timeline'
import './experience.scss'

export default function Experience() {


  return (
    <div className='experience' id='experience'>
      <h1 id='title'>Experience</h1>
      <div id='description'>
        <p>
          I am currently in my final year at EPITA, a French engineering school
          specialized in Computer Science, and will be graduating in 2022.
        </p>
        <p>
          This is what I have been up to the last 5 years.
        </p>
      </div>
      <Timeline experience={experienceData}/>
    </div>
  )
}
