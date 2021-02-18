import html5 from '../../../assets/icons/png/html5.png';
import css3 from '../../../assets/icons/png/css3.png';
import javascript from '../../../assets/icons/png/javascript.png';
import react from '../../../assets/icons/png/react.png';
import sass from '../../../assets/icons/png/sass.png';
import bootstrap from '../../../assets/icons/svg/bootstrap.svg';
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
        liveURL: "https://pensive-visvesvaraya-5f7d28.netlify.com/",
        githubURL: "https://github.com/ejwoulfe/lol-champions",
        description: "Using the Riot Games public API, this website displays which champions are free for the current week, which champions are currently being played the most in the chosen ranked tier, and detailed information on all of the games playable champions.",
        goals: ["Learn React.", "Learn how to fetch data from an API.", "Filter fetch requests.", "Use methods/strategies to keep the amount of request to a minimum.", "Learn about css preprocessors."],
        accomplishments: ["Learned how to work with the React framework and create Single Page Applications.", "Utilized local and session storage to help with the limited fetch requests and optimize speed of the application.", "Worked with a public library of code to help create a nice carousel feature.", "Expanded tool set by implementing sass variables."]

    }
    return object;
}

export default createLolChampionsObject;