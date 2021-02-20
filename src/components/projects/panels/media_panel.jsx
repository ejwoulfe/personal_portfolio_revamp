import React from 'react';
import './media_panel.scss';

function MediaPanel(props) {


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
        <div className="media_panel">
            <h1 className="project_name">{props.name}</h1>
            <img className="project_image" src={props.image} alt={props.name}></img>
            <h3 className="tech_title">Technologies Used</h3>
            <div className="project_tech">
                <div id="border_top_left"></div>
                <div id="border_top_right"></div>

                {createTechIcons(props.techStack)}
                <div id="border_bottom_left"></div>
                <div id="border_bottom_right"></div>

            </div>
        </div>
    )
}
export default MediaPanel;