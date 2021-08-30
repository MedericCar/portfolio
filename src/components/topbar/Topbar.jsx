import React from 'react'
import { CSSTransition } from 'react-transition-group';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
            <a href='#intro'><h1 color='secondary'>MC</h1></a>
          </div>

          <div className='center'>
          
            <a href='https://github.com/MedericCar' title='Github'><GitHubIcon/></a>
            <a href='mailto: carriatmederic@gmail.com' title='Mail'><MailIcon/></a>
            <a href='https://www.linkedin.com/in/m%C3%A9d%C3%A9ric-carriat-17705a181/' title='LinkedIn'><LinkedInIcon/></a>
            <a href='TODO' title='Resume'><AccountCircleIcon/></a>
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
