import React from 'react'
import { CSSTransition } from 'react-transition-group';
import Socials from '../contact/Socials';

import './topbar.scss'

const Link = ({ idx, href, text, activePage, setActivePage, setLinkClick, isPhone, icon }) => {
  const newActivePage = [false, false, false, false]
  newActivePage[idx] = true

  return (
    <a
      href={href} 
      onClick={() => {
        setActivePage(newActivePage)
        setLinkClick(true)
        setTimeout(() => setLinkClick(false), 1000)
      }}
      className={`link ${activePage[idx] ? 'active' : ''}`}
    >
      <div id='icon' className={`${isPhone && activePage[idx] ? 'blue' : ''}`}>
        {isPhone ? icon : ''}
      </div>
      <div id='text' className={`${isPhone && activePage[idx] ? 'blue' : ''}`}>
        {text}
      </div>
    </a>
  )
}

//FIXME: can refacto
export default function Topbar({ toShow, activePage, setActivePage, setLinkClick, isPhone }) {

  return (
    <CSSTransition
      in={toShow}
      timeout={400}
      classNames='topbar'
    >
      <div className='topbar'>
        <div className='wrapper'>
          
          <div className='left'>
            <a href='#intro'><h1 color='secondary'><b className='blue'>MC</b></h1></a>
          </div>

          <Socials isPhone={isPhone}/> 

          <div className='right'>
            <Link
              idx={0} 
              href='#intro'
              text='Home'
              activePage={activePage}
              setActivePage={setActivePage}
              setLinkClick={setLinkClick}
              isPhone={isPhone}
              icon={<i class="fas fa-home"></i>}
            />
            <Link
              idx={1} 
              href='#experience'
              text='About'
              activePage={activePage}
              setActivePage={setActivePage}
              setLinkClick={setLinkClick}
              isPhone={isPhone}
              icon={<i class="fas fa-user"></i>}
            />
            <Link
              idx={2} 
              href='#projects'
              text='Projects'
              activePage={activePage}
              setActivePage={setActivePage}
              setLinkClick={setLinkClick}
              isPhone={isPhone}
              icon={<i class="fas fa-code-branch"></i>}
            />
            <Link
              idx={3} 
              href='#contact'
              text='Contact'
              activePage={activePage}
              setActivePage={setActivePage}
              setLinkClick={setLinkClick}
              isPhone={isPhone}
              icon={<i class="fas fa-paper-plane"></i>}
            />
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
