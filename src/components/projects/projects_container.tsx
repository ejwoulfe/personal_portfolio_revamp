import React, { useEffect, useState } from 'react';
import './projects.scss';
import favMoviesProject from './project_objects/favorite_movies';
import lolChampionsProject from './project_objects/lol_champions';
import bdoProfitProject from './project_objects/bdoprofit';
import ffxivccProject from './project_objects/ffxivcc';
import arrow from '../../assets/icons/png/arrow-right.png';
import { Project } from '../../interfaces/project_interface';



function ProjectsContainer() {

    // State to hold each skill object and an array which holds all the skill objects.
    const [projectArray, setProjectArray] = useState<Project[]>([]);


    useEffect(() => {

        setProjectArray([ffxivccProject, lolChampionsProject, bdoProfitProject, favMoviesProject,])

    }, [])


    function createProjects(projectsArr: Project[]): JSX.Element[] {

        return projectsArr.map((project, index) => (



            <div key={"project_" + index + 1} className="project_info" >
                <div className="over_space"></div>
                <h1 className="project_name">{project.name}</h1>
                <img className="project_image" src={project.image} alt={project.name}></img>

                <div className="learn_more_container">
                    <h3 className="learn_more"> Learn More </h3>
                    <img className="arrow_right" src={arrow} alt="arrow pointing right"></img>
                </div>
                <div className="under_space"></div>
            </div >

        ))
    }


    return (
        <div id="projects">
            <div className="header">
                <h1 className="header_text">Projects</h1>
            </div>

            <div id="projects-container">
                {projectArray.length > 0 ? createProjects(projectArray) : <h4>Loading Projects</h4>}
            </div>

        </div>
    );
}
export default ProjectsContainer;