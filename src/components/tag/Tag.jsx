import React from "react"
import './tag.scss'

export default function Tag({ data }) {
  return (
    <div className='tag' style={{ color: data.color, backgroundColor: data.backgroundColor }}>
      {data.text}
    </div>
  )
}