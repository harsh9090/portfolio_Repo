import React from 'react';

interface SkillCardProps {
    skill: Skill;
}
interface Skill {
    name: string;
    Icon: any;
    experience: string;
}
const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const Icon = skill.Icon;
    return (
        <div className="skill-card">
            <Icon />
            <h3>{skill.name}</h3>
            {/* <p>{skill.experience}</p> */}
        </div>
    );
}

export default SkillCard;
