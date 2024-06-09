import React from 'react'
import logo from '../Assets/logo.svg'
import email from '../Assets/smsicon.svg'
import phone from '../Assets/callicon.svg'
const Footer = () => {
    return (
        <div id="Footer">
            <div className="container">
                <div className="grid_wrapper">
                    <div className="Contact_info">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="contact">
                            <img className='icon' src={email} alt="" />
                            <a className='link' href="mailto:help@frybix.com">help@frybix.com</a>
                        </div>
                        <div className="contact">
                            <img className='icon' src={phone} alt="" />
                            <a className='link' href="Tel:1 234 456 678 89">+1 234 456 678 89</a>
                        </div>
                    </div>
                    <div className="links">
                        <div className="heading">Links</div>
                        <div className="link_wrapper">
                            <a href='#' className="link">Home</a>
                            <a href='#' className="link">About Us</a>
                            <a href='#' className="link">Bookings</a>
                            <a href='#' className="link">Vlog</a>
                        </div>
                    </div>
                    <div className="legal">
                        <div className="heading">Legal</div>
                        <div className="link_wrapper">
                            <a href='#' className="link">terms of use</a>
                            <a href='#' className="link">privacy policy</a>
                            <a href='#' className="link">cookie policy</a>
                        </div>
                    </div>
                    <div className="product">

                        <div className="heading">Products</div>
                        <div className="link_wrapper">
                            <a href='#' className="link">take tour</a>
                            <a href='#' className="link">live chat</a>
                            <a href='#' className="link">reveiws</a>
                        </div>
                    </div>
                    <div className="newsletter">
                        <div className="heading">Newsletter</div>
                        Stay Up to date
                        <div className="input_wrapper">

                            <input className='newsLetterInput' type="email" placeholder='Your Email' />
                            <div className="button">Subscribe</div>
                        </div>

                    </div>
                </div>
                <div className="divider"></div>
                <div className="copyright">
                    Copyright 2022 uifry.com all rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer