import React from 'react'
import './tag.scss'

export default function Tag({ data, onClick, active }) {

  const className = `tag ${(active ? 'active' : 'inactive')} ${onClick ? 'clickable' : ''}`

  const style = {
    color: data.color,
    backgroundColor: data.backgroundColor,
    cursor: onClick ? 'pointer' : 'default'
  }
  
  return (
    <div className={className} style={style} onClick={() => (onClick) ? onClick() : null}>
      {data.text}
    </div>
  )
}