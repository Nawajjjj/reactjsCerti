import React from 'react';
import './Styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Welcome to CertiResumeGenerator</h1>
            </div>
            <div className="about-content">
                <p className="intro">
                    At CertiResumeGenerator, we believe in simplifying the resume creation process for professionals, students, and job seekers. Our platform provides you with the tools needed to build a standout resume that reflects your skills and achievements, effortlessly and accurately.
                </p>
                <h2>Our Mission</h2>
                <p className="mission-text">
                    Our goal is to help individuals like you create polished, professional resumes without the technical hassle. We combine easy-to-use features with automatic formatting to help you succeed in your job search.
                </p>
                <h2>Key Features</h2>
                <ul className="features-list">
                    <li><strong>Customizable Templates:</strong> Choose from a selection of professionally designed templates to match your style and career goals.</li>
                    <li><strong>Automatic Formatting:</strong> Say goodbye to manual formatting; our system ensures your resume meets industry standards effortlessly.</li>
                    <li><strong>Certifications Upload:</strong> Seamlessly upload your certifications with integrated OCR technology for auto-populated resume fields.</li>
                    <li><strong>Real-Time Preview:</strong> Watch your resume come to life in real-time as you make updates, allowing for instant feedback.</li>
                    <li><strong>PDF Export:</strong> Export your resume as a sleek, professional PDF ready for submission to your next potential employer.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
