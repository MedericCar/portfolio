import React, { useState, useEffect } from 'react';

import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Jobs from './components/jobs/Jobs';
import Projects from './components/projects/Projects';
import Topbar from './components/topbar/Topbar';
import './app.scss'

function App() {

  const [ darkMode, setDarkMode ] = useState(false)
  const [ scrollPos, setScrollPos ] = useState(0)
  
  useEffect(() => {
    const sections = document.getElementsByClassName('sections')[0]
    const handleScroll = () => {
        const position = sections.scrollTop
        setScrollPos(position)
    };
    sections.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
        sections.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(scrollPos)

    
  return (
    <div className={`app ${darkMode ? 'dark' : ''}`} >
      <Topbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className={`sections ${darkMode ? 'dark' : ''}`}>
        <Intro/>
        <Jobs/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
