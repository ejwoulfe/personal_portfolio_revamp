import React from 'react';
import './technologyCard.scss';

function TechnologyCard(props) {

    function createLanguageIcon(languages) {
        if (languages !== undefined) {
            let jsxArray = [];
            for (let name in languages) {
                let languageIcon = languages[name];
                jsxArray.push(
                    <span className="language_container">
                        <img src={languageIcon} alt={name}></img>
                        <h5>{name}</h5>
                    </span>
                )

            }
            return jsxArray;
        }


    }
    return (

        <div className="tech_card_container">
            <h3 className="card_title">{props.type}</h3>
            <div className="tech_stack_container">
                <h4 className="weekly_usage_title">Daily/Weekly Usage</h4>
                <div className="weekly_usage_container">
                    {createLanguageIcon(props.weekly)}


                </div>
                <h4 className="past_usage_title">Daily/Weekly Usage</h4>
                <div className="past_usage_container">


                    {createLanguageIcon(props.past)}
                </div>
            </div>

        </div>


    );
}

export default TechnologyCard;