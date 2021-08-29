import React, { useState }from 'react'
import { CSSTransition } from "react-transition-group";

import './topbar.scss'

//FIXME: can refacto
export default function Topbar({ toShow, activePage, setActivePage }) {


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

          <div className='right'>
            <a
              href='#intro' 
              onClick={() => setActivePage([true, false, false, false])}
              className={`${activePage[0] ? 'active' : ''}`}
            >
              Home
            </a>
            <a
              href='#experience'
              onClick={() => setActivePage([false, true, false, false])}
              className={`${activePage[1] ? 'active' : ''}`}
            >
              Experience
            </a>
            <a 
              href='#projects'
              onClick={() => setActivePage([false, false, true, false])}
              className={`${activePage[2] ? 'active' : ''}`}
            >
              Projects
            </a>
            <a
              href='#contact'
              onClick={() => setActivePage([false, false, false, true])}
              className={`${activePage[3] ? 'active' : ''}`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
