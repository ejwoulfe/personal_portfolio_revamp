import { useEffect, useState } from 'react';
import { Project, techStack } from '../../../interfaces/project_interface';
import wrench from '../../../assets/icons/svg/wrench.svg';
import github from '../../../assets/icons/svg/github-white.svg';
import internet from '../../../assets/icons/svg/internet.svg';
import video from '../../../assets/icons/svg/play-button.svg';
import ModalVideo from 'react-modal-video';
import './project_description.scss';

interface DescriptionProps {
    project: Project
}
function ProjectDescription(props: DescriptionProps) {
    const { project } = props;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(project)
    }, [project])

    function createLiveWebsiteIcon(url: string): JSX.Element {

        // Check if the project has a live website or not, indicated by a string if not.
        if (url === "Work in progress.") {
            return (
                <span>
                    <img className="links_icon" src={wrench} alt="website is still a work in progress."></img>
                    <h4>Work in progress</h4>
                </span>
            );
        } else {
            return (

                <span onClick={() => window.open(url)}>
                    <img className="links_icon" src={internet} alt="link to live website"></img>
                    <h4>Live Website</h4>
                </span>)

        }
    }
    function createTechIcons(techStack: techStack): JSX.Element[] {

        let jsxArray = [];

        // Iterate through the object making an img for the technology icon and an h5 for the technology name.
        for (let name in techStack) {
            let techIcon = techStack[name];

            jsxArray.push(

                <span key={name} className="technology">
                    <img src={techIcon} alt={name}></img>
                    <h5>{name}</h5>
                </span>

            )
        }

        return jsxArray;
    }
    return (
        <div id="project_description_container">
            <div id="panel_containers">
                <div id="left_panel">
                    <span id="image_container">
                        <img id="project_image" src={project.image} alt="project" />
                    </span>
                    <div id="links">
                        <span onClick={() => setIsOpen(true)} >
                            <img className="links_icon" src={video} alt="link to a demo of the project"></img>
                            <h4>Demo</h4>
                        </span>
                        <span onClick={() => window.open(project.githubURL)}>
                            <img className="links_icon" src={github} alt="link to github repository"></img>
                            <h4>GitHub</h4>
                        </span>

                        {createLiveWebsiteIcon(project.liveURL)}

                    </div>
                </div>
                <div id="right_panel">
                    <div id="description">
                        <div className="border_top_left"></div>
                        <h2>Description</h2>

                        <p>{project.description}</p>

                    </div>
                    <div id="tech_stack_container">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={project.videoURL} onClose={() => setIsOpen(false)} />
                        <h2 className="tech_title">Technologies Used</h2>
                        <div className="project_tech">
                            <div className="border_top_left"></div>
                            <div className="border_top_right"></div>

                            {createTechIcons(project.techStack)}

                            <div className="border_bottom_left"></div>
                            <div className="border_bottom_right"></div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ProjectDescription;