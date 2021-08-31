import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../../data'
import './projects.scss'

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1 id='title'>Projects</h1>
      <div id='description'>
        <p>
         Here is a list of projects I have done on my personal time or for work/studies.
        </p>
      </div>
      <div className='cards'>
        {projectsData.map((el) => <ProjectCard data={el}/>)}
      </div>
    </div>
  )
}
