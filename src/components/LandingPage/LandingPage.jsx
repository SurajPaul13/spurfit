import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap'
import './LandingPage.css'

const LandingPage = () => {

  let landingPageItem = useRef(null)
  let landingPageTag = useRef(null)
  let learnMoreButton = useRef(null)
  let hrItemTop = useRef(null)
  let hrItemBtm = useRef(null)

  useEffect(() => {
    TweenMax.fromTo(
      landingPageItem,
      2,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, ease: Power3.easeOut }
    );

    TweenMax.fromTo(
      landingPageTag,
      1,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, ease: Power3.easeOut, delay: .3 }
    );
    TweenMax.fromTo(
      hrItemTop.current,
      1,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, ease: Power3.easeOut, delay: .6 }
    );
    TweenMax.fromTo(
      hrItemBtm.current,
      1,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, ease: Power3.easeOut, delay: .6 }
    );
    TweenMax.fromTo(
      learnMoreButton.current,
      1,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, ease: Power3.easeOut, delay: .9 }
    );
  }, []);


  return (
    <div id='home' className="landing-page">
      <div ref={el => landingPageItem = el} className="main-content">
        <h1 ref={el => landingPageTag = el} className='landing-page-tag'>
          NOURISH <br />
          YOUR MIND, BODY,<br />
          AND SOUL</h1>
        <div className='learn-more-container'>
          <hr ref={hrItemTop} />
          <button ref={learnMoreButton} className='learn-more-btn'>Learn More</button>
          <hr ref={hrItemBtm} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage