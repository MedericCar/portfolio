import React from 'react'
import { CSSTransition } from 'react-transition-group';
import Socials from '../contact/Socials';

import './topbar.scss'

const Link = ({ idx, href, text, activePage, setActivePage, isPhone, icon }) => {
  const newActivePage = [false, false, false, false]
  newActivePage[idx] = true

  return (
    <a
      href={href} 
      onClick={() => setActivePage(newActivePage)}
      className={`link ${activePage[idx] ? 'active' : ''}`}
    >
      <span id='icon'>
        {isPhone ? icon : ''}
      </span>
      <div id='text' className={`${isPhone && activePage[idx] ? 'blue' : ''}`}>
        {text}
      </div>
    </a>
  )
}

//FIXME: can refacto
export default function Topbar({ toShow, activePage, setActivePage, isPhone }) {

  return (
    <CSSTransition
      in={toShow}
      timeout={400}
      classNames='topbar'
    >
      <div className='topbar'>
        <div className='wrapper'>
          
          <div className='left'>
            <a href='#intro' onClick={() => setActivePage([true, false, false, false])}>
              <h1 color='secondary'><b className='blue'>MC</b></h1>
            </a>
          </div>

          <Socials isPhone={isPhone}/> 

          <div className='right'>
            <Link
              idx={0} 
              href='#intro'
              text='Home'
              activePage={activePage}
              setActivePage={setActivePage}
              isPhone={isPhone}
              icon={<i class={`fas fa-home ${isPhone && activePage[0] ? 'blue' : ''}`}></i>}
            />
            <Link
              idx={1} 
              href='#experience'
              text='About'
              activePage={activePage}
              setActivePage={setActivePage}
              isPhone={isPhone}
              icon={<i class={`fas fa-user ${isPhone && activePage[1] ? 'blue' : ''}`}></i>}
            />
            <Link
              idx={2} 
              href='#projects'
              text='Projects'
              activePage={activePage}
              setActivePage={setActivePage}
              isPhone={isPhone}
              icon={<i class={`fas fa-code-branch ${isPhone && activePage[2] ? 'blue' : ''}`}></i>}
            />
            <Link
              idx={3} 
              href='#contact'
              text='Contact'
              activePage={activePage}
              setActivePage={setActivePage}
              isPhone={isPhone}
              icon={<i class={`fas fa-paper-plane ${isPhone && activePage[3] ? 'blue' : ''}`}></i>}
            />
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
