import html5 from '../../../assets/icons/html5.svg';
import css3 from '../../../assets/icons/css3.svg';
import javascript from '../../../assets/icons/javascript.svg';
import react from '../../../assets/icons/react.svg';
import sass from '../../../assets/icons/sass.svg';
import node from '../../../assets/icons/node.svg';
import mongodb from '../../../assets/icons/mongodb.svg';
import projectImage from '../../../assets/project_images/favorite-movies.png';

function createLolChampionsObject(object){
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
        description: "Website which you can look up info about your favorite movies.",
        goals: "Learn React hooks, learn how a non relational database works, understand how auth works.",
        challenges: "Adding more scalability to my components with reusable code so I would only need to edit one place instead of several. " +
                        "No copying and pasting from one component to the next because they are so similar."

    }
    return object;
}

export default createLolChampionsObject;