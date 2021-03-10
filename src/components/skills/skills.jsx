import React, { useEffect, useState } from 'react';
import fillFrontEndLanguages from './languages/frontEndLanguages';
import fillBackEndLanguages from './languages/backEndLanguages';
import fillToolSoftware from './languages/toolSoftware';
import Card from './card/card.jsx';
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
        <div id="skills">
            <div id="cards">
                <Card {...frontEndLanguages} />
                <Card {...backEndLanguages} />
                <Card {...toolSoftware} />
            </div>
        </div>
    );
}

export default Skills;