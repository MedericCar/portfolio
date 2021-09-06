import React from "react"
import Tag from "../tag/Tag"
import './projectCard.scss'


export default function ProjectCard({ data, show, selectedTags }) {

  if (!show) {
    return <div className='project-card' style={{ display: 'none' }}></div>
  }

  return (
    <div className='project-card' style={{ animation: `fadeIn 1s` }}>
      <a href={data.link}>
        <div className='image' style={{backgroundImage: `url(${data.image})`}}></div>
        <div className='text'>
          <h3>{data.title}</h3>
          <div className='tags'>
            {
              data.tags.map((t, idx) => <Tag
                                          key={idx}
                                          data={t}
                                          active={selectedTags[t.text] || selectedTags['All']}
                                        />
              )
            }
          </div>
          <p className='description'>
            {data.description}
          </p>
        </div>
      </a>
    </div>
  )

}