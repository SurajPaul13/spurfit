import React, { useRef,useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './WorkWithUs.css'

gsap.registerPlugin(ScrollTrigger);

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

  const aboutCardRef = useRef(null)
  const productCardRef = useRef(null)

  useEffect(() => {
    const animationTimeline = gsap.timeline();

    ScrollTrigger.create({ // Initialize ScrollTrigger
      trigger: '.wwumain',
      start: 'top 80%',
      end: 'bottom top',
      scrub: true
    });

    animationTimeline.fromTo('.wwu-left-head', {
      x: -200,
    }, {
      x: 20,
      ease: 'none',
      duration: 1.5,
      scrollTrigger: {
        trigger: '.wwu-left-head',
        start: 'top 80%',
        onRefresh: ScrollTrigger.refresh
      }
    });
  
    animationTimeline.fromTo('.wwu-right-head', {
      x: 200,
    }, {
      x: -20,
      ease: 'none',
      duration: 1.5,
      scrollTrigger: {
        trigger: '.wwu-right-head',
        start: 'top 80%',
        onRefresh: ScrollTrigger.refresh
      }
    }, 0);

    {/*animationTimeline.fromTo(
      aboutCardRef.current,
      { opacity: 0, x: 90 },
      { opacity: 1, x: 0, duration: 2, ease: Power3.easeOut,
        scrollTrigger: {
          trigger: '.wwu-left-head',
          onEnter: () => animationTimeline.play(),
          onLeaveBack: () => animationTimeline.reverse(),
          onRefresh: ScrollTrigger.refresh
        } },
      0.2
      );*/}

      animationTimeline.fromTo(aboutCardRef.current, {
        x: -200,
      }, {
        x: 20,
        ease: 'none',
        duration: 1.5,
        scrollTrigger: {
          trigger: '.wwu-left-head',
          start: 'top 80%',
          onRefresh: ScrollTrigger.refresh
        }
      });
      animationTimeline.fromTo(productCardRef.current, {
        x: -200,
      }, {
        x: 20,
        ease: 'none',
        duration: 1.5,
        scrollTrigger: {
          trigger: '.wwu-left-head',
          start: 'top 80%',
          onRefresh: ScrollTrigger.refresh
        }
      });

    {/*animationTimeline.fromTo(
      productCardRef.current,
      { opacity: 0, x: 90 },
      { opacity: 1, x: 0, duration: 2, ease: Power3.easeOut,scrollTrigger: {
        trigger: '.wwu-right-head',
        onEnter: () => animationTimeline.play(),
        onLeaveBack: () => animationTimeline.reverse(),
        onRefresh: ScrollTrigger.refresh
      } },
      0.2
    );*/}

    animationTimeline.fromTo(
      '.wwu-divR',
      { opacity: 0, y: 90 },
      { opacity: 1, y: 0, duration: 2, ease: 'none',
      duration: 1.5,
      scrollTrigger: {
        trigger: '.wwu-left-head',
        start: 'top 80%',
        onRefresh: ScrollTrigger.refresh
      } },
      0.2
    );
  }, []);

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
          <div ref ={aboutCardRef}  className='wwu-about-card'>
            <h1 className='wwu-head'>About</h1>
            <p className='wwu-info'>At ahead our goal is to make self-improvemt fun and lasting.We know there is a way how to make it work. And thats what aHead is about!</p>
          </div>
          <div ref ={productCardRef}  className='wwu-product-card'>
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
