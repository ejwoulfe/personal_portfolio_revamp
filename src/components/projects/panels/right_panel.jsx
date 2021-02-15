import React from 'react';
import './right_panel.scss';
import code from '../../../assets/icons/code.svg';
import internet from '../../../assets/icons/internet.svg';
import wrench from '../../../assets/icons/wrench.svg';

function RightPanel(props) {


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
        <div className="right_panel">
            <div className="description">
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

            </div>
            {/* <div className="links">
                <span onClick={() => goToUrl(props.githubURL)}>
                    <img src={code} alt="link to github repository"></img>
                    <h4>Code</h4>
                </span>
                {createLiveWebsiteIcon(props.liveURL)}
            </div> */}
        </div>
    )
}
export default RightPanel;