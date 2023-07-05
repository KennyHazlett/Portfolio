import React from 'react';
import './Intro.scss';
import Button from '@mui/material/Button';
import ProfilePhoto from '../images/profile-photo.jpg';
import { Link } from 'react-router-dom';
import './ContinueButton.scss';

function Intro() {
    return (
        <><section id="intro" className="intro-class">
            <div className="intro-container">
                <div className="text-container">
                    <h1 className="intro-heading">Hello, I'm Kenneth Hazlett</h1>
                    <p className="intro-description"> Welcome to my portfolio website. I'm a Full Stack Developer with experience in React, JavaScript, Python, and various frameworks and libraries. I'm passionate about building innovative web applications that deliver seamless user experiences.</p>
                </div>
                <img src={ProfilePhoto} alt="Kenneth Hazlett" className="profile-photo" />
            </div>
        </section>
            <div className="continueButton-container">
                <Link to="/projects">
                    <Button className="continueButton" variant="contained" color="primary">
                        Continue to Projects
                    </Button>
                </Link>
            </div></>
    );
}

export default Intro;