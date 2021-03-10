import React, { useEffect, useState } from 'react';
import TechnologyPanel from './panels/technology_panel';
import DescriptionPanel from './panels/description_panel';
import './projects.scss';
import createFavMoviesObject from './project_objects/favorite_movies';
import createLolChampionsObject from './project_objects/lol_champions';
import createBDOProfitObject from './project_objects/bdoprofit';



function Projects() {

    // State to hold each project object and an array which holds all the project objects.
    const [projectArray, setProjectArray] = useState([]);
    const [favMoviesObject, setFavMoviesObject] = useState({});
    const [lolChampionsObject, setLolChampionsObject] = useState({});
    const [bdoProfitObject, setBdoProfitObject] = useState({});

    useEffect(() => {

        (setFavMoviesObject(obj => createFavMoviesObject(obj)));
        (setLolChampionsObject(obj => createLolChampionsObject(obj)));
        (setBdoProfitObject(obj => createBDOProfitObject(obj)));

    }, [])

    useEffect(() => {

        // Make sure all project objects are loaded to fill the projects array.
        if (Object.keys(favMoviesObject).length !== 0
            && Object.keys(lolChampionsObject).length !== 0
            && Object.keys(bdoProfitObject).length !== 0) {

            setProjectArray([lolChampionsObject, favMoviesObject, bdoProfitObject])

        }
    }, [favMoviesObject, lolChampionsObject, bdoProfitObject]);




    function createProjects(projectsArr) {

        return projectsArr.map((value, index) => (

            <div key={"project_" + index + 1} className="project_info" >
                <TechnologyPanel {...value} />
                <DescriptionPanel {...value} />
            </div>

        ))
    }


    return (
        <div id="projects">
            <div className="header"> <h1 className="header_text">Projects</h1></div>

            {projectArray.length > 0 ? createProjects(projectArray) : <h4>Loading Projects</h4>}

        </div>
    );
}
export default Projects;