import React from 'react'
import '../CSS/Home.css'
import logo from '../Assets/logo.svg'

const Header = () => {
    return (
        <div id="Header">
            <div className="container">
                <div className="content_wrapper">
                    <div className="logo_link_wrapper">
                        <div className="logo">
                            <img className='logo' src={logo} alt="" />
                        </div>
                        <div className="links_wrapper">
                            <a className="links active" href="Home">Home</a>
                            <a className="links" href="About">About Us</a>
                            <a className="links" href="Pricing">Pricing</a>
                            <a className="links" href="Features">Features</a>
                        </div>
                    </div>
                    <div className="button_wrapper">
                        <div className="button">Download</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header