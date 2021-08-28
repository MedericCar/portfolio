import React from 'react'
import './timelineElement.scss'

export default function TimelineElement({ data, idx, setSelected }) {

  const date = () => {
    const startYear = data.startDate.getFullYear() 
    const endYear = data.endDate.getFullYear()
    return endYear === startYear
      ? `${startYear}`
      : `${startYear} - ${endYear}`
  }

  return (
    <div 
      className={`timeline-element ${data.position}`}
      style={{ 
        background : data.color,
        width: data.width,
        left: data.start
      }}
      onMouseOver={() => setSelected(idx)}
    >
      <div className='info'>
        <div className='text'>
          {/* <img src={data.logo} alt='logo' width='50'></img> */}
          <h3>{data.company}</h3>
          <h5>{date()}</h5>
          <p>{data.title}</p>
        </div>
      </div>
    </div>
  )
};
