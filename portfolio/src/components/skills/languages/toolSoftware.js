import github from '../../../assets/icons/github.svg';
import git from '../../../assets/icons/git.svg';
import npm from '../../../assets/icons/npm.svg';
import figma from '../../../assets/icons/figma.svg';
import photoshop from '../../../assets/icons/photoshop.svg';
import jira from '../../../assets/icons/jira.svg';

function fillToolSoftware(obj){
    obj = {
        weekly: {
            "Github": github,
            "Git": git,
            "npm": npm,
            "Figma": figma
        },
        past: {
            "Photoshop": photoshop,
            "Jira": jira
        }
    }
    return obj;
}

export default fillToolSoftware;