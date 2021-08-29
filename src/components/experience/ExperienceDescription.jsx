import React from 'react'
import './experienceDescription.scss'

export default function ExperienceDescription({ data }) {
  
  const date = () => {
    const startYear = data.startDate.toISOString().substring(0, 7)
    const endYear = data.endDate.toISOString().substring(0, 7)
    return `${startYear} to ${endYear}`
  }

  return (
    <div className='experience-description'>
      <div className='left'>
        <h1>{data.title}</h1>
        <h3>{data.company}</h3>
        <h5>{date()}</h5>
        <ul>{data.description.map((el) => <li>{el}</li>)}</ul>
      </div>
      <div className='right'>
        <img src={data.logo} alt='logo' width='60%'></img>
      </div>
    </div>
  )
}