import React from 'react';
import './banner.scss';
import self_image from '../../assets/mountain.jpg';


function Banner() {

    return (

        <div id="banner">
            <div id="banner_image">
            </div>
            <div id="personal_info">
                <img id="self_portrait" src={self_image} alt="Me on a mountain"></img>
                <div id="name_and_role">
                    <h1 id="name" >Ed Woulfe</h1>
                    <h1 id="role">Web Developer</h1>
                </div>
            </div>
        </div>

    )
}
export default Banner;