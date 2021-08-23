import React from 'react'
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import { CSSTransition } from "react-transition-group";

import './topbar.scss'

export default function Topbar({ darkMode, setDarkMode, toShow }) {
  return (
    <CSSTransition
      in={toShow}
      timeout={400}
      classNames='topbar'
    >
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
    </CSSTransition>
  )
}
