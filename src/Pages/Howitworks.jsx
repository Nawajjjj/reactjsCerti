import React from 'react';

const Navbar = ({ scrollToHowItWorks }) => {
    return (
        <nav>
            <ul>
                <li onClick={scrollToHowItWorks}>How It Works</li>
                <li><a href="/upload">Get Started</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
