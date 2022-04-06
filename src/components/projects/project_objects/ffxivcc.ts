import html5 from '../../../assets/icons/png/html5.png';
import css3 from '../../../assets/icons/png/css3.png';
import javascript from '../../../assets/icons/svg/javascript.svg';
import typescript from '../../../assets/icons/svg/typescript.svg';
import react from '../../../assets/icons/png/react.png';
import sass from '../../../assets/icons/png/sass.png';
import node from '../../../assets/icons/png/node.png';
import mysql from '../../../assets/icons/svg/mysql.svg';
import redux from '../../../assets/icons/svg/redux.svg';
import projectImage from '../../../assets/project_images/ffxivcc.png';
import PersonalProject from '../../../models/project_model';
import { Project } from '../../../interfaces/project_interface';

let ffxivccProject: Project = new PersonalProject(
    "FFXIV Crafting Calculator",
    projectImage, {
    HTML5: html5,
    CSS3: css3,
    JavaScript: javascript,
    React: react,
    Sass: sass,
    Node: node,
    MySQL: mysql,
    TypeScript: typescript,
    ReduxToolKit: redux
},
    "none",
    "https://github.com/ejwoulfe/FFXIV-crafting-calculator",
    "jwuS_8I_jLQ",
    ["FFXIV Crafting Calculator is a full stack web app that calculates the profit margins of an in-game craft. It will give a list of all the required materials and their quantites that are needed in order to craft a recipe. Then using a third party API it retrieves the current listings of those materials on the marketboard that a user can purchase from. Using an algorithm I created it will grab the cheapest combinations of marketboard listings to meet the materials required quantity. It will gather the totals of all materials and lookup what the current marketboard value is for the recipe and calculate a profit, if it exists."]

)

export default ffxivccProject;