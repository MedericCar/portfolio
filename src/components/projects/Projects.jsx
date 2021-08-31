import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import Tag from '../tag/Tag'
import { projectsData } from '../../data'
import './projects.scss'

const Row = ({ data }) => {
  return (
    <div className='row'>
      {data.map((el) => <ProjectCard data={el}/>)}
    </div>
  )
}

const FilterList = ({ tags }) => {
  return (
    <div className='filter-list'>
      {tags.map((el) => <Tag data={el}/>)}
    </div>
  )
}

export default function Projects() {

  const getTags = (data) => {
    let tags = data.map(el => el.tags)
    tags = [].concat.apply([], tags)

    let labels = []
    tags = tags.filter(el => {
      if (!labels.includes(el.text)) {
        labels.push(el.text)
        return true;
      }
      return false;
    })

    return { tags, labels }
  }

  const [ selectedTags, setSelectedTags ] = useState({})
  const { tags, labels } = getTags(projectsData)
  console.log(tags)

  const chunk = (arr, size) => {
    let result = []
    for (let i = 0; i < arr.length; i += size) {
      let chunk = arr.slice(i, i + size)
      result.push(chunk)
    }
    return result 
  }

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
      <FilterList tags={tags}/>
      <div className='cards'>
        {chunk(projectsData, 3).map((el) => <Row data={el}/>)}
      </div>
    </div>
  )
}
