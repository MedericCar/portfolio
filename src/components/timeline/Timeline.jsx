
import React from 'react'
import TimelineElement from './TimelineElement'
import './timeline.scss'

const getTimelineBounds = (experience) => {
  const min = experience.reduce((prev, curr) => {
    return prev.startDate > curr.startDate ? curr : prev
  })

  const max = experience.reduce((prev, curr) => {
    return prev.endDate < curr.endDate ? curr : prev
  })

  return [ min.startDate, max.endDate ]
}

// Compute the percentage of the timeline for each element
const computeTimelineLayout = (experience, tmStart, tmEnd) => {
  const tmDuration = (tmEnd - tmStart) / (1000 * 3600 * 24)

  experience.forEach(element => {
    let duration = (element.endDate - element.startDate) / (1000 * 3600 * 24)
    let start = (element.startDate - tmStart) / (1000 * 3600 * 24)
    element.width = `${duration / tmDuration * 100}%`
    element.start = `${start / tmDuration * 100}%`
  });
}

export default function Timeline({ experience, selected, setSelected }) {

  const [ tmStart, tmEnd ] = getTimelineBounds(experience)
  computeTimelineLayout(experience, tmStart, tmEnd)

  return (
    <div className='timeline' id='timeline'>
      {
        experience.map((el, idx) => (
          <TimelineElement data={el} idx={idx} selected={selected} setSelected={setSelected}/>
        ))
      }
    </div>
  )
}