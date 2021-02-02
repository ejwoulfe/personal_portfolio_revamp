import React from 'react';
import './left_panel.scss';

function LeftPanel(props) {


    function createTechIcons(techStack) {


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

    return (
        <div className="left_panel">
            <h1 className="project_name">{props.name}</h1>
            <img className="project_image" src={props.image} alt={props.name}></img>
            <h3 className="tech_title">Technologies Used</h3>
            <div className="project_tech">

                {createTechIcons(props.techStack)}

            </div>
        </div>
    )
}
export default LeftPanel;