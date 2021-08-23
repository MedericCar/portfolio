import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Jobs from './components/jobs/Jobs';
import Projects from './components/projects/Projects';
import Topbar from './components/topbar/Topbar';
import './app.scss'

function App() {
  return (
    <div className='app'>
      <Topbar/>
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
