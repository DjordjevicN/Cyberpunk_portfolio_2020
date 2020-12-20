
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Menu from './components/Menu'
import './CSS/Menu.css'
import './CSS/Home.css'
import './CSS/Glitch.css'
import './CSS/Projects.css'
import './CSS/Skills.css'
import './CSS/AboutMe.css'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import video from './components/video/2.mp4'
import { AnimatePresence } from 'framer-motion'

function App() {


  return (
    <>
      <div className="App">
        <video id="bgVid" autoPlay loop muted >
          <source src={video} type="video/mp4" />
        </video>
        <div className="content" style={{ height: "100vh", width: '100%', backgroundImage: 'url("/images/CYBFrameBackground.png")', backgroundPosition: 'bottom left', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
        </div>
        <div className="pages">
          <Menu />
          <AnimatePresence>
            <Switch >

              <Route path='/' exact component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/skills' component={Skills} />
              <Route path='/aboutMe' component={AboutMe} />
            </Switch>
          </AnimatePresence>
        </div>

      </div>
    </ >
  );
}

export default App;
