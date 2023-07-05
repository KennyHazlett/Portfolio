import React from 'react';
import './Experience.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <><section id="experience" className="experience-section-container">
            <div className="experience-container">
                <h2>Experience</h2>
                <div className="experience">
                    <h3>Full Stack Developer - FREELANCE</h3>
                    <h4>Myrtle Beach, SC | October 2022 - Present</h4>
                    <ul>
                        <li>
                            Developed and maintained the front-end of a dynamic and responsive website for "Missing Link Aquatics & Exotics" to increase online presence and customer engagement. Designed interactive UI and seamless user experience using HTML, CSS, and JavaScript.
                        </li>
                        <li>
                            Implemented responsive navigation and hero section with autoplaying background video to enhance user experience across devices.
                        </li>
                    </ul>
                </div>
                <div className="experience">
                    <h3>Software Engineer - RADIXBAY (Contract)</h3>
                    <h4>Charlotte, NC | September 2022 - October 2022</h4>
                    <ul>
                        <li>
                            Refactored <a href="https://www.metabolic.com/"> metabolic.com</a> for mobile, enhancing cross-platform user experience using Vue.js, CSS, JavaScript, and HTML.
                        </li>
                        <li>
                            Completed 100% of Jira tickets assigned in weekly sprints, ensuring timely project delivery and client satisfaction.
                        </li>
                        <li>
                            Established effective remote SCRUM communication to review, test, and deliver client requirements, improving project efficiency by 20%.
                        </li>
                    </ul>
                </div>
                <div className="experience">
                    <h3>Software Developer - SEQUENCY CYBERSECURITY (Internship)</h3>
                    <h4>Dover, DE | July 2022 - September 2022</h4>
                    <ul>
                        <li>
                            Collaborated on a global team utilizing Jira to ensure on-time delivery of the company's first website, <a href="https://www.sequency.us/">sequency.us</a>.
                        </li>
                        <li>
                            Built and optimized multiple web pages using React.js and CSS, resulting in a 15% increase in website performance and SEO rankings with web.dev.
                        </li>
                        <li>
                            Reviewed team code and contributed to error-free merges by testing, troubleshooting, and debugging with GitHub.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
            <div className="continueButton-container">
                <Link to="/education">
                    <Button variant="contained" color="primary" className="continueButton">
                        Continue to Eductation
                    </Button>
                </Link>
            </div></>

    );
}

export default Experience;
