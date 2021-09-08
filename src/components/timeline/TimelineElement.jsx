import React, { useState } from 'react'
import { CSSTransition } from "react-transition-group";
import './timelineElement.scss'

export default function TimelineElement({ data, idx, darkTheme, smallViewport }) {


  const renderDate = () => {
    const startYear = data.startDate.getFullYear() 
    const endYear = data.endDate.getFullYear()
    return endYear === startYear
      ? `${startYear}`
      : `${startYear} - ${endYear}`
  }

  const renderDescription = (data, showDescription) => {
    if (showDescription) {
      return (
        <ul>
          {data.description.map((el, idx) => <li key={idx}>{el}</li>)}
        </ul>
      )
    }
  }

  const [ selected, setSelected ] = useState(-1)
  const [ showDescription, setShowDescription ] = useState(false)

  const style = !smallViewport
    ? { width: data.width, left: data.startPos }
    : { height: data.width, top: data.startPos }

  return (
    <div 
      className={`timeline-element ${data.position}`}
      style={{ 
        ...style,
        background : `var(--${darkTheme ? 'bg-' : ''}${data.color})`,
      }}
      onMouseEnter={() => setSelected(idx)}
      onMouseLeave={() => setSelected(-1)}
    >
      <div 
        className='info'
        style={{
          //width: !isTablet ? '250px' : '130px'  // keep to potentially change to dynamic sizing
        }}
      >

        <div className='text'>
          <h3>{data.company}</h3>
          <h5>{renderDate()}</h5>
          <p className='title'>{data.title}</p>
          <CSSTransition
            in={selected === idx && !smallViewport}
            timeout={{
              enter: 300,
              exit: 200,
            }}
            classNames='description'
            onEntered={() => setShowDescription(true)}
            onExited={() => setShowDescription(false)}
            unmountOnExit={true}
          >
            <div className='description'>
              {renderDescription(data, showDescription)}
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  )
};
