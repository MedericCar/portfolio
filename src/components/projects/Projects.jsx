import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import Tag from '../tag/Tag'
import { projectsData } from '../../data'
import './projects.scss'

// Row component for the flex table
const Row = ({ data, showCards, selectedTags }) => {
  return (
    <div className='row'>
      {data.map((el) => <ProjectCard key={el.id} data={el} show={showCards} selectedTags={selectedTags}/>)}
    </div>
  )
}

// Filter list component
const FilterList = ({ tags, selectedTags, setSelectedTags }) => {

  const updateSelectedTags = (t) => {
    let selectedTagsCopy = Object.assign({}, selectedTags)

    // If tag is updated to active, unset the All tag
    if (!selectedTags[t]) {
      selectedTagsCopy['All'] = false
    }

    selectedTagsCopy[t.text] = !selectedTags[t.text]
    setSelectedTags(selectedTagsCopy)
  }

  const updateAllTag = (t) => {
    let selectedTagsCopy = Object.assign({}, selectedTags)

    // If All tag is updated to active, unset every other tag
    if (!selectedTags['All']) {
      Object.keys(selectedTags).forEach(t => selectedTagsCopy[t] = false)
    }

    selectedTagsCopy['All'] = !selectedTags['All']
    setSelectedTags(selectedTagsCopy)
  }

  const anyTagData = {
    text: 'All',
    color: 'var(--gray2)',
    backgroundColor: 'var(--gray5)',
  }

  return (
    <div className='filter-list'>
      <Tag 
        key={-1}
        data={anyTagData}
        onClick={() => updateAllTag(anyTagData)}
        active={selectedTags['All']}
      />
      {
        tags.map((t, idx) => {
          return <Tag
                   key={idx}
                   data={t}
                   onClick={() => updateSelectedTags(t)}
                   active={selectedTags[t.text]}
                 />
        })
      }
    </div>
  )
}

export default function Projects({ isTablet }) {

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
  totTags.sort((a, b) => -a.text.localeCompare(b.text))

  let tags = Object.fromEntries(totLabels.map(l => [l, false]))
  tags = { ...tags, 'All': true }

  const [ selectedTags, setSelectedTags ] = useState(tags)
  const [ selectedYears, setSelectedYears ] = useState([])
  const [ showCards , setShowCards ] = useState(true) 
  
  // On tags update, launch animation, update years and sort new data
  useEffect(() => {
    const animLength = 300 
    setShowCards(false)
    setTimeout(() => setShowCards(true), animLength)

    setSelectedYears(Object.keys(selectedTags)
                           .filter(t => selectedTags[t] && parseInt(t)))

    projectsData.sort((a, b) => {
      const yearA = parseInt(a.tags[a.tags.length - 1].text)
      const yearB = parseInt(b.tags[b.tags.length - 1].text)
      return yearA < yearB ? 1 : -1
    })

  }, [selectedTags])


  // Cut a list in chunks of given size
  const chunk = (arr, size) => {
    let result = []
    for (let i = 0; i < arr.length; i += size) {
      let chunk = arr.slice(i, i + size)
      result.push(chunk)
    }
    return result 
  }

  const projectFilter = (project) => {
    const projectLabels = project.tags.map(t => t.text)
    const textTags = Object.keys(selectedTags)
                              .filter(t => selectedTags[t] && !parseInt(t))

    // Filter none if All tag is set
    if (selectedTags['All']) {
      return true
    }

    // Only years -> overlook text tags
    if (textTags.length === 0) {
      return projectLabels.some(l => selectedTags[l])
    }

    // Years + text -> filter by year first than by text
    if (selectedYears.length !== 0 && !projectLabels.some(l => selectedYears.includes(l))) {
      return false
    }
    return projectLabels.some(l => selectedTags[l] && !selectedYears.includes(l))

  }

  const renderCards = (data) => {
    const filteredData = data.filter(p => projectFilter(p))
    const chunks = chunk(filteredData, isTablet ? 2 : 3)
    return (
      chunks.map((el, idx) => <Row 
                                key={idx}
                                data={el} 
                                showCards={showCards}
                                selectedTags={selectedTags}
                              />
      )
    )
  }

  return (
    <div className='projects' id='projects'>
      <h1 id='title' className=''>A few <span className='blue'>projects</span></h1>
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
