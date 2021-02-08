import html5 from '../../../assets/icons/html5.svg';
import css3 from '../../../assets/icons/css3.svg';
import javascript from '../../../assets/icons/javascript.svg';
import react from '../../../assets/icons/react.svg';
import sass from '../../../assets/icons/sass.svg';
import node from '../../../assets/icons/node.svg';
import mongodb from '../../../assets/icons/mongodb.svg';
import projectImage from '../../../assets/project_images/favorite-movies.png';

function createFavoriteMoviesObject(object){
     object = {
        name: "Favorite Movies",
        image: projectImage,
        techStack: {
            HTML5: html5,
            CSS3: css3,
            Javascript: javascript,
            React: react,
            Sass: sass,
            Node: node,
            MongoDB: mongodb
        },
        description: "Favorite Movies is a full stack website which holds information on some popular movies and their featured actors. If a user finds a parsticular movie they really enjoyed, and they are logged in, they will be able to \"favorite\" them. Each user will have their favorite movies displayed on their account page.",
        goals: ["Learn React Hooks", "Learn how non-relational databases interact with the front end.", "Understand the process of authentication.", "Create my own API.", "Create reusable/scalable components.", "Improve folder and component management skills."],
        accomplishments: ["Create scalable and reusable components.", "Mades use of sass's mixins and variables.","Created a server with mongodb and express that connects my front end with my backend API.","Created more complex components with conditional rendering." ,"Held a consistant folder and component managment flow throught the project. (Not having too many working parts in one component, seperated js objects to seperate folders/files.)."]

    }
    return object;
}

export default createFavoriteMoviesObject;