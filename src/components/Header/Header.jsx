import { Component } from "react"


import './Header.css'

class Header extends Component {

    onClick = () => {
        const a = 'b'
        return a
    }

    render(){
        return(
            <div  className="header-main">
                <nav className="navbar">
                    <a href='/home'><img src="https://res.cloudinary.com/dhiirsba5/image/upload/v1708102028/lvsag27vfeuhphejnm8p.png" alt='company logo' className='company-logo'/></a>
                    <ul>
                        <li ><a href='/emotions'>Emotions</a></li>
                        <li ><a href='/manifesto'>Manifesto</a></li>
                        <li ><a href='/self-awareness'>Self-awareness test</a></li>
                        <li ><a href='/work-with-us'>Work with us</a></li>
                        <li className="nav-item-download">Download App</li>
                    </ul>
                    <div>
                        <button className='login-btn'>Login</button>
                        <button className='sign-up-btn'>Sign Up</button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;