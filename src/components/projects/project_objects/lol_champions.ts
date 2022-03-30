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
    ["LoL champions was made to help players of the game, League of Legends, find detailed information on all of its 154 playable champions.", "With this website a user can search for a specefic champion, browse a list of all of the champions, see which champions are being played the most in different ranked tiers, and see which ones are available to play free in the current week.", "*All information is obtained using AWS API Gateway connecting to the Riot Games Public API."]
)

export default lolChampionsProject;