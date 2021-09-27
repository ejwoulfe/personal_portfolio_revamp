import github from '../../../assets/icons/svg/github-white.svg';
import git from '../../../assets/icons/png/git.png';
import npm from '../../../assets/icons/svg/npm.svg';
import figma from '../../../assets/icons/png/figma.png';
import photoshop from '../../../assets/icons/png/photoshop.png';
import jira from '../../../assets/icons/png/jira.png';
import gitlab from '../../../assets/icons/png/gitlab.png';
import PersonalSkills from '../../../models/skills_model';
import Skills from '../../../interfaces/skills_interface';


let toolSoftwareSkills: Skills = new PersonalSkills("Tools", {
    Github: github,
    Git: git,
    npm: npm,
    Figma: figma,
    Jira: jira
}, {
    Photoshop: photoshop,
    Gitlab: gitlab
})

export default toolSoftwareSkills;