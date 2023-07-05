import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.scss';
import './ExplosiveButton.scss';
import './FeedbackModal.scss';

const createSpans = (word, baseClass) =>
    [...word].map((letter, index) => (
        <span className={`${baseClass} letter-${index % 8}`} key={`${letter}-${index}`}>
            {letter}
        </span>
    ));


const links = [
    { to: '/', text: 'Introduction' },
    { to: '/projects', text: 'Projects' },
    { to: '/skills', text: 'Skills' },
    { to: '/experience', text: 'Experience' },
    { to: '/education', text: 'Education' },
    { to: '/contact', text: 'Contact' },
    { to: '/quizgame', text: 'QuizGame' },
    { to: '/survey', text: 'Survey' },
];

const navItems = links.map(link => (
    <li className="nav-item animate" key={link.to}>
        <Link to={link.to} className="nav-link">
            {createSpans(link.text, 'animated-letter')}
        </Link>
    </li>
));

const buttonText = createSpans('Click Me', 'animated-button');


class Fragment {
    constructor(parent, x, y, w, h, angle, distance = 1, className2 = '') {
        const width = `${w}em`;
        const height = `${h}em`;
        const adjustedAngle = angle + Math.PI / 2;

        this.div = document.createElement('div');
        this.div.className = 'fragment';

        if (className2) {
            this.div.classList.add(className2);
        }

        this.div.style.width = width;
        this.div.style.height = height;

        parent.appendChild(this.div);

        this.s = {
            x: x - w / 2,
            y: y - h / 2,
        };
        this.d = {
            x: this.s.x + Math.sin(adjustedAngle) * distance,
            y: this.s.y - Math.cos(adjustedAngle) * distance,
        };
    }

    runSequence(el, keyframesArray, duration = 1000, easing = 'linear', delay = 0) {
        const animation = el.animate(keyframesArray, {
            duration,
            easing,
            delay,
        });

        animation.onfinish = () => {
            const parentCL = el.parentElement.classList;

            el.remove();

            if (!document.querySelector('.fragment')) {
                parentCL.remove(...parentCL);
            }
        };
    }
}

class FragmentDebris extends Fragment {
    constructor(parent, x, y, w, h, angle, distance, duration, easing) {
        super(parent, x, y, w, h, angle, distance, 'fragment--debris');

        const maxAngle = 1080;
        const rotX = randomInt(0, maxAngle);
        const rotY = randomInt(0, maxAngle);
        const rotZ = randomInt(0, maxAngle);

        this.runSequence(
            this.div,
            [
                { opacity: 1, transform: `translate(${this.s.x}em,${this.s.y}em) rotateX(0) rotateY(0) rotateZ(0)` },
                { opacity: 1 },
                { opacity: 1 },
                { opacity: 1 },
                {
                    opacity: 0,
                    transform: `translate(${this.d.x}em,${this.d.y}em) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`,
                },
            ],
            randomInt(duration / 2, duration),
            easing
        );
    }
}

class FragmentFire extends Fragment {
    constructor(parent, x, y, w, h, angle, distance, duration, easing) {
        super(parent, x, y, w, h, angle, distance, 'fragment--fire');

        const sx = this.s.x;
        const sy = this.s.y;
        const dx = this.d.x;
        const dy = this.d.y;

        this.runSequence(
            this.div,
            [
                { background: 'hsl(200, 52%, 90%)', transform: `translate(${sx}em,${sy}em) scale(1)` },
                { background: 'hsl(200, 52%, 75%)', transform: `translate(${sx + (dx - sx) * 0.25}em,${sy + (dy - sy) * 0.25}em) scale(4)` },
                { background: 'hsl(200, 52%, 60%)', transform: `translate(${sx + (dx - sx) * 0.5}em,${sy + (dy - sy) * 0.5}em) scale(7)` },
                { background: 'hsl(200, 26%, 80%)' },
                { background: 'hsl(200, 0%, 100%)', transform: `translate(${dx}em,${dy}em) scale(0)` },
            ],
            randomInt(duration / 2, duration),
            easing
        );
    }
}

