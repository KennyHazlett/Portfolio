import React, { useState } from 'react';
import './QuizGame.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const QuizGame = () => {
    const shuffleArray = (array) => {
        const specialAnswers = ['All of the above'];
        let specialElements = [];
        let regularElements = [];

        // Segregate special answers and regular answers
        array.forEach(element => {
            if (specialAnswers.includes(element)) {
                specialElements.push(element);
            } else {
                regularElements.push(element);
            }
        });

        // Shuffle only the regular elements
        let i = regularElements.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = regularElements[i];
            regularElements[i] = regularElements[j];
            regularElements[j] = temp;
        }

        // Merge the shuffled regular elements and special elements
        return [...regularElements, ...specialElements];
    };

    const questions = [
        {
            question: 'Which company developed React?',
            answers: ['Google', 'Facebook', 'Apple', 'Microsoft'],
            correctAnswer: 'Facebook',
        },
        {
            question: 'What does HTML stand for?',
            answers: [
                'Hyper Text Markup Language',
                'High Text Machine Language',
                'Hyperlinks Text Markup Language',
                'Higher Text Markup Language',
            ],
            correctAnswer: 'Hyper Text Markup Language',
        },
        {
            question: 'What language is primarily used for styling web pages?',
            answers: ['HTML', 'JQuery', 'CSS', 'Python'],
            correctAnswer: 'CSS',
        },
        {
            question: 'Which language is used for web APIs?',
            answers: ['All of the above', 'JavaScript', 'Java', 'Python'],
            correctAnswer: 'All of the above',
        },
        {
            question: 'Which of the following is not a programming language?',
            answers: ['Python', 'Java', 'HTML', 'C++'],
            correctAnswer: 'HTML',
        },
        {
            question: 'What is the primary purpose of the ALU (Arithmetic Logic Unit)?',
            answers: [
                'Perform arithmetic and logical operations',
                'Manage memory',
                'Control input and output devices',
                'Fetch instructions',
            ],
            correctAnswer: 'Perform arithmetic and logical operations',
        },
        {
            question: 'What is the official name for Python 3?',
            answers: ['Py3', 'Python3', 'Python 3', 'P3'],
            correctAnswer: 'Python 3',
        },
        {
            question: 'What command is used to display the Python version?',
            answers: ['python --v', 'python --version', 'python -v', 'python -version'],
            correctAnswer: 'python --version',
        },
        {
            question: 'What does the "D" in SOLID stand for?',
            answers: ['Dependency', 'Dip', 'Duplication', 'Declaration'],
            correctAnswer: 'Dependency',
        },
        {
            question: 'What does API stand for?',
            answers: ['Application Programming Interface', 'Advanced Programming Interface', 'Application Program Interface', 'Advanced Program Interface'],
            correctAnswer: 'Application Programming Interface',
        },
        {
            question: 'What SQL command is used to retrieve data from a database?',
            answers: ['GET', 'FETCH', 'PULL', 'SELECT'],
            correctAnswer: 'SELECT',
        },
        {
            question: 'Which HTTP method is used to submit data to be processed to a specified resource?',
            answers: ['GET', 'POST', 'PUT', 'DELETE'],
            correctAnswer: 'POST',
        },
        {
            question: 'Which language is primarily used for machine learning?',
            answers: ['Python', 'JavaScript', 'Java', 'C++'],
            correctAnswer: 'Python',
        },
        {
            question: 'Which of the following is not a frontend technology?',
            answers: ['React', 'Angular', 'Vue', 'Django'],
            correctAnswer: 'Django',
        },
        {
            question: 'What is the full form of CRUD?',
            answers: [
                'Create, Read, Update, Delete',
                'Create, Remove, Update, Delete',
                'Create, Read, Upgrade, Delete',
                'Create, Read, Update, Deliver',
            ],
            correctAnswer: 'Create, Read, Update, Delete',
        },
        {
            question: 'What does GUI stand for?',
            answers: ['Graphical User Interface', 'General User Interface', 'Graphic User Interface', 'General Unified Interface'],
            correctAnswer: 'Graphical User Interface',
        },
        {
            question: 'Which of the following is not a database management system?',
            answers: ['MySQL', 'MongoDB', 'Oracle', 'Vue.js'],
            correctAnswer: 'Vue.js',
        },
        {
            question: 'Which software development methodology aims at developing software incrementally from the start of the project instead of delivering it all at once near the end?',
            answers: ['Waterfall model', 'Agile methodology', 'Spiral model', 'V-Model'],
            correctAnswer: 'Agile methodology',
        },
        {
            question: 'In CSS, which property is used to change the text color of an element?',
            answers: ['color', 'text-color', 'font-color', 'text-style'],
            correctAnswer: 'color',
        },
        {
            question: 'Which of these is not a JavaScript framework?',
            answers: ['React', 'Vue', 'Angular', 'Python'],
            correctAnswer: 'Python',
        },
        {
            question: 'What is the full form of JSON?',
            answers: ['JavaScript Object Notation', 'JavaScript Object Navigation', 'Java Standard Object Notation', 'JavaScript Oriented Notation'],
            correctAnswer: 'JavaScript Object Notation',
        },
        {
            question: 'Which of the following is a type of cloud computing where a platform is provided by the cloud provider to develop, run, and manage applications?',
            answers: ['PaaS', 'IaaS', 'SaaS', 'DaaS'],
            correctAnswer: 'PaaS',
        },
        {
            question: 'Which of these is not a key-value database?',
            answers: ['Redis', 'Cassandra', 'Riak', 'PostgreSQL'],
            correctAnswer: 'PostgreSQL',
        },
        {
            question: 'Which of these is not a principle of the Agile methodology?',
            answers: ['Responding to change over following a plan', 'Individuals and interactions over processes and tools', 'Working software over comprehensive documentation', 'Planning ahead for the entire project'],
            correctAnswer: 'Planning ahead for the entire project',
        },
        {
            question: 'Which HTTP status code represents OK?',
            answers: ['200', '404', '500', '303'],
            correctAnswer: '200',
        },
    ].map(question => ({
        ...question,
        answers: shuffleArray(question.answers)
    }));

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <><section id="quizgame" className='contact-section-container'>
            <div className="contact-container">
                <div className='quiz-game'>
                    {showScore ? (
                        <div className='score-section'>
                            You scored {score} out of {questions.length}
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>
                                    {questions[currentQuestion].question}
                                </div>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answers.map((answer, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerOptionClick(answer === questions[currentQuestion].correctAnswer)}
                                        className='answer-button'
                                    >
                                        {answer}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
            <div className="continueButton-container">
                <Link to="/survey">
                    <Button variant="contained" color="primary" className="continueButton">
                        Continue to Survey
                    </Button>
                </Link>
            </div></>
    );
};

export default QuizGame;