import html5 from '../../../assets/icons/png/html5.png';
import css3 from '../../../assets/icons/png/css3.png';
import javascript from '../../../assets/icons/svg/javascript.svg';
import react from '../../../assets/icons/png/react.png';
import sass from '../../../assets/icons/png/sass.png';
import bootstrap from '../../../assets/icons/svg/bootstrap.svg';
import projectImage from '../../../assets/project_images/lol-champions.png';
import PersonalProject from '../../../models/project_model';
import { Project } from '../../../interfaces/project_interface';

let lolChampionsProject: Project = new PersonalProject(
    "LoL Champions",
    projectImage, {
    HTML5: html5,
    CSS3: css3,
    JavaScript: javascript,
    React: react,
    Sass: sass,
    Bootstrap: bootstrap
},
    "https://lol-champions.netlify.app/",
    "https://github.com/ejwoulfe/lol-champions",
    "bQQMlrC5dS8",
    ["LoL champions was made to help players of the game, League of Legends, find detailed information on all of its 154 playable champions.", "With this website a user can search for a specefic champion, browse a list of all of the champions, see which champions are being played the most in different ranked tiers, and see which ones are available to play free in the current week.", "*All information is obtained using AWS API Gateway connecting to the Riot Games Public API."],
    ["Learn React and how Single Page Applications work with the DOM.", "Learn how to fetch data from an API.", "Filter fetch requests.", "Use methods/strategies to keep the amount of request to a minimum.", "Learn about css preprocessors.", "Build an AWS Gateway to enable CORS for my fetch requests to the Riot Games API."],
    ["Learned how to work with the React framework and created a Single Page Application.", "Utilized local and session storage to assist with limiting fetch requests and optimize speed of the application.", "Worked with a third party component to help create a nice carousel feature.", "Expanded tool set by implementing sass variables and sass bracket notation to my css files.", "Crafted AWS Gateway methods to act as a proxy to enable CORS policy on my fetch requests."]

)

export default lolChampionsProject;