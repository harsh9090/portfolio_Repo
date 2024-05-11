// PortfolioFrontPage.tsx
import React from 'react';
import './../CSS/PortfolioFrontPage.css';

const PortfolioFrontPage: React.FC = () => {
    return (
        <div className="portfolio-container" id='home'>
            <header className="main-header">
                <h1 className="typing" >
                    Hi, I'm Harsh Mithaiwala</h1>
                <div className="tagline">
                    Web Developer | Designer | Tech Enthusiast
                </div>
                <a href="/Harsh_Mithaiwala_Resume.pdf" className="download-cv-button" download="Harsh_Mithaiwala_Resume.pdf">
                    Download CV
                </a>
            </header>
        </div>
    );
};

export default PortfolioFrontPage;
