import React, { useEffect, useState } from 'react';
import fillFrontEndLanguages from './languages/frontEndLanguages';
import fillBackEndLanguages from './languages/backEndLanguages';
import fillToolSoftware from './languages/toolSoftware';
import TechnologyCard from './tech_card/technologyCard.jsx';
import './skills.scss';

function Skills() {

    const [frontEndLanguages, setFrontEndLanguages] = useState({});
    const [backEndLanguages, setBackEndLanguages] = useState({});
    const [toolSoftware, setToolSoftware] = useState({});


    useEffect(() => {
        setFrontEndLanguages(obj => fillFrontEndLanguages(obj))
        setBackEndLanguages(obj => fillBackEndLanguages(obj))
        setToolSoftware(obj => fillToolSoftware(obj))
    }, [])



    return (
        <div id="skills_container">
            <div id="header"> <h1 id="skills_title">Skills</h1></div>
            <div id="card_container">
                <TechnologyCard {...frontEndLanguages} />
                {/* <TechnologyCard {...backEndLanguages} />
                <TechnologyCard {...toolSoftware} /> */}
            </div>

        </div>
    );
}

export default Skills;