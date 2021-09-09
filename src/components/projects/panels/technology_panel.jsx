import React, { useState } from 'react';
import './technology_panel.scss';
import github from '../../../assets/icons/svg/github-white.svg';
import internet from '../../../assets/icons/svg/internet.svg';
import wrench from '../../../assets/icons/svg/wrench.svg';
import video from '../../../assets/icons/svg/play-button.svg';
import ModalVideo from 'react-modal-video'

function TechnologyPanel(props) {

    const [isOpen, setIsOpen] = useState(false);

    function createTechIcons(techStack) {

        let jsxArray = [];

        // Iterate through the object making an img for the technology icon and an h5 for the technology name.
        for (let name in techStack) {
            let techIcon = techStack[name];

            jsxArray.push(

                <span key={name} className="technology">
                    <img src={techIcon} alt={name}></img>
                    <h5>{name}</h5>
                </span>

            )
        }

        return jsxArray;
    }
    function createLiveWebsiteIcon(url) {

        // Check if the project has a live website or not, indicated by a string if not.
        if (url === "Work in progress.") {
            return (
                <span>
                    <img src={wrench} alt="website is still a work in progress."></img>
                    <h4>Work in progress</h4>
                </span>
            );
        } else {
            return (

                <span onClick={() => window.open(url)}>
                    <img src={internet} alt="link to live website"></img>
                    <h4>Live Website</h4>
                </span>)

        }
    }

    return (

        <div className="technology_panel">

            <h1 className="project_name">{props.name}</h1>
            <img className="project_image" src={props.image} alt={props.name}></img>
            <div className="links">
                <span onClick={() => setIsOpen(true)} >
                    <img src={video} alt="link to a demo of the project"></img>
                    <h4>Demo</h4>
                </span>
                <span onClick={() => window.open(props.githubURL)}>
                    <img src={github} alt="link to github repository"></img>
                    <h4>GitHub</h4>
                </span>

                {createLiveWebsiteIcon(props.liveURL)}

            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={props.videoURL} onClose={() => setIsOpen(false)} />
            <h3 className="tech_title">Technologies Used</h3>
            <div className="project_tech">
                <div className="border_top_left"></div>
                <div className="border_top_right"></div>

                {createTechIcons(props.techStack)}

                <div className="border_bottom_left"></div>
                <div className="border_bottom_right"></div>

            </div>

        </div>
    )
}
export default TechnologyPanel;