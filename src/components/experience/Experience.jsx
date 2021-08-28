import React from 'react'
import experienceData from '../../data'
import Timeline from '../timeline/Timeline'
import './experience.scss'

export default function Experience() {
  return (
    <div className='experience' id='experience'>
      <Timeline experience={experienceData}/>
    </div>
  )
}
