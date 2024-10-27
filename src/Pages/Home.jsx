import React, { useRef } from 'react';
import { FaRocket, FaClipboardList, FaCamera, FaLightbulb, FaCheckCircle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use Link for routing
import './Styles/Home.css';

const Home = () => {
    const howItWorksRef = useRef('HowItWorks'); // Ref for "How It Works" section

    const scrollToSection = () => {
        if (howItWorksRef.current) {
            howItWorksRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="homepage">
            <div className="hero"></div>
            <div className="welcome-section">
                <h1>Welcome to CertiResume Generator</h1>
                <p>Your one-stop solution for creating professional resumes.</p>
                <Link to="/upload" className="get-started-button">Get Started</Link>
                
            </div>

            {/* How It Works Section */}
            <section ref={howItWorksRef} className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step-card">
                        <div className="icon">✏️</div>
                        <h3>Upload Certificates</h3>
                        <p>Upload all your Certificates.</p>
                    </div>
                    <div className="step-card">
                        <div className="icon">📄</div>
                        <h3>Choose Template</h3>
                        <p>Select a professional template that suits your style.</p>
                    </div>
                    <div className="step-card">
                        <div className="icon">🔄</div>
                        <h3>Get Preview</h3>
                        <p>View your resume in real-time as you edit.</p>
                    </div>
                    <div className="step-card">
                        <div className="icon">📥</div>
                        <h3>Download</h3>
                        <p>Export your resume as a PDF for easy sharing.</p>
                    </div>
                </div>
            </section>

            {/* Why CertiResume Section */}
           


            {/* Features Section */}
            <section className="features">
    <h2>Our Features</h2>
    <div className="feature-list">
        <div className="feature-item">
            <FaRocket className="feature-icon" />
            <h3>Customizable Templates</h3>
            <p>Choose from a variety of professional resume templates designed to match your style and industry.</p>
        </div>
        <div className="feature-item">
            <FaClipboardList className="feature-icon" />
            <h3>Automatic Formatting</h3>
            <p>Our system automatically formats your resume to look professional and polished.</p>
        </div>
        <div className="feature-item">
            <FaCamera className="feature-icon" />
            <h3>Upload Certifications</h3>
            <p>Seamlessly integrate certifications directly into your resume with a simple upload.</p>
        </div>
        <div className="feature-item">
            <FaLightbulb className="feature-icon" />
            <h3>Live Preview</h3>
            <p>Get real-time feedback to see how your resume will look while editing.</p>
        </div>
        <div className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <h3>Export as PDF</h3>
            <p>Easily download your resume as a PDF for professional sharing and printing.</p>
        </div>
    </div>
</section>



            {/* Contact Us Section */}
            <section className="contact-section">
    <h2>Contact Us</h2>
    <p>If you have any questions, feel free to reach out.</p>
    <div className="contact-button-container">
        <Link to="/contact" className="contact-button">Get in Touch</Link>
    </div>
</section>


            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-3xl font-bold mb-4">CertiResumeGenerator</h3>
                <p className="text-gray-400">Building professional resumes with ease.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><Link to="#about" className="hover:text-blue-400 transition-colors">About</Link></li>
                    <li><Link to="#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                    <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                </ul>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 social-section">
                <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-6 text-center border-top">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} CertiResume Generator. All rights reserved.</p>
        </div>
    </div>
</footer>

        </div>
    );
};

export default Home;
