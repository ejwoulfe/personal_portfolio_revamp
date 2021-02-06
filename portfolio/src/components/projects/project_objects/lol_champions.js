import html5 from '../../../assets/icons/html5.svg';
import css3 from '../../../assets/icons/css3.svg';
import javascript from '../../../assets/icons/javascript.svg';
import react from '../../../assets/icons/react.svg';
import sass from '../../../assets/icons/sass.svg';
import bootstrap from '../../../assets/icons/bootstrap.svg';
import projectImage from '../../../assets/project_images/lol-champions.png';

function createLolChampionsObject(object){
     object = {
        name: "LoL Champions",
        image: projectImage,
        techStack: {
            HTML5: html5,
            CSS3: css3,
            Javascript: javascript,
            React: react,
            Sass: sass,
            Bootstrap: bootstrap
        },
        description: "Using the Riot Games public API, this website displays which champions are free for the current week, which champions are currently being played the most in the chosen ranked tier, and detailed information on all of the games playable champions.",
        goals: ["Learn React.", "Learn how to fetch data from an API.", "Filter fetch requests.", "Limiting the amount of requests being sent.", "Utilize local and session storage."],
        challenges: ["Learning the react frameworks.", "Parsing data to storage and back into JSON.", "Finding strategies to work with the limit on fetch requests.", "Worked with a public library for a carousel feature."]

    }
    return object;
}

export default createLolChampionsObject;