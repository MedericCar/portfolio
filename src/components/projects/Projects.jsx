import React, { useState, useEffect } from 'react'
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

const FilterList = ({ tags, selectedTags, setSelectedTags }) => {

  const updateSelectedTags = (t) => {
    const selectedTagsCopy = Object.assign({}, selectedTags)
    selectedTagsCopy[t.text] = !selectedTags[t.text]
    setSelectedTags(selectedTagsCopy)
  }

  return (
    <div className='filter-list'>
      {tags.map((t) => <Tag data={t} onClick={() => updateSelectedTags(t)}/>)}
    </div>
  )
}

export default function Projects() {

  const getTags = (data) => {
    let totTags = data.map(el => el.tags)
    totTags = [].concat.apply([], totTags)

    let totLabels = []
    totTags = totTags.filter(el => {
      if (!totLabels.includes(el.text)) {
        totLabels.push(el.text)
        return true;
      }
      return false;
    })

    return { totTags, totLabels }
  }

  const { totTags, totLabels } = getTags(projectsData)
  totTags.sort((a, b) => a.text < b.text)

  const [ selectedTags, setSelectedTags ] =
    useState(Object.fromEntries(totLabels.map(l => [l, true])))

  const [ selectedYears, setSelectedYears ] = useState([])
  useEffect(() => {
    setSelectedYears(Object.keys(selectedTags)
                           .filter(t => selectedTags[t] && parseInt(t)))
  }, [selectedTags])

  const chunk = (arr, size) => {
    let result = []
    for (let i = 0; i < arr.length; i += size) {
      let chunk = arr.slice(i, i + size)
      result.push(chunk)
    }
    return result 
  }

  const renderCards = (data) => {
    const filteredData = data.filter(p => {
      const projectLabels = p.tags.map(t => t.text)
      if (selectedYears && !projectLabels.some(l => selectedYears.includes(l))) {
        return false
      }
      return projectLabels.some(l => selectedTags[l] && !selectedYears.includes(l))
    })
    return (chunk(filteredData, 3).map((el) => <Row data={el}/>))
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
      <FilterList 
        tags={totTags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <div className='cards'>
        {renderCards(projectsData)}
      </div>
    </div>
  )
}
