import React from 'react'
import { CSSTransition } from "react-transition-group";
import './timelineElement.scss'

export default function TimelineElement({ data, idx, selected, setSelected }) {

  const renderDate = () => {
    const startYear = data.startDate.getFullYear() 
    const endYear = data.endDate.getFullYear()
    return endYear === startYear
      ? `${startYear}`
      : `${startYear} - ${endYear}`
  }

  const renderDescription = (selected, idx, data) => {
    if (selected === idx) {
      return data.description
    }
    return data.description
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
      <div className='info'>
        <div className='text'>
          {/* <img src={data.logo} alt='logo' width='50'></img> */}
          <h3>{data.company}</h3>
          <h5>{renderDate()}</h5>
          <p>{data.title}</p>
          <CSSTransition
            in={selected === idx}
            timeout={100}
            classNames='description'
            unmountOnExit={true}
          >
            <p>{renderDescription(selected, idx, data)}</p>
          </CSSTransition>
        </div>
      </div>
    </div>
  )
};
