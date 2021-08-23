import React from 'react'
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

import './topbar.scss'

export default function Topbar({ darkMode, setDarkMode }) {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <h1 color='secondary'>Médéric Carriat</h1>
        </div>
        <div className='center'>
          <SettingsBrightnessIcon onClick={()=>setDarkMode(!darkMode)}/>
        </div>
        <div className='right'>
          <a href='#intro'>Home</a>
          <a href='#jobs'>Experience</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
      
    </div>
  )
}
