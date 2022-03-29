import React, { useEffect, useState } from 'react';
import TechnologyPanel from './panels/technology_panel';
import DescriptionPanel from './panels/description_panel';
import './projects.scss';
import favMoviesProject from './project_objects/favorite_movies';
import lolChampionsProject from './project_objects/lol_champions';
import bdoProfitProject from './project_objects/bdoprofit';
import ffxivccProject from './project_objects/ffxivcc';
import { Project } from '../../interfaces/project_interface';



function ProjectsContainer() {

    // State to hold each skill object and an array which holds all the skill objects.
    const [projectArray, setProjectArray] = useState<Project[]>([]);


    useEffect(() => {

        setProjectArray([ffxivccProject, lolChampionsProject, bdoProfitProject, favMoviesProject,])

    }, [])


    function createProjects(projectsArr: Project[]): JSX.Element[] {

        return projectsArr.map((value, index) => (



            <div key={"project_" + index + 1} className="project_info" >
                <TechnologyPanel {...value} />
                <DescriptionPanel {...value} />
            </div >

        ))
    }


    return (
        <div id="projects">
            <div className="header">
                <h1 className="header_text">Projects</h1>
            </div>

            {projectArray.length > 0 ? createProjects(projectArray) : <h4>Loading Projects</h4>}

        </div>
    );
}
export default ProjectsContainer;