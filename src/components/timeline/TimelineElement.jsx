import React from 'react'
import './timelineElement.scss'

export default function TimelineElement({ data, idx }) {
  return (
    <div 
      className='timeline-element'
      style={{ 
        background : data.color,
        width: data.width,
        left: data.start
      }}
    >
      <div className='info'>
        <h3>{data.company}</h3>
        <p>{data.title}</p>
      </div>
    </div>
  )
};
