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
                <h4 className="proficient_title">Proficient at</h4>
                <div className="proficient_languages">

                    {createTechIcon(props.proficient)}

                </div>
                <h4 className="familiar_title">Familiar with</h4>
                <div className="familiar_languages">

                    {createTechIcon(props.familiar)}

                </div>
            </div>
            <div className="under_space"></div>

        </div>


    );
}

export default Card;