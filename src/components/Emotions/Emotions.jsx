import React,{useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Emotions.css'
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll(true)

const sliderCards = ['https://res.cloudinary.com/dhiirsba5/image/upload/v1708250445/Spurfit%20Resources/u9gzdkzyerysvhmlj1ru.png', 
'https://res.cloudinary.com/dhiirsba5/image/upload/v1708250448/Spurfit%20Resources/hginuh5mhxva4zu6jmgl.png',
'https://res.cloudinary.com/dhiirsba5/image/upload/v1708250448/Spurfit%20Resources/bel752lwfhg0evkklok2.png',
'https://res.cloudinary.com/dhiirsba5/image/upload/v1708250463/Spurfit%20Resources/hljmsmeoxfxbrazuh7s0.png',
'https://res.cloudinary.com/dhiirsba5/image/upload/v1708250464/Spurfit%20Resources/unlhffrekvuprn5qeb83.png'
]


const Emotions = () => {

  const emotionsTimeline = gsap.timeline()

  useEffect(() => { })

  useEffect(() => {

    emotionsTimeline.fromTo('.slider',{
      opacity: 0,
      x:500,
      rotation:0,
      scrub:true,
    },{
      opacity:1,
      ScrollTrigger:{
        trigger:'.slider-heading-container',
        start:'top 80%',
        end:'bottom top'
    },
      x:0,
      ease:'none',
      duration:1,
    })

    emotionsTimeline.fromTo('.slider-heading-container',{
      x:-200,
      scrub:true
    },{
      ScrollTrigger:{
        trigger:'.slider-heading-container',
        start:'top 80%',
        end:'bottom top'
      },
      x:0,
      ease:'easeOut',
      duration:1,
    });
  })
  

  const createSliderCards = (slider) => {

    return (
    <div className='slider'>
      <img className='slider-images' src={slider} alt='paul'/>
    </div>)
  }

  return (
    <div id="emotions" className='emotions-container'>
      <div className='emotions-card-1'>
        <h1 className='eqbeats'>EQ Beats IQ</h1>
        <p className='info'>People with high emotional intelligence (EQ) live more fulfilled lives. They tend be happier and have healthier relationships.</p>
        <p className='info'>
          They are more successful in their career and make inspiring for leaders. According to science they tend to live long!
        </p>
      </div>
      <div className='emotions-slider-container'>
        <div className='slider-heading-container'>
          <h1 className='emotions-slider-heading'>Did you know ?</h1>
          <img width="48" height="48" src="https://img.icons8.com/emoji/48/thinking-face.png" alt="thinking-face"/>
        </div>
        <div className='slider-cards'>
          {sliderCards.map(slider => createSliderCards(slider))}
        </div>
      </div>
    </div>
  )
}

export default Emotions