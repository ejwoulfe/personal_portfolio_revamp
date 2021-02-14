import React from 'react';
import './banner.scss';
import self_image from '../../assets/mountain.jpg';
import githubWhite from '../../assets/icons/github-white.svg';
import resume from '../../assets/icons/resume.svg';


function Banner() {

    function goToGithub(){
        window.open("https://github.com/ejwoulfe");
    }

    return (

        <div id="banner">
            <div id="banner_image">
                <div id="banner_links">
                    <span>
                    <img src={githubWhite} onClick={() => goToGithub()} alt="link to my github"></img>
                    <h5>Github</h5> 
                </span>
                <span>
                    <img src={resume} alt="pdf file of my resume"></img>
                    <h5>Resume</h5>
                </span>
                </div>
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