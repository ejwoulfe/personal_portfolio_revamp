import html5 from '../../../assets/icons/html5.svg';
import css3 from '../../../assets/icons/css3.svg';
import javascript from '../../../assets/icons/javascript.svg';
import bootstrap from '../../../assets/icons/bootstrap.svg';
import php from '../../../assets/icons/php.svg';
import mysql from '../../../assets/icons/mysql.svg';
import jquery from '../../../assets/icons/jquery.svg';
import projectImage from '../../../assets/project_images/bdoprofit.png';

function createBDOProfitObject(object){
     object = {
        name: "BDOProfit",
        image: projectImage,
        techStack: {
            HTML5: html5,
            CSS3: css3,
            Javascript: javascript,
            Bootstrap: bootstrap,
            jQuery: jquery,
            PHP: php,
            MySQL: mysql
        },
        description: "Website to help players calculate profits of selling an in-game item on the marketplace.",
        goals: "Learn about relational databases. Learn how to create my own database. Learn about webscrapping using Puppeteer. " +
        "Learn how the front and back end of an application work and come together. Create a full stack web application from scratch.",
        challenges: "Creating an item relational database by web scrapping item information from a website. " + 
        "Creating relationships between recipes, sub materials, rewards, and marketplace values. " +
        "Building a full stack website from scratch."

    }
    return object;
}

export default createBDOProfitObject;