import React from 'react'
import './experienceDescription.scss'

export default function ExperienceDescription({ data }) {

  return (
    <div className='experience-description'>
      <h1>{data.title}</h1>
      <h3>{data.company}</h3>
      <h3>{data.startDate.toString()}</h3>
      <p>{data.description}</p>
    </div>
  )
}