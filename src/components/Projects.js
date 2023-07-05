import React from 'react';
import './Projects.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <><section id="projects" className="project-class">
            <div className="section-container">
                <h2>Projects</h2>
                <div className="project">
                    <h3>News-App</h3>
                    <p>
                        Developed a Single Page Application (SPA) for browsing top news, switching countries, and filtering news through search functionality from the News API. Utilized React for the front-end, Axios for API requests, CSS for styling, and Material-UI for UI components.
                    </p>
                    <a href="https://github.com/kennyhazlett/news-app" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
                <div className="project">
                    <h3>Dream Recorder</h3>
                    <p>
                        Launched a unique web app for users to record, track, and share dreams, delivering a functional MVP within 7 days. Designed an efficient database structure using MySQL to store and organize user data, reducing redundant information by 40%.
                    </p>
                    <a href="https://github.com/kennyhazlett/dream-recorder" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
                <div className="project">
                    <h3>FishBook</h3>
                    <p>
                        Developed an innovative, Facebook-inspired web app for fishing enthusiasts, delivering a deploy-ready full-stack MVP within 7 days. Led code reviews, integrated user-generated data with MySQL, and leveraged GitHub for rapid iteration, bug testing, and troubleshooting.
                    </p>
                    <a href="https://github.com/kennyhazlett/fishbook" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
            </div>
        </section>
            <div className="continueButton-container">
                <Link to="/skills">
                    <Button variant="contained" color="primary" className="continueButton">
                        Continue to Skills
                    </Button>
                </Link>
            </div></>
    );
}

export default Projects;
