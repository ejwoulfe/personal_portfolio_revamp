import { useEffect, useState } from 'react';
import frontEndSkills from './skill_objects/frontEndSkills.ts';
import backEndSkills from './skill_objects/backEndSkills.ts';
import toolSoftwareSkills from './skill_objects/toolSoftware.ts';
import Card from './card/card';
import './skills.scss';

function Skills() {


    // State to hold each project object and an array which holds all the project objects.
    const [skillsArray, setSkillsArray] = useState<Array<object>>([]);

    useEffect(() => {

        setSkillsArray([frontEndSkills, backEndSkills, toolSoftwareSkills])
    }, [])


    function createSkills(skillsArr) {

        return skillsArr.map((value) => (
            <Card  {...value} />
        )
        )
    }



    return (
        <div id="skills">
            <div id="cards">
                {skillsArray.length > 0 ? createSkills(skillsArray) : null}
            </div>
        </div>
    );
}

export default Skills;