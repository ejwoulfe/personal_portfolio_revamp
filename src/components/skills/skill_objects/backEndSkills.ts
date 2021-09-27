import node from '../../../assets/icons/png/node.png';
import php from '../../../assets/icons/svg/php.svg';
import mysql from '../../../assets/icons/svg/mysql.svg';
import mongodb from '../../../assets/icons/svg/mongodb.svg';
import PersonalSkills from '../../../models/skills_model';
import Skills from '../../../interfaces/skills_interface';


let backEndSkills: Skills = new PersonalSkills("Back End", null, {
    Node: node,
    PHP: php,
    MySQL: mysql,
    MongoDB: mongodb
})

export default backEndSkills;