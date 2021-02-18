import html5 from '../../../assets/icons/png/html5.png';
import css3 from '../../../assets/icons/png/css3.png';
import javascript from '../../../assets/icons/png/javascript.png';
import bootstrap from '../../../assets/icons/png/bootstrap.png';
import php from '../../../assets/icons/png/php.png';
import mysql from '../../../assets/icons/png/mysql.png';
import jquery from '../../../assets/icons/png/jquery.png';
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
        liveURL: "https://bdoprofit.com",
        githubURL: "https://github.com/ejwoulfe/BDOProfit",
        description: "Website to help players calculate if making an in-game craft will be profitable if they were to sell it on the marketplace.",
        goals: ["Learn about relational databases.", "Create my own database.", "Research on how to collect a large amount of data around in-game items without access to a public API.", "Learn how the front and back end of an application work and come together.", "Create a full stack web application from scratch."],
        accomplishments: ["Planned and created multiple tables with one-to-many and many-to-many relationships.",
        "Using Puppeteer, webscrapped thousands of item data. Formatted and exported that information to an sql database.",
        "Successfully connected the database to the front end of my application.", "Created queries to search for a single item in the database and get related information to that item."]

    }
    return object;
}

export default createBDOProfitObject;