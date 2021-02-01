import React from 'react';
import './technologyCard.scss';

function TechnologyCard(props) {

    function createLanguageIcon(languages) {
        if (languages !== undefined) {
            let jsxArray = [];
            for (let name in languages) {
                let languageIcon = languages[name];
                jsxArray.push(
                    <span className="language">
                        <img src={languageIcon} alt={name}></img>
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
                    {createLanguageIcon(props.weekly)}


                </div>
                <h4 className="past_title">Daily/Weekly Usage</h4>
                <div className="past_usage">


                    {createLanguageIcon(props.past)}
                </div>
            </div>

        </div>


    );
}

export default TechnologyCard;