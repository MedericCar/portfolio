import React, { useState } from 'react'
import './tag.scss'

export default function Tag({ data, onClick, defaultVal }) {
  const [ active, setActive ] = useState(defaultVal)
  return (
    <div 
      className={`tag ${(active ? 'active' : 'inactive')} ${onClick ? 'clickable' : ''}`}
      style={{ color: data.color, backgroundColor: data.backgroundColor, cursor: onClick ? 'pointer' : 'default' }}
      onClick={() => {
        if (onClick) {
          setActive(!active)
          onClick()
        }
      }}
    >
      {data.text}
    </div>
  )
}