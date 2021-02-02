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
        description: "Website which you can look up info about League of Legends champions.",
        goals: "Learn React. Get more familiar working with APIs. Learn about client based storage options.",
        challenges: "Obtimizing number of fetch requests with a limit. Learning the React framework."

    }
    return object;
}

export default createLolChampionsObject;