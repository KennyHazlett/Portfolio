import React from 'react';
import './Contact.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
    const handlePhoneClick = () => {
        alert("Please message me on LinkedIn for my number.");
    };

    return (
        <><section id="contact" className='contact-section-container'>
            <div className="contact-container">
                <h2>Contact</h2>
                <div className='icon-container'>
                    <ul>
                        <li>
                            <Link to="mailto:hazlettkenneth1@gmail.com"><EmailIcon className="icon-link" /></Link>                    </li>
                        <li>
                            <Link onClick={handlePhoneClick}><PhoneIcon className="icon-link" /></Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/Kenneth-Hazlett" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="icon-link" /></Link>
                        </li>
                        <li>
                            <Link to="https://github.com/KennyHazlett" target="_blank" rel="noopener noreferrer"><GitHubIcon className="icon-link" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
            <div className="continueButton-container">
                <Link to="/quizgame">
                    <Button variant="contained" color="primary" className="continueButton">
                        Continue to QuizGame
                    </Button>
                </Link>
            </div></>
    );
}

export default Contact;