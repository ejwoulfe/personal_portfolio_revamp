import html5 from '../../../assets/icons/png/html5.png';
import css3 from '../../../assets/icons/png/css3.png';
import javascript from '../../../assets/icons/svg/javascript.svg';
import bootstrap from '../../../assets/icons/svg/bootstrap.svg';
import php from '../../../assets/icons/svg/php.svg';
import mysql from '../../../assets/icons/svg/mysql.svg';
import jquery from '../../../assets/icons/png/jquery.png';
import node from '../../../assets/icons/png/node.png';
import projectImage from '../../../assets/project_images/bdoprofit.png';
import Project from './project_object_model';

let bdoProfitProject = new Project(
    "BDOProfit",
    projectImage, {
        HTML5: html5,
        CSS3: css3,
        Javascript: javascript,
        Bootstrap: bootstrap,
        jQuery: jquery,
        PHP: php,
        MySQL: mysql,
        Node: node
    },
    "https://bdoprofit.com",
    "https://github.com/ejwoulfe/BDOProfit",
    "pJPPptodu5g",
    ["BDOProfit is used to help players calculate if an in-game craft will be profitable to them if they were to sell it on the in-game marketplace.", "Once a player finds a recipe they want to craft, BDOProfit will display which materials, and their quantities, will be required in order to craft that recipe.", "The user will then enter in the values of each material and how much the recipe is currently going for on the marketplace.", "BDOProfit will then calculate the total costs of materials and the total profits they would make, including taxes, off the marketplace."],
    ["Create a relational database schema and implement it.", "Use web scrapping to collect a large amount of data around in-game items without access to a public API.", "Learn how the front and back end of an application work and come together to create a full stack web application.", "Format and inject thousands of item data into MySQL database."],
    ["Planned and implemented multiple tables with one-to-many and many-to-many relationships.",
        "Using Puppeteer, webscrapped thousands of item data. Formatted and exported that information into a relational database.",
        "Successfully connected the database to the front end of my application.", "Created search queries which successfully retrieved item data in a heavily populated table.", "Reduced number of database queries using pagination when browsing through a large amount of items."
    ]

);

export default bdoProfitProject;