
import { Project } from '../../../interfaces/project_interface';
import arrow from '../../../assets/icons/png/arrow-right.png';
import './projects_list.scss';

interface CardProps {
    projectArray: Project[],
    setSelectedProject: React.Dispatch<React.SetStateAction<Project>>
}

function ProjectsList(props: { data: CardProps }) {

    const { projectArray, setSelectedProject } = props.data;

    return (
        <div id="project_cards_container">
            {projectArray.map((project, index) => (



                <div key={"project_" + index + 1} className="project_info" onClick={() => { setSelectedProject(project) }}>
                    <div className="over_space"></div>
                    <h1 className="project_name">{project.name}</h1>
                    <img className="project_image" src={project.image} alt={project.name}></img>

                    <div className="learn_more_container">
                        <h3 className="learn_more"> Learn More </h3>
                        <img className="arrow_right" src={arrow} alt="arrow pointing right"></img>
                    </div>
                    <div className="under_space"></div>
                </div >

            ))}

        </div>
    );
}

export default ProjectsList;