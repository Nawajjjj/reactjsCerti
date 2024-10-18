import React from 'react';
import { FaRocket, FaClipboardList, FaCamera, FaLightbulb, FaClock, FaCheckCircle, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Styles/Home.css';

const Home = () => {
    return (
        <div className="homepage">
        <div className="hero"></div>
        <div className="welcome-section">
          <h1>Welcome to CertiResume Generator</h1>
          <p>Your one-stop solution for creating professional resumes.</p>
          
<button className ="get-started-button" onClick={() => window.location.href='/upload'}>Get Started</button>

         
        </div>
    

            {/* How It Works Section */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                <div className="step-card">
                        <div className="icon">✏️</div>
                        <h3>Upload Certificates</h3>
                        <p>Upload your all your Certificate  </p>
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
            <section className="why-certiresume">
                <h2>Why CertiResume Generator?</h2>
                <div className="benefits">
                    <div className="benefit-card">
                        <FaRocket className="icon" />
                        <h3>OCR-Powered Resume Creation</h3>
                        <p>Our OCR will analyze your certificates and create tailored, professional resumes in a few minutes.</p>
                    </div>
                    <div className="benefit-card">
                        <FaClipboardList className="icon" />
                        <h3>Multiple Resume Templates</h3>
                        <p>Choose from a wide range of modern, ATS-friendly templates to suit your industry and style.</p>
                    </div>
                    <div className="benefit-card">
                        <FaLightbulb className="icon" />
                        <h3>Skills Highlighting</h3>
                        <p>Automatically identify and highlight key skills and achievements from your certificates to match job requirements.</p>
                    </div>
                    <div className="benefit-card">
                        <FaClock className="icon" />
                        <h3>Quick Turnaround</h3>
                        <p>Generate your professional resume in less than 15 minutes, perfect for last-minute applications.</p>
                    </div>
                    <div className="benefit-card">
                        <FaCheckCircle className="icon" />
                        <h3>ATS Optimization</h3>
                        <p>Ensure your resume passes Applicant Tracking Systems with our optimized formatting and keyword suggestions.</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Features</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <FaRocket className="feature-icon" />
                        <h3>Customizable Templates</h3>
                        <p>Offering multiple professional templates with various layouts will give users flexibility.</p>
                    </div>
                    <div className="feature-item">
                        <FaClipboardList className="feature-icon" />
                        <h3>Automatic Formatting</h3>
                        <p>Simplifies the resume-building process by organizing user input into a structured format.</p>
                    </div>
                    <div className="feature-item">
                        <FaCamera className="feature-icon" />
                        <h3>Upload Certifications</h3>
                        <p>Allows users to upload certifications and have them integrated directly into the resume.</p>
                    </div>
                    <div className="feature-item">
                        <FaLightbulb className="feature-icon" />
                        <h3>Live Preview</h3>
                        <p>Real-time feedback as users input data is essential for helping them visualize the final resume.</p>
                    </div>
                    <div className="feature-item">
                        <FaCheckCircle className="feature-icon" />
                        <h3>Export as PDF</h3>
                        <p>Providing the ability to download the resume as a PDF is crucial for sharing professional documents.</p>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out.</p>
                <div className="contact-button-container">
                    <button className="contact-button" onClick={() => window.location.href = '/contact'}>Contact Us</button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <p>© 2024 CertiResume Generator. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="social-icon" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
