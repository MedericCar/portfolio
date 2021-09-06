import React, { useState } from 'react'
import './tag.scss'

export default function Tag({ data, onClick, active }) {
  return (
    <div 
      className={`tag ${(active ? 'active' : 'inactive')} ${onClick ? 'clickable' : ''}`}
      style={{ color: data.color, backgroundColor: data.backgroundColor, cursor: onClick ? 'pointer' : 'default' }}
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
    >
      {data.text}
    </div>
  )
}