import html5 from '../../../assets/icons/png/html5.png';
import css3 from '../../../assets/icons/png/css3.png';
import javascript from '../../../assets/icons/svg/javascript.svg';
import bootstrap from '../../../assets/icons/svg/bootstrap.svg';
import php from '../../../assets/icons/svg/php.svg';
import mysql from '../../../assets/icons/svg/mysql.svg';
import jquery from '../../../assets/icons/png/jquery.png';
import node from '../../../assets/icons/png/node.png';
import projectImage from '../../../assets/project_images/bdoprofit.png';
import PersonalProject from '../../../models/project_model';
import { Project } from '../../../interfaces/project_interface';

let bdoProfitProject: Project = new PersonalProject(
    "BDOProfit",
    projectImage, {
    HTML5: html5,
    CSS3: css3,
    JavaScript: javascript,
    Bootstrap: bootstrap,
    jQuery: jquery,
    PHP: php,
    MySQL: mysql,
    Node: node
},
    "https://bdoprofit.com",
    "https://github.com/ejwoulfe/BDOProfit",
    "pJPPptodu5g",
    ["BDOProfit is used to help players calculate if an in-game craft will be profitable to them if they were to sell it on the in-game marketplace.", "Once a player finds a recipe they want to craft, BDOProfit will display which materials, and their quantities, will be required in order to craft that recipe.", "The user will then enter in the values of each material and how much the recipe is currently going for on the marketplace.", "BDOProfit will then calculate the total costs of materials and the total profits they would make, including taxes, off the marketplace."]

);

export default bdoProfitProject;