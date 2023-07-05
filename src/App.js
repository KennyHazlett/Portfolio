import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import QuizGame from './components/Quizgame';
import FeedbackModal from './components/FeedbackModal';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isExploded, setIsExploded] = useState(false);
    const [navOpen, setNavOpen] = useState(false);


    const handleClick = () => {
        if (!isClicked) {
            setIsExploded(true);
            setTimeout(() => {
                setIsClicked(true);
                setIsExploded(false);
                setNavOpen(true);
            }, 1000);
        }
    };

    return (
        <div className={`App ${navOpen ? '' : 'App--black'}`}>
            <Router>
                <ScrollToTop />
                <Header handleClick={handleClick} isClicked={isClicked} isExploded={isExploded} />
                {navOpen && (
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/quizgame" element={<QuizGame />} />
                        <Route path="/survey" element={<FeedbackModal />} />
                        <Route path="/" element={<Intro />} />
                    </Routes>
                )}
                <Footer />
            </Router>
        </div>
    );
};

export default App;
