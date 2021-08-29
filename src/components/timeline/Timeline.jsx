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

  const addWidth = (element) => {
    let duration = (element.endDate - element.startDate) / (1000 * 3600 * 24)
    element.width = `${duration / tmDuration * 100}%`
  }

  const addStartPos = (element) => {
    let start = (element.startDate - tmStart) / (1000 * 3600 * 24)
    element.startPos = `${start / tmDuration * 100}%`
  }

  const addTextLim = (curr, next) => {
    let start
    if (!next) {
      start = (tmEnd - curr.startDate) / (1000 * 3600 * 24)
    } else {
      start = (next.startDate - curr.startDate) / (1000 * 3600 * 24)
    }
    curr.textLim = `${(start / tmDuration * 100) * 0.9}vw`
  }

  const addInfo = (l) => {
    l.sort((curr, next) => (curr.startDate > next.startDate))

    let curr, next;
    for (let i = 0; i < l.length - 1; i++) {
      curr = l[i]
      next = l[i+1]
      addWidth(curr)
      addStartPos(curr)
      addTextLim(curr, next)
    }
    addWidth(next)
    addStartPos(next)
    addTextLim(next)  // edge case of last item
  }

  const tmDuration = (tmEnd - tmStart) / (1000 * 3600 * 24)

  const upper = experience.filter((el) => (el.position === 'top' || el.position === 'center'))
  addInfo(upper)

  const lower = experience.filter((el) => (el.position === 'bottom'))
  addInfo(lower)
}


export default function Timeline({ experience }) {

  const [ tmStart, tmEnd ] = getTimelineBounds(experience)
  computeTimelineLayout(experience, tmStart, tmEnd)

  return (
    <div className='timeline' id='timeline'>
      {
        experience.map((el, idx) => (
          <TimelineElement data={el} idx={idx}/>
        ))
      }
    </div>
  )
}