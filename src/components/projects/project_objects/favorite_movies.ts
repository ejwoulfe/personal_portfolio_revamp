import html5 from '../../../assets/icons/png/html5.png';
import css3 from '../../../assets/icons/png/css3.png';
import javascript from '../../../assets/icons/svg/javascript.svg';
import react from '../../../assets/icons/png/react.png';
import sass from '../../../assets/icons/png/sass.png';
import node from '../../../assets/icons/png/node.png';
import mongodb from '../../../assets/icons/svg/mongodb.svg';
import projectImage from '../../../assets/project_images/favorite-movies.png';
import PersonalProject from '../../../models/project_model';
import { Project } from '../../../interfaces/project_interface';

let favoriteMoviesProject: Project = new PersonalProject(
    "Favorite Movies",
    projectImage, {
    HTML5: html5,
    CSS3: css3,
    JavaScript: javascript,
    React: react,
    Sass: sass,
    Node: node,
    MongoDB: mongodb
},
    "WIP",
    "https://github.com/ejwoulfe/favorite-movies",
    "75jnHmUn5_0",
    ["Favorite Movies allows a user to browse for their favorite movies or actors and gives them a brief description about that person/movie.", "The user will then be able to favorite a movie and have a collection of their favorites displayed on their account page."]

)

export default favoriteMoviesProject;