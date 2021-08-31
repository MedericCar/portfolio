import React from "react"
import './projectCard.scss'

export default function ProjectCard({ data }) {
  return (
    <div className='project-card'>
      <div className='image' style={{backgroundImage: `url(${data.image})`}}></div>
      <div className='text'>
        <h3>{data.title}</h3>
        <div className='tags'>
          tags
        </div>
        <p className='description'>
          {data.description}
        </p>
      </div>
    </div>
  )
}