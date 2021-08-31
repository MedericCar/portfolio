import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../../data'
import './projects.scss'

const Row = ({ data }) => {
  return (
    <div className='row'>
      {data.map((el) => <ProjectCard data={el}/>)}
    </div>
  )
}

export default function Projects() {

  const chunk = (arr, size) => {
    let result = []
    for (let i = 0; i < arr.length; i += size) {
      let chunk = arr.slice(i, i + size)
      result.push(chunk)
    }
    return result 
  }

  console.log(chunk(projectsData, 2))

  projectsData.sort((a, b) => {
    const yearA = parseInt(a.tags[a.tags.length - 1].text)
    const yearB = parseInt(b.tags[b.tags.length - 1].text)
    return yearA < yearB 
  })

  return (
    <div className='projects' id='projects'>
      <h1 id='title'>Projects</h1>
      <div id='description'>
        <p>
         Here is a list of projects I have done on my personal time or for work/studies.
        </p>
      </div>
      <div className='cards'>
        {chunk(projectsData, 3).map((el) => <Row data={el}/>)}
      </div>
    </div>
  )
}
