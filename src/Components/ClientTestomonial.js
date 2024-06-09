import React, { useState } from 'react';
import img1 from '../Assets/img6.png';
import prof1 from '../Assets/prof1.svg';
import prof2 from '../Assets/prof2.svg';
import prof3 from '../Assets/prof3.svg';
import prof4 from '../Assets/prof4.svg';
import prof5 from '../Assets/prof5.svg';

const testimonials = [
    {
        name: "nick jonas",
        title: "the best financial accounting app ever!",
        description: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
        img: prof1
    },
    {
        name: "sophie turner",
        title: "a must-have for managing finances!",
        description: "“Suspendisse aliquam arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.”",
        img: prof2
    },
    {
        name: "john doe",
        title: "excellent tool for small businesses!",
        description: "“Mollis arcu at dictum sapien, suspendisse aliquam. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.”",
        img: prof3
    },
    {
        name: "jane smith",
        title: "an intuitive and powerful app!",
        description: "“Accumsan arcu at dictum sapien, mollis. Suspendisse aliquam. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.”",
        img: prof4
    },
    {
        name: "alex johnson",
        title: "great for tracking expenses!",
        description: "“Id accumsan arcu at dictum sapien, mollis. Vulputate sit suspendisse aliquam. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.”",
        img: prof5
    }
];

const ClientTestomonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleTabClick = (index) => {
        setCurrentTestimonial(index);
    };

    const { name, title, description, img } = testimonials[currentTestimonial];

    return (
        <div id='ClientTestomonial'>
            <div className="container">
                <div className="header">
                    <div className="subHeading">testimonial</div>
                    <div className="Heading">what our users <br /> say about us?</div>
                </div>
                <div className="gridWrapper">
                    <div className="infoBox">
                        <img src={img1} alt="" />
                    </div>
                    <div className="testomonial">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>

                        <div className="tabs">
                            {testimonials.map((testimonial, index) => (
                                <img
                                    key={index}
                                    className={`frofImg ${currentTestimonial === index ? 'active' : ''}`}
                                    src={testimonial.img}
                                    alt=""
                                    onClick={() => handleTabClick(index)}
                                />
                            ))}
                        </div>

                        <div className="name">{name}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientTestomonial;
