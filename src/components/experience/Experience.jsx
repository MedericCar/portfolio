import React from 'react'
import { experienceData } from '../../data'
import Timeline from '../timeline/Timeline'
import './experience.scss'

export default function Experience({ darkTheme, smallViewport }) {

  //let age = Date.now() - new Date(1998, 11, 19)
  //age /= 31557600000
  //age = Math.floor(age)

  return (
    <div className='experience' id='experience'>
      <h1 id='title'>Hi, I'm <span className='blue'>Médéric</span></h1>
      <div id='description'>
        <p>
          I'm currently working at <b className='blue'>Salesforce</b> on Conversational Search and AI agents.
        </p>
        <p>
          This is what I've been up to the last few years.
        </p>
      </div>
      <Timeline experience={experienceData} darkTheme={darkTheme} smallViewport={smallViewport}/>
    </div>
  )
}
