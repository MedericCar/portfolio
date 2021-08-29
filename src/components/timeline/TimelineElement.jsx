import React, { useState } from 'react'
import { CSSTransition } from "react-transition-group";
import './timelineElement.scss'

export default function TimelineElement({ data, idx }) {

  const renderDate = () => {
    const startYear = data.startDate.getFullYear() 
    const endYear = data.endDate.getFullYear()
    return endYear === startYear
      ? `${startYear}`
      : `${startYear} - ${endYear}`
  }

  const renderDescription = (data) => {
      return (
        <ul>
          {data.description.map((el => <li>{el}</li>))}
        </ul>
      )
  }

  const [ selected, setSelected ] = useState(-1)

  return (
    <div 
      className={`timeline-element ${data.position}`}
      style={{ 
        background : data.color,
        width: data.width,
        left: data.startPos
      }}
      onMouseOver={() => setSelected(idx)}
      onMouseOut={() => setSelected(-1)}
    >
      <div 
        className='info'
        style={{
          width: data.textLim
        }}
      >

        <div className='text'>
          <h3>{data.company}</h3>
          <h5>{renderDate()}</h5>
          <p>{data.title}</p>
          <CSSTransition
            in={selected === idx}
            timeout={{
              enter: 100,
              exit: 200,
              }}
            classNames='description'
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {renderDescription(data)}
          </CSSTransition>
        </div>
      </div>
    </div>
  )
};
