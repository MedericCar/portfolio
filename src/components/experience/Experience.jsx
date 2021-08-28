import React, { useState } from 'react'
import experienceData from '../../data'
import Timeline from '../timeline/Timeline'
import ExperienceDescription from './ExperienceDescription'
import './experience.scss'

export default function Experience() {

  const [ selected, setSelected ] = useState(-1)

  const renderExperience = (selected) => {
    if (selected !== -1) {
      return <ExperienceDescription data={experienceData[selected]}/>
    }
  }

  return (
    <div className='experience' id='experience'>
      <h1>Experience</h1>
      <Timeline experience={experienceData} setSelected={setSelected}/>
      {renderExperience(selected)}
    </div>
  )
}
