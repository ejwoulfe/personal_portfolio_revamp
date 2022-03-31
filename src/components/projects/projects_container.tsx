import React, { useEffect, useState } from 'react';
import './projects.scss';
import favMoviesProject from './project_objects/favorite_movies';
import lolChampionsProject from './project_objects/lol_champions';
import bdoProfitProject from './project_objects/bdoprofit';
import ffxivccProject from './project_objects/ffxivcc';
import { Project } from '../../interfaces/project_interface';
import ProjectCards from './project_cards/project_cards';



function ProjectsContainer() {

    // State to hold each skill object and an array which holds all the skill objects.
    const [projectArray, setProjectArray] = useState<Project[]>([]);


    useEffect(() => {

        setProjectArray([ffxivccProject, lolChampionsProject, bdoProfitProject, favMoviesProject,])

    }, [])



    return (
        <div id="projects">
            <div className="header">
                <h1 className="header_text">Projects</h1>
            </div>

            <div id="projects-container">

                {projectArray.length > 0 ? <ProjectCards data={{ projectArray }} /> : <h4>Loading Projects</h4>}
            </div>

        </div>
    );
}
export default ProjectsContainer;