import React from 'react';
import './technology_panel.scss';


function TechnologyPanel(props) {

    function createTechIcons(techStack) {

        let jsxArray = [];

        // Iterate through the object making an img for the technology icon and an h5 for the technology name.
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

        <div className="technology_panel">

            <h1 className="project_name">{props.name}</h1>
            <img className="project_image" src={props.image} alt={props.name}></img>
            <h3 className="tech_title">Technologies Used</h3>
            <div className="project_tech">
                <div className="border_top_left"></div>
                <div className="border_top_right"></div>

                {createTechIcons(props.techStack)}

                <div className="border_bottom_left"></div>
                <div className="border_bottom_right"></div>

            </div>

        </div>
    )
}
export default TechnologyPanel;