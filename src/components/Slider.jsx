import React from 'react';
import { Carousel } from 'antd';
import hero1 from "../assets/images/1.webp";
import hero2 from "../assets/images/2.webp";
import hero3 from "../assets/images/3.webp";
import hero4 from "../assets/images/4.webp";
import hero5 from "../assets/images/5.webp";
import hero6 from "../assets/images/6.webp";
import hero7 from "../assets/images/7.webp";

const contentStyle = {
    height: '400px',
};
const Sliders = () => (
    <Carousel autoplay style={{width: "100%"}}>
        <div>
            <img src={hero1} alt="" style={contentStyle}/>
        </div>
        <div>
            <img src={hero2} alt="" style={contentStyle}/>
        </div>
        <div>
            <img src={hero3} alt="" style={contentStyle}/>
        </div>
        <div>
            <img src={hero4} alt="" style={contentStyle}/>
        </div>
        <div>
            <img src={hero5} alt="" style={contentStyle}/>
        </div>
        <div>
            <img src={hero6} alt="" style={contentStyle}/>
        </div>
        <div>
            <img src={hero7} alt="" style={contentStyle}/>
        </div>
    </Carousel>
);
export default Sliders;