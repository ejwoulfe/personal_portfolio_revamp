import React from 'react';
import './description_panel.scss';
import code from '../../../assets/icons/svg/code.svg';
import internet from '../../../assets/icons/svg/internet.svg';
import wrench from '../../../assets/icons/svg/wrench.svg';
import video from '../../../assets/icons/svg/video.svg';

function DescriptionPanel(props) {


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

    function goToUrl(url) {

        window.open(url);

    }

    function createLiveWebsiteIcon(url) {
        if (url === "Work in progress.") {
            return (
                <span>
                    <img src={wrench} alt="website is still a work in progress."></img>
                    <h4>Work in progress</h4>
                </span>
            );
        } else {
            return (

                <span onClick={() => goToUrl(url)}>
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
                <p>{props.description}</p>
            </div>

            <div className="goals">
                <h3>Goals</h3>
                {arrayIntoListFormat(props.goals)}
            </div>

            <div className="accomplishments">
                <h3>Accomplishments</h3>

                {arrayIntoListFormat(props.accomplishments)}

                <div className="links">
                    <span>
                        <img src={video} alt="link to a demo of the project"></img>
                        <h4>Demo</h4>
                    </span>
                    <span onClick={() => goToUrl(props.githubURL)}>
                        <img src={code} alt="link to github repository"></img>
                        <h4>Code</h4>
                    </span>
                    {createLiveWebsiteIcon(props.liveURL)}
                </div>
                <div className="border_bottom_right"></div>

            </div>

        </div>
    )
}
export default DescriptionPanel;