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
                <a ref={logoItem} href='/home'><img src="https://res.cloudinary.com/dhiirsba5/image/upload/v1708102028/lvsag27vfeuhphejnm8p.png" alt='company logo' className='company-logo' /></a>
                <ul>
                    <li ref={emotionItem} ><a href='/emotions'>Emotions</a></li>
                    <li ref={manifestoItem}><a href='/manifesto'>Manifesto</a></li>
                    <li ref={selfAwarenessItem}><a href='/self-awareness'>Self-awareness test</a></li>
                    <li ref={workWithUsItem}><a href='/work-with-us'>Work with us</a></li>
                    <li ref={downloadItem} className="nav-item-download">Download App</li>
                </ul>
                <div>
                    <button ref={loginItem} className='login-btn'>Login</button>
                    <button ref={signupItem} className='sign-up-btn'>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default Header;