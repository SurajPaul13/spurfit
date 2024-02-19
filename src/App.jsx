import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Emotions from './components/Emotions/Emotions'
import WorkWithUs from './components/WorkWithUs/WorkWithUs'
import Manifesto from './components/Manifesto/Manifesto'
import './App.css'

import { useRef, useEffect } from 'react'
import {TweenMax } from 'gsap'

const App = () => {

  let app = useRef(null)
  

  useEffect(() => {
    TweenMax.to(app.current, 0.5, { visibility: 'visible' });
  }, []);

  

  return (
    <div ref={app} className='app-container'>
      <Header />
      <main>
        <LandingPage />
          <Emotions />
        <Manifesto />
        <WorkWithUs />
      </main>
    </div>
  )
}

export default App