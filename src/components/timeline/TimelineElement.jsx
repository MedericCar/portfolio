import { ContactSupportOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { CSSTransition } from "react-transition-group";
import './timelineElement.scss'

export default function TimelineElement({ data, idx, darkTheme }) {

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
          {data.description.map((el => <li>{el}</li>))}
        </ul>
      )
    }
  }

  const [ selected, setSelected ] = useState(-1)
  const [ showDescription, setShowDescription ] = useState(false)

  return (
    <div 
      className={`timeline-element ${data.position}`}
      style={{ 
        background : `var(--${darkTheme ? 'bg-' : ''}${data.color})`,
        width: data.width,
        left: data.startPos
      }}
      onMouseEnter={() => setSelected(idx)}
      onMouseLeave={() => setSelected(-1)}
    >
      <div 
        className='info'
        style={{
          width: '250px'  // keep to potentially change to dynamic sizing
        }}
      >

        <div className='text'>
          <h3>{data.company}</h3>
          <h5>{renderDate()}</h5>
          <p className='title'>{data.title}</p>
          <CSSTransition
            in={selected === idx}
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
