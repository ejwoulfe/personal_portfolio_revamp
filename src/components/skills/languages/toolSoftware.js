import github from '../../../assets/icons/github.svg';
import git from '../../../assets/icons/git.svg';
import npm from '../../../assets/icons/npm.svg';
import figma from '../../../assets/icons/figma.svg';
import photoshop from '../../../assets/icons/photoshop.svg';
import jira from '../../../assets/icons/jira.svg';
import gitlab from '../../../assets/icons/gitlab.svg';

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