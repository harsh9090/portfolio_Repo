import { useState } from 'react';
import './../CSS/Navbar.css';

const Navbar: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    Harsh Mithaiwala
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    Menubar
                </div>
                <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <a href="#home" onClick={handleShowNavbar} >Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={handleShowNavbar} >About</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={handleShowNavbar}>Skills</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={handleShowNavbar}>Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={handleShowNavbar}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
