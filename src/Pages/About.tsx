// AboutSection.tsx
import React, { useState } from 'react';
import './../CSS/About.css' // Make sure to create the corresponding CSS file

const AboutSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Academic Journey');

    const getContent = () => {
        switch (activeTab) {
            case 'Academic Journey':
                return `My academic path began at the prestigious Sardar Vallabhbhai National Institute of Technology (SVNIT) in India, where I pursued a Bachelor of Engineering in Computer Engineering. This foundational stage of my education was characterized by rigorous coursework, practical problem-solving, and an eagerness to understand the intricacies of computing.

                Currently, I am furthering my academic pursuits at Concordia University, undertaking a Master of Engineering in Applied Computer Science.Here, I am not just a student, but an explorer delving into the depths of software engineering, artificial intelligence, and advanced computational theories.My studies have been marked by academic excellence, as reflected in a noteworthy GPA, signifying my commitment to the field.

This academic journey is more than a pursuit of knowledge; it's a testament to my dedication to evolving with the ever-changing landscape of technology and a reflection of my ambition to leave a mark on the industry through innovation and research.`;
            case 'Professional Journey':
                return `In my time at Altq Financial Services, I was immersed in the craft of piecing together responsive web pages that adapt seamlessly across devices, and enhancing backend systems for peak performance. My stint at Nokia was a deep dive into ensuring the uptime and efficiency of mobile networks through automation, critical for a world that's always online. \n \n
My coding journey continued through engagements with Supero Software and Curiosum Tech, where I refined the art of scripting to elevate the functionality and user experience of web applications. The thrill for me lies in the interplay of complex code behind the scenes and the simple, clean interfaces that users interact with.\n
Constantly coding, I stay on top of the latest tech trends, ensuring my full-stack development skills are sharp and my AI integrations are not only smart but also user-centric. I take pride in writing code that's not just robust but also elegantly structured, ensuring longevity and ease of maintenance. It's this balance of form and function, the invisible mesh of algorithms and the visible finesse of the interface, where I find my passion for web development truly comes alive.`;
            case 'hobbies':
                return `When I'm not coding, I love to get out and see the world. Traveling and trying new foods are my way of learning about different cultures. Music keeps me company, setting the tone for my day-to-day life and keeping my ideas flowing. To keep my mind sharp, I enjoy solving Sudoku puzzles—it's a fun break from screens.

Movies are my go-to relaxation activity, especially suspenseful ones and animations that get my imagination going. Sports are important to me too. Playing cricket and volleyball with friends is how I stay active and social. I also like to cook; experimenting in the kitchen is like my own personal science lab. And nothing beats hanging out with friends and family, just talking and laughing together.`;
            default:
                return null;
        }
    };

    return (
        <div className="about-container" id="about">
            <div className="about-me">
                <h2>About Me</h2>
                <p >I enjoy exploring new cultures and cuisines, which often takes me on exciting travels around the globe. In my downtime, I love to unwind by watching movies—suspense thrillers and animations are my favorites because they challenge my imagination and provide a great escape. I'm also passionate about sports, frequently playing cricket and volleyball, which offer a perfect blend of physical activity and social interaction. Cooking is another pursuit I cherish, allowing me to experiment with new flavors and recipes. When it comes to relaxing with friends, we often share laughs over past adventures and engage in lively discussions on a variety of topics, making every gathering memorable.</p>
            </div>
            <div style={{ width: "5%" }}></div>
            <div className="about-details">
                <div className="tabs">
                    <button
                        className={`tab ${activeTab === 'Academic Journey' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Academic Journey')}
                        onMouseEnter={() => setActiveTab('Academic Journey')}
                    >
                        Academic Journey
                    </button>
                    <button
                        className={`tab ${activeTab === 'Professional Journey' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Professional Journey')}
                        onMouseEnter={() => setActiveTab('Professional Journey')}
                    >
                        Professional Journey
                    </button>
                    <button
                        className={`tab ${activeTab === 'hobbies' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hobbies')}
                        onMouseEnter={() => setActiveTab('hobbies')}
                    >
                        Hobbies & Interests
                    </button>
                </div>
                <div className="content" style={{ textAlign: 'left', fontSize: "1.1rem" }}>
                    {getContent()}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
