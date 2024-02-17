import React,{useRef, useEffect} from 'react'
import { TweenMax, Power3 } from 'gsap'
import './Emotions.css'

const sliderDetails = [
  {
    id: 1,
    emoji: 'https://img.icons8.com/emoji/48/relieved-face.png',
    head: 'Emotional Intelligence & Mind-Body Connection',
    content: 'Did you know emotional intelligence influences the mind-body connection? High EQ allows better recognition of bodily signals, leading to improved physical health. Managing emotions fosters harmony between mental and physical well-being.',
    bgColor: '#2F4F4F'
  },
  {
    id: 2,
    emoji: 'https://img.icons8.com/emoji/48/man-lifting-weights.png',
    head: 'Fitness & Emotional Well-being',
    content: 'Regular exercise boosts emotional well-being by releasing endorphins. These "feel-good" hormones enhance mood and reduce stress. Integrating fitness into your routine promotes emotional balance and overall wellness.',
    bgColor: '#333333'
  },
  {
    id: 3,
    emoji: 'https://img.icons8.com/emoji/48/seedling.png',
    head: 'Healthy Habits for Emotional Resilience',
    content: 'Healthy habits like meditation and journaling reduce stress and bolster emotional resilience. Cultivating these practices fosters a positive outlook and equips individuals to navigate life’s challenges more effectively.',
    bgColor: '#555555'
  },
  {
    id: 4,
    emoji: 'https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/40C057/external-apple-fruit-vitaliy-gorbachev-fill-vitaly-gorbachev.png',
    head: 'Nutrition\'s Role in Emotional Health',
    content: 'Nutrition impacts emotional health profoundly. A balanced diet rich in nutrients supports brain function and mood regulation. Mindful eating choices contribute to emotional well-being and quality of life.',
    bgColor: '#191970'
  },
  {
    id: 5,
    emoji: 'https://img.icons8.com/emoji/48/sleeping-face.png',
    head: 'Sleep Quality & Emotional Intelligence',
    content: 'Quality sleep is vital for emotional intelligence. Sleep deprivation impairs cognitive function and emotional regulation, hindering stress management. Prioritizing sleep enhances emotional resilience and well-being.',
    bgColor: '#000000'
  },
  {
    id: 6,
    emoji: 'https://img.icons8.com/emoji/48/heart-with-arrow-emoji.png',
    head: 'Relationships & Emotional Health',
    content: 'Strong relationships contribute to emotional well-being. Connecting with others fosters empathy, support, and a sense of belonging, enhancing overall emotional health.',
    bgColor: '#6B8E23'
  },
  {
    id: 7,
    emoji: 'https://img.icons8.com/emoji/48/smiling-face.png',
    head: 'Positive Thinking & Emotional Resilience',
    content: 'Positive thinking cultivates emotional resilience by shifting focus to solutions and opportunities rather than dwelling on problems. It enhances coping skills and fosters optimism.',
    bgColor: '#FFD700'
  },
  {
    id: 8,
    emoji: 'https://img.icons8.com/plasticine/100/brain.png',
    head: 'Mindfulness & Emotional Awareness',
    content: 'Mindfulness practices enhance emotional awareness by grounding individuals in the present moment. It fosters acceptance of thoughts and feelings without judgment, leading to greater emotional balance.',
    bgColor: '#4682B4'
  },
  {
    id: 9,
    emoji: 'https://img.icons8.com/color/48/healthy-food-calories-calculator.png',
    head: 'Diet & Mood Regulation',
    content: 'Nutrient-rich foods like fruits, vegetables, and whole grains positively impact mood regulation. A balanced diet supports brain health and neurotransmitter function, influencing emotional well-being.',
    bgColor: '#8B4513'
  },
  {
    id: 10,
    emoji: 'https://img.icons8.com/emoji/48/relieved-face.png',
    head: 'Stress Management & Emotional Resilience',
    content: 'Effective stress management techniques like deep breathing, exercise, and relaxation exercises promote emotional resilience. They help reduce stress levels and improve coping skills.',
    bgColor: '#808080'
  }
];

const Emotions = () => {

  let thinkingEmoji = useRef(null)

  useEffect(() => {
    TweenMax.fromTo(thinkingEmoji.current,2,{x:60, y:40,},{x:0,y:0,ease: Power3.easeOut})
  },[])

  const createSliderCards = (slider) => {
    const {id, emoji, head, content, bgColor} = slider

    return (
    <div className='slider' style={{backgroundColor:bgColor}}>
      <img height='48px' width='48px' src={emoji} alt={id}/>
      <h3 className='slider-heading'>{head}</h3>
      <p className='slider-content'>{content}</p>
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
          <img ref={thinkingEmoji} width="48" height="48" src="https://img.icons8.com/emoji/48/thinking-face.png" alt="thinking-face"/>
        </div>
        <div className='slider-cards'>
          {sliderDetails.map(slider => createSliderCards(slider))}
        </div>
      </div>
    </div>
  )
}

export default Emotions
