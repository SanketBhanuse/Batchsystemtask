import React from 'react'
import image1 from '../Assets/img4.png'
import image2 from '../Assets/img5.png'
import icon1 from '../Assets/icon4.svg'
import icon2 from '../Assets/icon5.svg'

const Advantages = () => {
    return (
        <div id="Advantages">
            <div className="container">
                <div className="contentWrapper">
                    <div className="grid_wrapper_1">
                        <div className="infoBlock">
                            <div className="header">
                                <div className="subHeading">advatnages</div>
                                <div className="Heading">why choose Uifry?</div>
                            </div>
                            <div className="titleWrapper">
                                <img className='icon' src={icon1} alt="" />
                                clever notifications
                            </div>
                            <div className="description">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
                        </div>
                        <div className="imgBlock">
                            <img className='image' src={image1} alt="" />
                        </div>
                    </div>
                    <div className="grid_wrapper_2">
                        <div className="imgBlock">
                            <img className='image' src={image2} alt="" />
                        </div>
                        <div className="infoBlock">
                            <div className="titleWrapper">
                                <img className='icon' src={icon2} alt="" />
                                fully customizable
                            </div>
                            <div className="description">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages