import React from "react"
import './projectCard.scss'

const Tag = ({ data }) => {
  return (
    <div className='tag' style={{ color: data.color, backgroundColor: data.backgroundColor }}>
      {data.text}
    </div>
  )
}

export default function ProjectCard({ data }) {
  return (
    <div className='project-card'>
      <div className='image' style={{backgroundImage: `url(${data.image})`}}></div>
      <div className='text'>
        <h3>{data.title}</h3>
        <div className='tags'>
          {data.tags.map((el) => <Tag data={el}/>)}
        </div>
        <p className='description'>
          {data.description}
        </p>
      </div>
    </div>
  )
}