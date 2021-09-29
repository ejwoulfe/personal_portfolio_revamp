import { useEffect, useState } from 'react';
import frontEndSkills from './skill_objects/frontEndSkills';
import backEndSkills from './skill_objects/backEndSkills';
import toolSoftwareSkills from './skill_objects/toolSoftware';
import Card from './card/card';
import './skills_container.scss';
import Skills from '../../interfaces/skills_interface';

function SkillsContainer() {


    // State to hold each project object and an array which holds all the project objects.
    const [skillsArray, setSkillsArray] = useState<Skills[]>([]);

    useEffect(() => {

        setSkillsArray([frontEndSkills, backEndSkills, toolSoftwareSkills])
    }, [])


    function createSkills(skillsArr: Skills[]) {

        return skillsArr.map((value, index) => (
            <Card key={"card_" + index} {...value} />
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

export default SkillsContainer;