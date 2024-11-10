import React, { useState, useRef } from 'react';
import { FaRocket, FaClipboardList, FaCamera, FaLightbulb, FaCheckCircle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use Link for routing
import './Styles/Home.css';

const Home = () => {
    const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
    const [email, setEmail] = useState(''); // State for email input
    const howItWorksRef = useRef('HowItWorks'); // Ref for "How It Works" section
    const aboutUsRef = useRef('AboutUs'); // Ref for "About Us" section

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); // Set form submission state to true
    };

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Update email state
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
            <section ref={howItWorksRef} id="how-it-works" className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    {/* Step Cards */}
                    <div className="step-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="icon">✏️</div>
                                <h3>Upload Certificates</h3>
                                <p>Upload all your Certificates.</p>
                            </div>
                            <div className="flip-card-back">
                                <h3>Upload Certificates</h3>
                                <p>Upload your certificates easily and securely.</p>
                            </div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="icon">📄</div>
                                <h3>Choose Template</h3>
                                <p>Select a professional template that suits your style.</p>
                            </div>
                            <div className="flip-card-back">
                                <h3>Choose Template</h3>
                                <p>Select from a variety of customizable templates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="icon">🔄</div>
                                <h3>Get Preview</h3>
                                <p>View your resume in real-time as you edit.</p>
                            </div>
                            <div className="flip-card-back">
                                <h3>Get Preview</h3>
                                <p>Preview your resume as you build it.</p>
                            </div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="icon">📥</div>
                                <h3>Download</h3>
                                <p>Export your resume as a PDF for easy sharing.</p>
                            </div>
                            <div className="flip-card-back">
                                <h3>Download</h3>
                                <p>Download your professional resume instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Our Features</h2>
                <div className="feature-list">
                    {/* Feature Items */}
                    <div className="feature-item">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <FaRocket className="feature-icon" />
                                <h3>OCR-Powered Resume Creation</h3>
                                <p>Our advanced OCR analyzes your certificates and creates tailored, professional resumes in minutes.</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Our OCR feature provides a seamless, efficient experience in resume creation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <FaClipboardList className="feature-icon" />
                                <h3>Multiple Resume Templates</h3>
                                <p>Choose from a wide range of modern, ATS-friendly templates to suit your industry and style.</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Discover the perfect template to showcase your skills!</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <FaCamera className="feature-icon" />
                                <h3>OCR-Powered Data Extraction</h3>
                                <p>Our cutting-edge OCR technology accurately extracts information from your certificates, saving you time and effort.</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Fast and reliable OCR extraction for your certificates!</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <FaLightbulb className="feature-icon" />
                                <h3>Technology Highlighting</h3>
                                <p>Automatically identify and highlight key Technology from your uploaded certificates to match job requirements.</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Identify and emphasize essential technology effortlessly!</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <FaCheckCircle className="feature-icon" />
                                <h3>Quick Turnaround</h3>
                                <p>Generate your professional resume in less than 15 minutes, perfect for last-minute applications.</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Get a professional resume ready in no time!</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* About Us Section */}
            <section ref={aboutUsRef} id="about" className="about-us enhanced-about-us">
                <h2>About Us</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            CertiResume Generator is dedicated to simplifying the process of creating professional resumes. Our platform leverages advanced technology to extract data from your certificates and seamlessly generates a well-formatted resume, tailored to your needs.
                        </p>
                        <p>
                            We believe in empowering individuals to present their accomplishments in the best possible way. Whether you are a student, a professional, or looking to switch careers, our solution is here to make your journey smoother.
                        </p>
                    </div>
                    <img 
                        src="path-to-your-image.jpg" 
                        alt="About Us" 
                        className="about-image"
                    />
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact" className="contact-us">
                <h2>Contact Us</h2>
                <p>Feel free to reach out by entering your email below:</p>

                {/* Display Confirmation Message if Submitted */}
                {isSubmitted ? (
                    <div className="confirmation-message">
                        <p>Email sent! We will contact you very soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Enter Your Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </section>

            {/* Footer */}
            <footer className="footer">
            

            <div className="contact-info">
                <p>Email: <a href="mailto:nawajjj2004@gmail.com">nawajjj2004@gmail.com</a></p>
                <p>Phone: <a href="tel:7379255333">7379255333</a></p>
            </div>

            <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
            </div>
        </footer>
        </div>
    );
};

export default Home;
