import React, { useRef } from 'react';
import { FaRocket, FaClipboardList, FaCamera, FaLightbulb, FaCheckCircle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use Link for routing
import './Styles/Home.css';

const Home = () => {
    const howItWorksRef = useRef('HowItWorks'); // Ref for "How It Works" section

   
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
                    <h3>Skills Highlighting</h3>
                    <p>Automatically identify and highlight key skills from your certificates to match job requirements.</p>
                </div>
                <div className="flip-card-back">
                    <p>Identify and emphasize essential skills effortlessly!</p>
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

        <div className="feature-item">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <FaCheckCircle className="feature-icon" />
                    <h3>ATS Optimization</h3>
                    <p>Ensure your resume passes Applicant Tracking Systems with our optimized formatting and keyword suggestions.</p>
                </div>
                <div className="flip-card-back">
                    <p>Maximize your chances of passing ATS checks!</p>
                </div>
            </div>
        </div>
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
