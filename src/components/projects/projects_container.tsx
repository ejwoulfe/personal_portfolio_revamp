import React, { useEffect, useState } from 'react';
import './projects.scss';
import favMoviesProject from './project_objects/favorite_movies';
import lolChampionsProject from './project_objects/lol_champions';
import bdoProfitProject from './project_objects/bdoprofit';
import ffxivccProject from './project_objects/ffxivcc';
import backArrow from '../../assets/icons/svg/arrow-up.svg';
import { Project } from '../../interfaces/project_interface';
import ProjectsList from './projects_list/projects_list';
import ProjectDescription from './project_description/project_description';



function ProjectsContainer() {

    // State to hold each skill object and an array which holds all the skill objects.
    const [projectArray, setProjectArray] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);


    useEffect(() => {

        setProjectArray([ffxivccProject, lolChampionsProject, bdoProfitProject, favMoviesProject,])

    }, [])



    return (
        <div id="projects">
            {selectedProject === null ?
                null :
                <button id="projects_back_button" onClick={() => { setSelectedProject(null) }}>
                    <img src={backArrow} alt="back button" />
                    <h3 id="go_back_text">Go Back</h3>
                </button>
            }

            <div className="header">
                {selectedProject === null ?
                    <h1 className="header_text">Projects</h1> :
                    <h1 className="header_text">{selectedProject.name}</h1>
                }
            </div>

            <div id="projects-container">

                {selectedProject === null ?
                    <ProjectsList data={{ projectArray, setSelectedProject }} /> :
                    <ProjectDescription project={selectedProject} />}
            </div>

        </div>
    );
}
export default ProjectsContainer;