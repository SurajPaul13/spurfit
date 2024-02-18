import { useRef, useEffect } from "react"
import { TweenMax, Power3 } from "gsap"


import './Header.css'

const Header = () => {
    let logoItem = useRef(null)
    let emotionItem = useRef(null)
    let manifestoItem = useRef(null)
    let selfAwarenessItem = useRef(null)
    let workWithUsItem = useRef(null)
    let downloadItem = useRef(null)
    let loginItem = useRef(null)
    let signupItem = useRef(null)
    
    useEffect(() => {
        TweenMax.staggerFromTo([logoItem.current,emotionItem.current,manifestoItem.current,selfAwarenessItem.current,workWithUsItem.current,downloadItem.current, loginItem.current, signupItem.current],0.2,{ opacity: 0, x: 20 },
            { opacity: 1, x: 0, ease: Power3.easeOut },0.15);
    })

    return (
        <div className="header-main">
            <nav className="navbar">
                <a ref={logoItem} rel="noreferrer"><img src="https://res.cloudinary.com/dhiirsba5/image/upload/v1708234095/Spurfit%20Resources/ckw010wwgb5vx9nm0ls2.png" alt='company logo' className='company-logo' /></a>
                <ul>
                    <li ref={emotionItem} >Emotions</li>
                    <li ref={manifestoItem}>Manifesto</li>
                    <li ref={selfAwarenessItem}>Self-awareness test</li>
                    <li ref={workWithUsItem}>Work with us</li>
                    <li ref={downloadItem} ><a className="nav-item-download" rel="noreferrer" href='https://apps.apple.com/in/app/spur-fit-personal-training/id1516471995' target='_blank'>Download App</a></li>
                </ul>
                <div>
                    <button ref={loginItem} className='login-btn'><a  href='https://trainer.spur.fit/' target='_blank' style={{'textDecoration':'none', 'color':'#fff'}}>Login</a></button>
                    <button ref={signupItem} className='sign-up-btn'><a href='https://trainer.spur.fit/trainersignup/'  target='_blank' style={{'textDecoration':'none', 'color':'#fff'}}>Sign Up</a></button>
                </div>
            </nav>
        </div>
    )
}

export default Header;