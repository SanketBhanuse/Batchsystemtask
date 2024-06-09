import React from 'react'
import bg_img from '../Assets/bg1.png'
import appleIcon from '../Assets/appleicon.svg'

const BannerText = () => {
    return (
        <div id="BannerText">
            <div className="container">
                <div className="content_wrapper">
                    <img src={bg_img} alt="" />
                    <div className="textbox">
                        <div className="heading">ready to get started?</div>
                        <div className="description">Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</div>
                        <div className="button_wrapper">
                            Download App <img className='btnicon' src={appleIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerText