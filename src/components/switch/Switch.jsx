import React from "react"
import './switch.scss'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

export default function Switch({ darkTheme, setDarkTheme }) {
  return (
    <div className='switch' onClick={() => setDarkTheme(!darkTheme)}>
      <input 
        type='checkbox'
        defaultChecked={false}
        checked={darkTheme}
      />
        <WbIncandescentIcon fontSize='medium'/>
    </div>
  )
}

