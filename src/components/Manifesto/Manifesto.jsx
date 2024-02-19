import React, { useRef,useEffect, useState } from 'react';
import { gsap,TweenMax,Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Manifesto.css';

const bulletPoints = [
  {
    bulletPoint: 'Neglecting mental health—prioritizing mindfulness and therapy for holistic well-being and personal growth.',
    color: '#FF5733' 
  },
  {
    bulletPoint: 'Lacking boundaries—establishing clear limits and prioritizing self-care without guilt for improved mental health.',
    color: '#33FF57' 
  },
  {
    bulletPoint: 'Vague goals—implementing SMART goal-setting techniques to measure progress and stay motivated effectively.',
    color: '#5733FF' 
  },
  {
    bulletPoint: 'Avoiding feedback—creating safe spaces for open communication and constructive criticism to foster growth.',
    color: '#FF5733' 
  },
  {
    bulletPoint: 'Neglecting physical health—emphasizing regular exercise, nutritious eating habits, and sufficient rest for overall well-being.',
    color: '#33FF57' 
  },
  {
    bulletPoint: 'Comparison—fostering self-compassion and focusing on individual progress rather than external benchmarks for personal growth.',
    color: '#5733FF' 
  },
  {
    bulletPoint: 'Fear of failure—embracing failure as a learning opportunity and cultivating resilience for continuous personal development.',
    color: '#FF5733' 
  }
];

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const dotOne = useRef(null)
  const dotTwo = useRef(null)
  const dotThree = useRef(null)
  const dotFour = useRef(null)
  const dotFive = useRef(null)
  const dotSix = useRef(null)
  const dotSeven = useRef(null)

  const refDotArray = [dotOne, dotTwo, dotThree, dotFour, dotFive, dotSix, dotSeven]

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    TweenMax.to(refDotArray[index].current, .8, { width: 60, height: 60, ease: Power3.easeOut });
  };

  const handleMouseLeave = (index) => {
    setActiveIndex(null);
    TweenMax.to(refDotArray[index].current, .8, { width: 20, height: 20, ease: Power3.easeOut });
  };

  useEffect(() => {
    const manifestoTimeline = gsap.timeline();
    manifestoTimeline.staggerFromTo(
        refDotArray.map(ref => ref.current),
        0.8,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0 },
        0.2
    );

    ScrollTrigger.batch(refDotArray.map(ref => ref.current), {
        start: 'top 60%', 
        onEnter: batch => manifestoTimeline.play(),
        scrub: true
      });
    });


  return (
    <div id="manifesto" className='manifesto'>
      <div className='manifesto-head-container'>
        <h3>Wrong with self-improvement & how we're fixing it.</h3>
        <div className='manifesto-heading'>
          <h1>Self Improvement. Ugh.</h1>
          <img height='50px' width='50px' src='https://img.icons8.com/emoji/48/face-with-steam-from-nose.png' alt='Ugh!'/>
        </div>
        <div className='bullet-points-main-container'>
        {bulletPoints.map((each, index) => (
            <div key={index} className='bullet-point' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
              <div ref={refDotArray[index]} className='bullet-dot' style={{ backgroundColor: each.color }}></div>
              <p>{each.bulletPoint}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
