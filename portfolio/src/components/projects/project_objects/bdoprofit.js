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
        description: "Website to help players calculate if making an in-game craft will be profitable if they were to sell it on the marketplace.",
        goals: ["Learn about relational databases.", "Create my own database.", "Use webscrapping to collect a large amount of data.", "Learn how the front and back end of an application work and come together.", "Create a full stack web application from scratch."],
        challenges: ["Creating several relationship schema between large amounts of data.",
        "Creating relationships between recipes, sub materials, rewards, and marketplace values.",
        "Building a full stack website from scratch."]

    }
    return object;
}

export default createBDOProfitObject;