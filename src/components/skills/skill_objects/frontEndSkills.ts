import html5 from '../../../assets/icons/png/html5.png';
import css3 from '../../../assets/icons/png/css3.png';
import javascript from '../../../assets/icons/svg/javascript.svg';
import react from '../../../assets/icons/png/react.png';
import sass from '../../../assets/icons/png/sass.png';
import bootstrap from '../../../assets/icons/svg/bootstrap.svg';
import jquery from '../../../assets/icons/png/jquery.png';
import PersonalSkills from '../../../models/skills_model';
import Skills from '../../../interfaces/skills_interface';


let frontEndSkills: Skills = new PersonalSkills(
    "Front End", {
    HTML5: html5,
    CSS3: css3,
    Javascript: javascript,
    React: react,
    Sass: sass
}, {
    Bootstrap: bootstrap,
    jQuery: jquery
}
)
export default frontEndSkills;