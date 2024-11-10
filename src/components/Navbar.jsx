import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CertiResumeGen</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                            <ScrollLink
                                className="nav-link"
                                to="how-it-works"
                                smooth={true}
                                duration={500}
                            >
                                How It Works
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                className="nav-link"
                                to="features"
                                smooth={true}
                                duration={500}
                            >
                                Features
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                className="nav-link"
                                to="about"
                                smooth={true}
                                duration={500}
                            >
                                About
                            </ScrollLink>
                        </li>
                        
                        <li className="nav-item">
                            <ScrollLink
                                className="nav-link"
                                to="contact"
                                smooth={true}
                                duration={500}
                            >
                                Contact Us
                            </ScrollLink>
                        </li>
                    </ul>
                    <a href="/login" className="nav-link signin">Log In</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
