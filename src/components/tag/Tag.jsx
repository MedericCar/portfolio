import React, { useState } from 'react'
import './tag.scss'

export default function Tag({ data, onClick }) {
  const [ active, setActive ] = useState(onClick ? true : false)
  return (
    <div 
      className={`tag ${onClick ? (active ? 'active' : 'inactive') : ''}`}
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