import React from 'react';
import './Skills.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import AngularLogo from '../Logos/Angular-logo.svg';
import BootstrapLogo from '../Logos/Bootstrap-logo.svg';
import CssLogo from '../Logos/CSS3_logo.svg';
import FlaskLogo from '../Logos/Flask_logo.svg.png';
import Html5Logo from '../Logos/HTML5_logo.svg';
import JqueryLogo from '../Logos/jQuery-logo.svg';
import JsLogo from '../Logos/logo-javascript.svg';
import MaterialUiLogo from '../Logos/material-ui-1.svg';
import NodejsLogo from '../Logos/Node.js_logo.svg';
import NuxtjsLogo from '../Logos/Nuxt_logo.svg';
import PythonLogo from '../Logos/Python-logo-notext.svg.png';
import ReactLogo from '../Logos/React-icon.svg';
import SqlLogo from '../Logos/SQL-logo.svg';
import TsLogo from '../Logos/TypeScript-logo.svg';
import VuejsLogo from '../Logos/Vue.js_Logo_2.svg';

const Skills = () => {
    return (
        <><section id="skills">
            <div className="skills-section-container">
                <div class="skills-container">
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        <li><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src={PythonLogo} alt="Python" /> Python</a></li>
                        <li><a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><img src={JsLogo} alt="JavaScript" /> JavaScript</a></li>
                        <li><a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer"><img src={SqlLogo} alt="SQL" /> SQL</a></li>
                        <li><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer"><img src={Html5Logo} alt="HTML5" /> HTML5</a></li>
                        <li><a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer"><img src={CssLogo} alt="CSS" /> CSS</a></li>
                        <li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img src={NodejsLogo} alt="Node.js" /> Node.js</a></li>
                        <li><a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer"><img src={FlaskLogo} alt="Flask" /> Flask</a></li>
                        <li><a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer"><img src={NuxtjsLogo} alt="Nuxt.js" /> Nuxt.js</a></li>
                        <li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"><img src={VuejsLogo} alt="Vue.js" /> Vue.js</a></li>
                        <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={ReactLogo} alt="React.js" /> React.js</a></li>
                        <li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer"><img src={JqueryLogo} alt="JQuery" /> JQuery</a></li>
                        <li><a href="https://angular.io/" target="_blank" rel="noopener noreferrer"><img src={AngularLogo} alt="Angular" /> Angular</a></li>
                        <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><img src={TsLogo} alt="TypeScript" /> TypeScript</a></li>
                        <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img src={BootstrapLogo} alt="Bootstrap" /> Bootstrap</a></li>
                        <li><a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer"><img src={MaterialUiLogo} alt="Material-UI" /> Material-UI</a></li>
                    </ul>
                </div>
            </div>
        </section>
            <div className="continueButton-container">
                <Link to="/experience">
                    <Button
                        variant="contained" color="primary" className="continueButton">
                        Continue to Experience
                    </Button>
                </Link>
            </div></>
    );
}

export default Skills;
