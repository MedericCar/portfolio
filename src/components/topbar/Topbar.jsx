import React from 'react'
import { CSSTransition } from "react-transition-group";

import './topbar.scss'

export default function Topbar({ lightMode, toShow }) {
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

          <div className={`right ${lightMode ? 'light' : ''}`}>
            <a href='#intro'>Home</a>
            <a href='#experience'>Experience</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
