import React, { useEffect, useState } from 'react';
import LeftPanel from './panels/left_panel';
import RightPanel from './panels/right_panel';
import './projects.scss';
import createFavMoviesObject from './personal_projects/favorite_movies';


function Projects() {

    const [favMoviesObject, setFavMoviesObject] = useState({});

    useEffect(() => {
        (setFavMoviesObject(obj => createFavMoviesObject(obj)));

    }, [])




    function createProjects(project) {
        return (
            <div className="project_info" >
                <LeftPanel {...favMoviesObject} />
                <RightPanel />
            </div>)


    }

    return (
        <div id="projects">
            <div className="header"> <h1 className="header_text">Projects</h1></div>

            {createProjects()}



        </div>
    );
}
export default Projects;