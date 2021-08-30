import React from "react"
import './switch.scss'

export default function Switch({ lightMode, setLightMode }) {
  return (
    <div className='switch' onClick={() => setLightMode(!lightMode)}>
      <input 
        type='checkbox'
        defaultChecked={false}
        checked={lightMode}
      />
        <div>
          <span></span>
        </div>
    </div>
  )
}

