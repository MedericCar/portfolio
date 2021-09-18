import React, { useState, useEffect, useCallback } from 'react';

import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Topbar from './components/topbar/Topbar';
import Switch from './components/switch/Switch';
import NavArrows from './components/navArrows/NavArrows';
import './app.scss'

function App() {

  const [ darkTheme, setDarkTheme ] = useState(false)

  // Update window height and type on resize
  const [ winHeight, setWinHeight ] = React.useState(window.innerHeight);
  const [ winWidth, setWinWidth ] = React.useState(window.innerWidth);
  const [ isTablet, setIsTablet ] = React.useState(window.innerWidth <= 991 && window.innerWidth > 481);
  const [ isPhone, setIsPhone ] = React.useState(window.innerWidth <= 481);

  document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);  // Update vh dynamically

  useEffect(() => {
    const handleWindowResize = () => {
      setWinHeight(window.innerHeight)
      setWinWidth(window.innerWidth)
      setIsTablet(window.innerWidth <= 991 && window.innerWidth > 481)
      setIsPhone(window.innerWidth <= 481)
      document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
    }
    window.addEventListener("resize", handleWindowResize)
    
    return () => window.removeEventListener("resize", handleWindowResize)
  
  }, [isPhone])


  // Update scroll position and direction
  const [ scrollPos, setScrollPos ] = useState(0)

  const handleScroll = useCallback(
    () => {
      const sections = document.getElementsByClassName('sections')[0]
      const position = sections.scrollLeft
      const dir = (position - scrollPos < 0) ? 'left' : (position - scrollPos > 0) ? 'right' : null
      if (dir) {
        setScrollPos(position)
      }

    }, [scrollPos]
  )
  
  useEffect(() => {
    const sections = document.getElementsByClassName('sections')[0]
    sections.addEventListener('scroll', handleScroll, { passive: true })
    return () => sections.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Update active page based on scroll position
  const [ activePage, setActivePage ] = useState([true, false, false, false])

  // On refresh
  useEffect(() => {

    const handleRefresh = (event) => {
      const i = Math.floor(scrollPos / winWidth)
      const newActivePage = [false, false, false, false]
      newActivePage[i] = true;
      setActivePage(newActivePage)
    }
    
    window.addEventListener('load', handleRefresh)

    handleScroll()

    return () => window.removeEventListener('load', handleRefresh)

  }, [winHeight, winWidth, scrollPos, isPhone, isTablet, handleScroll])

  return (
    <div className={`app ${darkTheme ? 'theme-dark' : 'theme-light'}`}>
      
      <Topbar
        toShow={scrollPos >= winWidth / 2}
        activePage={activePage}
        setActivePage={setActivePage}
        isPhone={isPhone}
      />

      <NavArrows
        activePage={activePage}
        setActivePage={setActivePage}
        isPhone={isPhone}
      />

      <div className='lightModeSwitch'>
        <Switch darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      </div>
      
      <div className='sections'>
        <Intro 
          darkTheme={darkTheme}
          active={scrollPos < winWidth}
          setActivePage={setActivePage}
        />
        <Experience darkTheme={darkTheme} smallViewport={isPhone || isTablet}/>
        <Projects isTablet={isTablet}/>
        <Contact isPhone={isPhone}/>
      </div>
    
    </div>
  );
}

export default App;
