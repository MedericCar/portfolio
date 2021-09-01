import React from "react"
import './switch.scss'

export default function Switch({ darkTheme, setDarkTheme }) {
  return (
    <div className='switch' onClick={() => setDarkTheme(!darkTheme)}>
      <input 
        type='checkbox'
        defaultChecked={false}
        checked={darkTheme}
      />
        <div>
          <span></span>
        </div>
    </div>
  )
}

