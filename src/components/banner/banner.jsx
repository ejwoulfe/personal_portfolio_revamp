import React from 'react';
import './banner.scss';
import leftShape from '../../assets/banner_images/left-shape.png';
import rightShape from '../../assets/banner_images/right-shape.png';


function Banner() {



    return (

        <div id="banner">
            <img id="left_shape" src={leftShape} alt="shape with code background"></img>
            <div id="personal_info">
                <div id="name">
                    <h1>Ed Woulfe</h1>
                </div>
                <div id="role">
                    <h1>Web Developer</h1>
                </div>
            </div>
            <img id="right_shape" src={rightShape} alt="shape with code background"></img>

        </div>

    )
}
export default Banner;