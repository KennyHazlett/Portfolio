import React from 'react';
import './Education.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Education = () => {
    return (
        <><section id="education" className='experience-section-container'>
            <div className="experience-container">
                <h2>Education</h2>
                <div className="education">
                    <h3>Coding Dojo | Full-Stack Developer Certificate</h3>
                    <h4>Remote | December 2021 - May 2022</h4>
                    <ul>
                        <li>
                            Completed a 16-week immersive program with 1000+ hours of coding, testing, and algorithm practice.
                        </li>
                        <li>
                            Gained proficiency in Python, JavaScript, SQL, HTML5, CSS, and various frameworks and libraries.
                        </li>
                        <li>
                            Developed a strong foundation in full-stack web development, enabling rapid adaptation to new technologies and tools.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
            <div className="continueButton-container">
                <Link to="/contact">
                    <Button variant="contained" color="primary" className="continueButton">
                        Continue to Contact
                    </Button>
                </Link>
            </div></>
    );
}

export default Education;
