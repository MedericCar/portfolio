import React, { useState, useEffect } from 'react';

import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Jobs from './components/jobs/Jobs';
import Projects from './components/projects/Projects';
import Topbar from './components/topbar/Topbar';
import './app.scss'

function App() {

  const [ lightMode, setLightMode ] = useState(false)

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


  const [height, setHeight] = React.useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className={`app ${lightMode ? 'light' : ''}`}>
      
      <Topbar
        lightMode={lightMode} 
        setLightMode={setLightMode}
        toShow={scrollPos >= height / 2}
      />
      
      <div className='sections'>
        <Intro/>
        <Jobs/>
        <Projects/>
        <Contact/>
      </div>
    
    </div>
  );
}

export default App;
