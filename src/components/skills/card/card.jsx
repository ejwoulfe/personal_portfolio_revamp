import React from 'react';
import './card.scss';

function Card(props) {

    function createTechIcon(techStack) {

        if (techStack !== undefined) {
            let jsxArray = [];

            // Iterate through the object making an img for the technology icon and an h5 for the technology name.
            for (let name in techStack) {
                let techIcon = techStack[name];

                jsxArray.push(

                    <span key={name} id={name} className="technology">
                        <img src={techIcon} alt={name}></img>
                        <h5>{name}</h5>
                    </span>

                )
            }

            return jsxArray;
        }
    }

    return (

        <div className="card">
            <div className="over_space"></div>

            <h3 className="card_title">{props.type}</h3>
            <div className="tech_stack">
                <h4 className="weekly_title">Daily/Weekly Usage</h4>
                <div className="weekly_usage">

                    {createTechIcon(props.weekly)}

                </div>
                <h4 className="past_title">Used in Past Projects/School</h4>
                <div className="past_usage">

                    {createTechIcon(props.past)}

                </div>
            </div>
            <div className="under_space"></div>

        </div>


    );
}

export default Card;