import React from 'react'
import icon1 from '../Assets/icon1.svg'
import icon2 from '../Assets/icon2.svg'
import icon3 from '../Assets/icon3.svg'
import image from '../Assets/img3.png'

const Features = () => {
    return (
        <div id="Features">
            <div className="container">
                <div className="grid_wrapper">
                    <div className="imgBox">
                        <img src={image} alt="" />
                    </div>
                    <div className="infoBox">
                        <div className="header_wrapper">
                            <div className="subheading">features</div>
                            <div className="heading">uifry premium</div>
                        </div>
                        <div className="box">
                            <div className="titleWrapper">
                                <img className="icon" src={icon1} alt="" />
                                <div className="title">budgeting intervals</div>
                            </div>
                            <div className="description">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
                        </div>
                        <div className="box">
                            <div className="titleWrapper">
                                <img className="icon" src={icon2} alt="" />
                                <div className="title">budgeting intervals</div>
                            </div>
                            <div className="description">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
                        </div>
                        <div className="box">
                            <div className="titleWrapper">
                                <img className="icon" src={icon3} alt="" />
                                <div className="title">budgeting intervals</div>
                            </div>
                            <div className="description">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features