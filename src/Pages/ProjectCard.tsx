// ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
    project: {
        name: string;
        description: string;
        technologies: string[];
        url: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    console.log(project)
    return (
        <div className="project-card-detail">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="technology-tags">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="tag">{tech}</span>
                ))}
            </div>
            {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>}
        </div>
    );
};

export default ProjectCard;
