import React, { useState } from 'react';
import './../CSS/Project.css'; // Make sure the CSS path is correct
import ProjectCard from './ProjectCard';

interface Project {
    name: string;
    description: string;
    technologies: string[];
    url: string;
}

const ProjectsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects = [
        {
            name: "Instagram Insights",
            description: "Tackled the complexities of distributed systems, incorporating features such as manual scaling and multi-region availability to enhance data distribution and reduce latency. Delved into Azure Cosmos DB and compared it with MongoDB to draw actionable insights.",
            technologies: ["Azure Cosmos DB", "Azure Blob Storage", "Azure Data Factories", "React", "NodeJS", "MongoDB", "PowerBI"],
            url: "" // Replace with your project URL when available
        },
        {
            name: "Show Your Updates",
            description: "Engineered a community-centric web platform enabling interactive post management. The application stands out for its robust post editing and validation features, fostering a vibrant and engaging user environment.",
            technologies: ["Angular 9.0", "Bootstrap", "jQuery", "JavaScript", "Firebase"],
            url: "https://live-posts-dce78.web.app/home" // Available project URL
        },
        {
            name: "Compiler Design",
            description: "Conceived and developed a custom language compiler in Java, focusing on streamlining tokenization, syntax, and semantic checks. The project underscored the application of core Java in solving complex computational problems.",
            technologies: ["Core Java"],
            url: "" // Replace with your project URL when available
        },
        {
            name: "RainSenseAI Project",
            description: "AI-generated rain prediction model using a decision tree to predict rain based on specific parameters. This model aids in understanding and responding to meteorological conditions efficiently.",
            technologies: ["AI", "Decision Trees"],
            url: "" // Placeholder for the project URL
        },
        {
            name: "Compiler Design",
            description: "Developed a compiler for a custom programming language similar to Java, emphasizing efficient tokenization, syntax analysis, and semantic checks using core Java.",
            technologies: ["Java"],
            url: "" // Placeholder for the project URL
        },
        {
            name: "Water Treatment Plant",
            description: "AI project predicting chemical dosages needed for water purification, utilizing parameters like water solidity and chemical content. This project compared various AI models for optimal performance.",
            technologies: ["AI", "Big Data"],
            url: "" // Placeholder for the project URL
        },
        {
            name: "OpenTracks Android App",
            description: "Contributed to an open-source Android application by developing features to display data for individually selected trails on a map, enhancing the user interaction and functionality.",
            technologies: ["Android"],
            url: "" // Placeholder for the project URL
        },
        {
            name: "CosmosDB with Node.js",
            description: "Explored distributed system functionalities of Azure, implementing features like Azure Blob, CosmosDB, and Azure Analytics. Utilized Angular and Node.js for front-end and backend development.",
            technologies: ["Azure Cosmos DB", "Azure Blob Storage", "Angular", "Node.js"],
            url: "" // Placeholder for the project URL
        },
        {
            name: "Weather App",
            description: "Developed a weather application that provides weather details for specified locations using the WeatherAPI. This app helps users stay informed about weather conditions in real-time.",
            technologies: ["WeatherAPI"],
            url: "" // Placeholder for the project URL
        },
        {
            name: "Hotel Management",
            description: "Created a hotel management application with separate logins for clients and staff. Features include room booking, management, and bill generation, streamlining hotel operations.",
            technologies: ["Management Software"],
            url: "" // Placeholder for the project URL
        },
        {
            name: "Blockchain Review System",
            description: "Final year project focused on creating a decentralized review system using Ethereum blockchain and Solidity contracts. Aimed to enhance review security and integrity by decentralization.",
            technologies: ["Blockchain", "Ethereum", "Solidity", "Angular", "Node.js"],
            url: "" // Placeholder for the project URL
        },
        {
            name: "News App",
            description: "Android application that aggregates and displays news articles fetched from various APIs, providing users with the latest news updates directly on their devices.",
            technologies: ["Android", "APIs"],
            url: "" // Placeholder for the project URL
        },
        {
            name: "COVID Management System",
            description: "Hospital management system that offers an analytical dashboard to track COVID-19 patient statistics, including admissions, recoveries, and room allocation, improving hospital workflow.",
            technologies: ["Dashboard", "Hospital Management"],
            url: "" // Placeholder for the project URL
        }
    ];


    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    return (
        <div className='project-section' id='projects'>
            <div className="projects-section">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <button
                            key={project.name}
                            className={`project-name ${selectedProject === project ? 'active' : ''}`}
                            onClick={() => handleProjectClick(project)}
                            onMouseEnter={() => setSelectedProject(project)}

                        >
                            {project.name}
                        </button>
                    ))}
                </div>
            </div>
            {selectedProject && (
                <div className="modal" onMouseLeave={handleCloseModal} onClick={handleCloseModal}>
                    <div className="modal-content">
                        <ProjectCard project={selectedProject} />
                    </div>
                </div>
            )}
        </div>

    );
};

export default ProjectsPage;
