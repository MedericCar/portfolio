import React, { useState, useEffect } from 'react';

import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Topbar from './components/topbar/Topbar';
import Switch from './components/switch/Switch';
import './app.scss'

function App() {

  // FIXME: wrong colors
  const [ lightMode, setLightMode ] = useState(false)

  const [ scrollPos, setScrollPos ] = useState(0)
  
  useEffect(() => {
    const sections = document.getElementsByClassName('sections')[0]
    const handleScroll = () => {
        const position = sections.scrollTop
        setScrollPos(position)
    }
    sections.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
        sections.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const [height, setHeight] = React.useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => setHeight(window.innerHeight)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  const [ activePage, setActivePage ] = useState([false, false, false, false])

  useEffect(() => {
    const newActivePage = [false, false, false, false]
    newActivePage[Math.floor((scrollPos + height / 2) / height)] = true 
    setActivePage(newActivePage)
  }, [height, scrollPos])

  return (
    <div className={`app ${lightMode ? 'theme-dark' : 'theme-light'}`}>
      
      <Topbar
        toShow={scrollPos >= height / 2}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className='lightModeSwitch'>
        <Switch lightMode={lightMode} setLightMode={setLightMode}/>
      </div>
      
      <div className='sections'>
        <Intro/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    
    </div>
  );
}

export default App;
