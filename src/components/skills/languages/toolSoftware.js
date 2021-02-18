import github from '../../../assets/icons/svg/github-white.svg';
import git from '../../../assets/icons/png/git.png';
import npm from '../../../assets/icons/svg/npm.svg';
import figma from '../../../assets/icons/png/figma.png';
import photoshop from '../../../assets/icons/png/photoshop.png';
import jira from '../../../assets/icons/png/jira.png';
import gitlab from '../../../assets/icons/png/gitlab.png';

function fillToolSoftware(obj){
    obj = {
        type: "Tools",
        weekly: {
            Github: github,
            Git: git,
            npm: npm,
            Figma: figma
        },
        past: {
            Photoshop: photoshop,
            Jira: jira,
            Gitlab: gitlab
        }
    }
    return obj;
}

export default fillToolSoftware;