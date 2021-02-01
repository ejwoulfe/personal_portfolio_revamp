import html5 from '../../../assets/icons/html5.svg';
import css3 from '../../../assets/icons/css3.svg';
import javascript from '../../../assets/icons/javascript.svg';
import react from '../../../assets/icons/react.svg';
import sass from '../../../assets/icons/sass.svg';
import bootstrap from '../../../assets/icons/bootstrap.svg';

function fillFrontEndLanguages(obj){
    obj = {
        type: "Front End",
        weekly: {
            HTML5: html5,
            CSS3: css3,
            Javascript: javascript,
            React: react,
            Sass: sass
        },
        past: {
            Bootstrap: bootstrap
        }
    }
    return obj;
}

export default fillFrontEndLanguages;