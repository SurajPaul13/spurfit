import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import './WorkWithUs.css'

const workWithUsContent = [
  {
    head: "Play and grow together with others on the same journey",
    info: "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals."
  },
  {
    head: "Master how to make it happen in real life",
    info: "We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashcards."
  },
  {
    head: "Unlock the potential within you",
    info: "Discover your hidden talents and unleash your full potential with personalized coaching and mentorship."
  },
  {
    head: "Join a community of like-minded individuals",
    info: "Connect with others who share your passion and drive, creating a supportive network for growth and success."
  },
  {
    head: "Take control of your destiny",
    info: "Empower yourself with the knowledge and skills needed to chart your own course and shape your future."
  },
  {
    head: "Embrace challenges as opportunities",
    info: "View obstacles as stepping stones to success, embracing failure as a valuable learning experience."
  },
  {
    head: "Celebrate progress, big and small",
    info: "Acknowledge and celebrate every milestone along the way, recognizing the effort and dedication it took to get there."
  },
  {
    head: "Make learning an adventure",
    info: "Explore new ideas, concepts, and skills with enthusiasm and curiosity, turning every lesson into an exciting journey."
  },
  {
    head: "Transform your passion into purpose",
    info: "Channel your passions into meaningful projects and pursuits, finding fulfillment and purpose in everything you do."
  },
  {
    head: "Build a legacy that inspires others",
    info: "Leave behind a lasting impact that motivates and empowers others to pursue their dreams and create positive change."
  }
];


const WorkWithUs = () => {

  useEffect(() => {
    gsap.fromTo('.wwu-left-head',{
      x:-200,
      scrub:true
    },{
      ScrollTrigger:{
        trigger:'.wwu-left-head',
        start:'top 80%',
        end:'bottom top'
      },
      x:20,
      ease:'none',
      duration:1.5,

    })
  })

  useEffect(() => {
    gsap.fromTo('.wwu-right-head',{
      x:200,
      scrub:true
    },{
      ScrollTrigger:{
        trigger:'.wwu-left-head',
        start:'top 80%',
        end:'bottom top'
      },
      x:-20,
      ease:'none',
      duration:1.5,

    })
  })


  const createCard = item => {
    const { head, info } = item

    return <>
      <div className='ahead-card-container'>
        <h3>{head}</h3>
        <p>{info}</p>
      </div>
    </>
  }

  return (
    <div className="wwumain">
      <div className='wwu-head-container'>
        <h1 className='wwu-left-head'>Work with us</h1>
        <h1 className='wwu-right-head'>ahead</h1>
      </div>
      <div className='wwu-sub-container'>
        <div className='wwu-divL'>
          <div className='wwu-about-card'>
            <h1 className='wwu-head'>About</h1>
            <p className='wwu-info'>At ahead our goal is to make self-improvemt fun and lasting.We know there is a way how to make it work. And thats what aHead is about!</p>
          </div>
          <div className='wwu-product-card'>
            <h1 className='wwu-head'>Product</h1>
            <p className='wwu-info'>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
          </div>
        </div>
        <div className='wwu-divR'>
          {workWithUsContent.map(each => createCard(each))}
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
