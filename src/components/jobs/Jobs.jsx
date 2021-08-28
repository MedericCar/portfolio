import React from 'react'
import experience from '../../data'
import Timeline from '../timeline/Timeline'
import './jobs.scss'

export default function Jobs() {
  return (
    <div className='jobs' id='jobs'>
      <Timeline experience={experience}/>
    </div>
  )
}
