import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Emotions from './components/Emotions/Emotions'
import SelfAwareness from './components/SelfAwareness/SelfAwareness'
import Manifesto from './components/Manifesto/Manifesto'
import './App.css'

const App = () => {
  return (
    <div className='main'>
      <Header />
      <div className='sections-container'>
        <LandingPage />
      </div>
      <div>
        <Emotions />
      </div>
      <div>
        <Manifesto />
      </div>
      <div>
        <SelfAwareness />
      </div>
      <div>
      </div>
    </div>
  )
}

export default App