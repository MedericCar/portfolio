import React from 'react'
import { CSSTransition } from "react-transition-group";
import './timelineElement.scss'

export default function TimelineElement({ data, idx, selected, setSelected }) {

  const date = () => {
    const startYear = data.startDate.getFullYear() 
    const endYear = data.endDate.getFullYear()
    return endYear === startYear
      ? `${startYear}`
      : `${startYear} - ${endYear}`
  }

  const renderDescription = (selected, idx, data) => {
    console.log(selected, idx)
    if (selected === idx) {
      return data.description
    }

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
      onMouseOut={() => setSelected(-1)}
    >
      <CSSTransition
        in={selected === idx}
        timeout={400}
        classNames='info'
      >
      <div className='info'>
        <div className='text'>
          {/* <img src={data.logo} alt='logo' width='50'></img> */}
          <h3>{data.company}</h3>
          <h5>{date()}</h5>
          <p>{data.title}</p>
          <p className={`description ${selected === idx ? 'shown' : ''}`}>
            {renderDescription(selected, idx, data)}
          </p>
        </div>
      </div>
      </CSSTransition>
    </div>
  )
};
