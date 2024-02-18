import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Emotions from './components/Emotions/Emotions'
import WorkWithUs from './components/WorkWithUs/WorkWithUs'
import Manifesto from './components/Manifesto/Manifesto'
import './App.css'

import { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import { gsap, TweenMax, Power4 } from 'gsap'

const App = () => {

  let app = useRef(null)
  let emotionsPage = useRef(null)

  const emotionIntersection = useIntersection(emotionsPage, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: Power4.out,
      stagger: {
        amount: 0.3
      }
    })
  }
  const fadeOut = (element) => {
    gsap.to(element, 2, {
      opacity: 0,
      y: -20,
      ease: Power4.out,
    })
  }

  useEffect(() => {
    TweenMax.to(app.current, 0.5, { visibility: 'visible' });
  }, []);

  useEffect(() => {
    if (emotionIntersection && emotionIntersection.intersectionRatio < 0.5) {
      fadeOut(emotionsPage.current);
    } else {
      fadeIn(emotionsPage.current);
    }
  }, [emotionIntersection]);

  return (
    <div ref={app} className='app-container'>
      <Header />
      <main>
        <LandingPage />
        <div ref={emotionsPage}>
          <Emotions />
        </div>
        <Manifesto />
        <WorkWithUs />
      </main>
    </div>
  )
}

export default App