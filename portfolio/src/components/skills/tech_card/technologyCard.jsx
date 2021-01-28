import React from 'react';
import './technologyCard.scss';

function TechnologyCard(props) {

    function createLanguageIcon(languages) {
        if (languages !== undefined) {
            for (let name in languages) {
                let languageIcon = languages[name];
                return (
                    <span className="language_container">
                        <img src={languageIcon} alt={name}></img>
                        <h5>{name}</h5>
                    </span>
                )
                continue;
            }

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
                <div className="past_usage_container">

                </div>
            </div>

        </div>


    );
}

export default TechnologyCard;