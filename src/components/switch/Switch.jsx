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
          <i class="fas fa-adjust blue"></i>
    </div>
  )
}

