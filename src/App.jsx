import React, { useState, useEffect } from 'react';

import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Topbar from './components/topbar/Topbar';
import Switch from './components/switch/Switch';
import './app.scss'

function App() {

  const [ darkTheme, setDarkTheme ] = useState(false)

  // Update scroll position and direction
  const [ scrollPos, setScrollPos ] = useState(0)
  const [ scrollDir, setScrollDir ] = useState(null)
  
  useEffect(() => {
    const sections = document.getElementsByClassName('sections')[0]
    const handleScroll = () => {
        const position = sections.scrollTop
        const dir = (position - scrollPos < 0) ? 'down' : 'up'
        setScrollPos(position)
        setScrollDir(dir)
    }
    sections.addEventListener('scroll', handleScroll, { passive: true })
    return () => sections.removeEventListener('scroll', handleScroll)
  }, [scrollPos])


  // Update window height on resize
  const [ winHeight, setWinHeight ] = React.useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => setWinHeight(window.innerHeight)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  // Update active page and URL based on scrolling
  const [ activePage, setActivePage ] = useState([false, false, false, false])
  const [ linkClick, setLinkClick ] = useState(false)

  useEffect(() => {
    const scrolling = scrollPos % winHeight !== 0
    if (scrolling && !linkClick) {
      const i = (scrollDir === 'up') 
        ? Math.ceil(scrollPos / winHeight)
        : Math.floor(scrollPos / winHeight)
      const newActivePage = [false, false, false, false]
      newActivePage[i] = true;
      setActivePage(newActivePage)
    }
  }, [winHeight, scrollDir, scrollPos, linkClick])

  
  return (
    <div className={`app ${darkTheme ? 'theme-dark' : 'theme-light'}`}>
      
      <Topbar
        toShow={scrollPos >= winHeight / 2}
        activePage={activePage}
        setActivePage={setActivePage}
        setLinkClick={setLinkClick}
      />

      <div className='lightModeSwitch'>
        <Switch darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      </div>
      
      <div className='sections'>
        <Intro/>
        <Experience darkTheme={darkTheme}/>
        <Projects/>
        <Contact/>
      </div>
    
    </div>
  );
}

export default App;
