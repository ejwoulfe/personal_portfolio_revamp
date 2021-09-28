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
    Javascript: javascript,
    React: react,
    Sass: sass,
    Node: node,
    MongoDB: mongodb
},
    "Work in progress.",
    "https://github.com/ejwoulfe/favorite-movies",
    "75jnHmUn5_0",
    ["Favorite Movies allows a user to browse for their favorite movies or actors and gives them a brief description about that person/movie.", "The user will then be able to favorite a movie and have a collection of their favorites displayed on their account page."],
    ["Lean how React Hooks work and how they differ from classes.", "Learn how non-relational databases interact with the front end.", "Understand the process of authentication.", "Create my own API and Endpoints.", "Focus on reusable/scalable components.", "Improve folder and component management skills."],
    ["Created several scalable and reusable components throughout the project.", "Made use of sass's mixins and variables.", "Constructed a server with MongoDB and Express that connects my front end with my backend API.", "Using conditional rendering, was able to implement several ways to display data on a page.", "Held a consistent folder and component managment flow throughout the project for better readability and maintainability."]

)

export default favoriteMoviesProject;