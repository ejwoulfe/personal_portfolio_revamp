import React, { useState } from 'react';
import './description_panel.scss';
import code from '../../../assets/icons/svg/code.svg';
import internet from '../../../assets/icons/svg/internet.svg';
import wrench from '../../../assets/icons/svg/wrench.svg';
import video from '../../../assets/icons/svg/video.svg';
import ModalVideo from 'react-modal-video'

function DescriptionPanel(props) {

    const [isOpen, setIsOpen] = useState(false);


    // Take in an array from the project object and put it into a list format.
    function arrayIntoListFormat(array) {
        return (
            <ul>
                {array.map((value, index) => {
                    return (
                        <li className="list_item" key={index}>{value}</li>
                    )
                })}
            </ul>
        )

    }

    // Format the description array from the object into a paragraph.
    function arrayIntoDescription(descriptionText) {
        return (
            <div>
                {descriptionText.map((value) => {

                    return <p>{value}</p>;

                })
                }
            </div>
        );
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
        <div className="description_panel">
            <div className="description">
                <div className="border_top_left"></div>
                <h3>Description</h3>

                {arrayIntoDescription(props.description)}

            </div>

            <div className="goals">
                <h3>Goals</h3>

                {arrayIntoListFormat(props.goals)}

            </div>

            <div className="accomplishments">
                <h3>Accomplishments</h3>

                {arrayIntoListFormat(props.accomplishments)}

                <div className="links">
                    <span onClick={() => setIsOpen(true)} >
                        <img src={video} alt="link to a demo of the project"></img>
                        <h4>Demo</h4>
                    </span>
                    <span onClick={() => window.open(props.githubURL)}>
                        <img src={code} alt="link to github repository"></img>
                        <h4>Code</h4>
                    </span>

                    {createLiveWebsiteIcon(props.liveURL)}

                </div>
                <div className="border_bottom_right"></div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={props.videoURL} onClose={() => setIsOpen(false)} />

            </div>

        </div>
    )
}
export default DescriptionPanel;