function calcAngle(x1, y1, x2, y2) {
    const opposite = y2 - y1;
    const adjacent = x2 - x1;
    let angle = Math.atan(opposite / adjacent);

    if (adjacent < 0) {
        angle += Math.PI;
    }

    if (isNaN(angle)) {
        angle = 0;
    }

    return angle;
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

class ExplosiveActionButton {
    constructor(el) {
        this.element = document.querySelector(el);
        this.width = 0;
        this.height = 0;
        this.centerX = 0;
        this.centerY = 0;
        this.pieceWidth = 0;
        this.pieceHeight = 0;
        this.piecesX = 9;
        this.piecesY = 4;
        this.duration = 1000;

        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions.bind(this));

        if (document.body.animate) {
            this.element.addEventListener('click', this.explode.bind(this, this.duration));
        }
    }

    updateDimensions() {
        if (!this.element) {
            return;
        }
        this.width = this.element.offsetWidth / parseFloat(getComputedStyle(document.documentElement).fontSize);
        this.height = this.element.offsetHeight / parseFloat(getComputedStyle(document.documentElement).fontSize);
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.pieceWidth = this.width / this.piecesX;
        this.pieceHeight = this.height / this.piecesY;
    }

    explode(duration) {
        const explodingState = 'exploding';

        if (!this.element.classList.contains(explodingState)) {
            this.element.classList.add(explodingState);

            this.createFragments('fragmentFire', 15, duration);
            this.createFragments('fragmentDebris', this.piecesX * this.piecesY, duration);
        }
    }

    createFragments(kind, count, duration) {
        for (let c = 0; c < count; ++c) {
            let r = randomFloat(0.25, 0.5);
            let diam = r * 2;
            let xBound = this.centerX - r;
            let yBound = this.centerY - r;
            let easing = 'cubic-bezier(0.15,0.5,0.5,0.85)';

            if (kind === 'fragmentFire') {
                let x = this.centerX + randomFloat(-xBound, xBound);
                let y = this.centerY + randomFloat(-yBound, yBound);
                let a = calcAngle(this.centerX, this.centerY, x, y);
                let dist = randomFloat(1, 5);

                new FragmentFire(this.element, x, y, diam, diam, a, dist, duration, easing);
            } else if (kind === 'fragmentDebris') {
                let x = (this.pieceWidth / 2) + this.pieceWidth * (c % this.piecesX);
                let y = (this.pieceHeight / 2) + this.pieceHeight * Math.floor(c / this.piecesX);
                let a = calcAngle(this.centerX, this.centerY, x, y);
                let dist = randomFloat(4, 7);

                new FragmentDebris(this.element, x, y, this.pieceWidth, this.pieceHeight, a, dist, duration, easing);
            }
        }
    }

    destroy() {
        this.element.removeEventListener('click', this.explode);
    }
}

const Header = ({ handleClick, isClicked, isExploded }) => {
    const [showButton, setShowButton] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    useEffect(() => {
        if (isClicked) {
            setShowButton(false);
            setIsSmallScreen(matches);
        } else {
            setShowButton(true);
        }
    }, [isClicked, matches]);

    const handleExplosion = () => {
        handleClick();
    };

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    useEffect(() => {
        const button = new ExplosiveActionButton('.button-bounce');

        return () => {
            button.destroy();
        };
    }, []);

    if (isSmallScreen && isClicked) {
        return (
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Button variant="contained"
                            className='header-menu' {...bindTrigger(popupState)}>
                            <MenuIcon className='menu-icon' />
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            {links.map((link) => (
                                <MenuItem
                                    key={link.to}
                                    onClick={() => {
                                        popupState.close();
                                        handleNavigation(link.to);
                                    }}

                                >
                                    {link.text}
                                </MenuItem>
                            ))}
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        );
    }

    return (
        <header className={`header-class ${isClicked ? '' : 'center'}`}>
            <nav>
                {isClicked ? (
                    <ul className="nav-list">{navItems}</ul>
                ) : (
                    <>
                        {showButton && (
                            <Button
                                className={`button-bounce`}
                                variant="contained"
                                color="primary"
                                onClick={handleExplosion}
                            >
                                {!isExploded && buttonText}
                            </Button>
                        )}
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
