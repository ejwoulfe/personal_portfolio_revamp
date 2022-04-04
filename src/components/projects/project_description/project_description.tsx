import React from 'react';
import { Project } from '../../../interfaces/project_interface';

interface DescriptionProps {
    project: Project
}
function ProjectDescription(props: DescriptionProps) {
    const { project } = props;
    return (
        <div id="project_description_container">
            <h1>{project.name}</h1>

        </div>
    );
}

export default ProjectDescription;