import React from 'react'
import Imgright from '../Assets/img1.png'
import Imgdown from '../Assets/img2.png'
import icon1 from '../Assets/arrow.svg'
import icon2 from '../Assets/play.svg'

const FirstSection = () => {
    return (
        <div id="FirstSection">
            <div className="container">
                <div className="grid_wrapper">
                    <div className="infoBox">
                        <div className="heading">make the best financial decisions</div>
                        <div className="description">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
                        <div className="buttonWrapper">
                            <div className="button1">
                                get started <img className='icon' src={icon1} alt="" />
                            </div>
                            <div className="button2">
                                <img className='icon' src={icon2} alt="" /> watch video
                            </div>
                        </div>
                    </div>
                    <div className="downImg">
                        <img src={Imgdown} alt="" />
                    </div>
                    <div className="rightImg">
                        <img src={Imgright} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection