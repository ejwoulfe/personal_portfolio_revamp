import React from 'react';
import './technologyCard.scss';

function TechnologyCard(props) {

    function createTechIcon(techStack) {
        if (techStack !== undefined) {
            let jsxArray = [];
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
    }

    return (

        <div className="tech_card">
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

        </div>


    );
}

export default TechnologyCard;