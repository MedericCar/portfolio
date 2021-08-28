import React from 'react'

import TimelineElement from './TimelineElement'
import './timeline.scss'

export default function Timeline({ experience }) {
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