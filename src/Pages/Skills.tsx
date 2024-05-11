import React from 'react';
import SkillCard from './SkillCard';
import { FaPython, FaReact, FaCss3, FaJava, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPhp, SiAngular, SiMysql, SiMicrosoftazure, SiNextdotjs, SiHeroku, SiVisualstudiocode, SiKubernetes, SiMongodb, SiCplusplus, SiC, SiSlack, SiLoom, SiNodedotjs } from 'react-icons/si';
// import FirebaseIcon from '@mui/icons-material/Firebase';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import './../CSS/skills.css'; // Link to the CSS file for styling

const SkillsPage: React.FC = () => {
    interface Skill {
        name: string;
        Icon: any;
        experience: string;
    }
    const programmingLanguages: Skill[] = [
        { name: 'Java', Icon: FaJava, experience: 'Applied in object-oriented programming projects at Concordia.' },
        { name: 'Python', Icon: FaPython, experience: 'Utilized at Altq for OpenAI integrations and at Nokia for scripting automation tasks.' },
        { name: 'TypeScript', Icon: SiTypescript, experience: 'Employed at Altq for enhancing code reliability through type safety.' },
        { name: 'JavaScript', Icon: SiJavascript, experience: 'Used at Supero and Curiosum Tech for front-end functionality.' },
        { name: 'C++', Icon: SiCplusplus, experience: 'Leveraged for developing projects during my time at SVNIT.' },
        { name: 'C', Icon: SiC, experience: 'Practiced in academic projects and assignments at SVNIT.' },
        { name: 'CSS', Icon: FaCss3, experience: 'Integrated into all my web development projects for styling.' },
        { name: 'SQL', Icon: SiMysql, experience: 'Applied in Supero to manage and query database information.' },
    ];


    const webTechFrameworks: Skill[] = [
        { name: 'React', Icon: FaReact, experience: 'Initiated my journey with React at Altq, building dynamic UIs.' },
        { name: 'NextJS', Icon: SiNextdotjs, experience: 'Currently enhancing web applications with NextJS at Altq.' },
        { name: 'Node.JS', Icon: SiNodedotjs, experience: 'Extensively used Node.js in various projects including backend services at Altq.' },
        { name: 'Angular JS', Icon: SiAngular, experience: 'Developed reusable components with Angular at Supero Software.' },
        { name: 'PHP', Icon: SiPhp, experience: "Employed PHP during my bachelor's degree projects for its stability and robustness." },
    ];

    const devOpsTools: Skill[] = [
        { name: 'Docker', Icon: FaDocker, experience: 'Applied in Concordia projects and at Nokia for containerization needs.' },
        { name: 'Kubernetes', Icon: SiKubernetes, experience: 'Used at Nokia for orchestrating containers and managing helm charts.' },
        { name: 'VS Code', Icon: SiVisualstudiocode, experience: 'My go-to editor for coding in various projects and environments.' },
        { name: 'Heroku', Icon: SiHeroku, experience: 'Deployed live web applications during personal and academic projects.' },
        { name: 'Azure', Icon: SiMicrosoftazure, experience: 'Leveraged Azure services like Blob Storage, SQL databases, and more in Altq and academic projects.' },
        { name: "Slack", Icon: SiSlack, experience: 'Utilized for team communications in all professional settings.' },
        { name: "Loom", Icon: SiLoom, experience: 'Created video presentations and recorded sessions for clients at Altq.' },
    ];

    const databases: Skill[] = [
        { name: 'MongoDB', Icon: SiMongodb, experience: 'Implemented in multiple projects at Concordia and at Altq.' },
        { name: 'MySQL', Icon: SiMysql, experience: 'Managed database operations with MySQL at Supero Software.' },
        { name: 'Azure SQL', Icon: SiMicrosoftazure, experience: 'Used in Concordia for managing data in distributed systems.' },
        { name: 'Firebase', Icon: CloudQueueIcon, experience: 'Leveraged for real-time data handling in personal projects.' },
    ];
    return (
        <div id='skills' className='Skills-Container'>
            <h1 className='heading'>Skills</h1>
            <div className='sectionFields'>
                <section >
                    <h2>Programming Languages</h2>
                    <div style={{ display: 'flex', flexWrap: "wrap" }}>
                        {programmingLanguages.map(skill => <SkillCard key={skill.name} skill={skill} />)}
                    </div>
                </section>
                <section>
                    <h2>Web Technologies and Frameworks</h2>
                    <div style={{ display: 'flex', flexWrap: "wrap" }}>
                        {webTechFrameworks.map(skill => <SkillCard key={skill.name} skill={skill} />)}
                    </div>
                </section>
                <section>
                    <h2>DevOps Tools</h2>
                    <div style={{ display: 'flex', flexWrap: "wrap" }}>
                        {devOpsTools.map(skill => <SkillCard key={skill.name} skill={skill} />)}
                    </div>
                </section>
                <section>
                    <h2>Databases</h2>
                    <div style={{ display: 'flex', flexWrap: "wrap" }}>
                        {databases.map(skill => <SkillCard key={skill.name} skill={skill} />)}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SkillsPage;
