import React from 'react'
import './timelineElement.scss'

export default function TimelineElement({ data, idx }) {
  return (
    <div className='timeline-element' style={{ background : data.color }}>
      <h3 className='toto'>{data.company}</h3>
    </div>
  )
};
