import React from "react"
import Tag from "../tag/Tag"
import './projectCard.scss'


export default function ProjectCard({ data }) {
  return (
    <div className='project-card'>
      <a href={data.link}>
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
      </a>
    </div>
  )
}