import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './WorkWithUs.css'

const WorkWithUs = () => {

  return (
    <div className="wwumain">
      <div className='wwu-head-container'>
        <h1 className='wwu-left-head'>Work with us</h1>
        <h1 className='wwu-right-head'>ahead</h1>
      </div>
      <div className='wwu-divL'>
        <div className='wwu-about-card'>
          <img src=''/>
          <h1></h1>
          <p></p>
        </div>
        <h1></h1>
        <p></p>
      </div>
      <div className='wwu-divR'>
        {/* cards for scroll */}
      </div>
    </div>
  );
};

export default WorkWithUs;
