import React from 'react';
import './Styles/Features.css'; // Ensure the path to your CSS file is correct

const Features = () => {
    return (
        <div className="features-container">
            <h1>Features of CertiResumeGenerator</h1>
            <div className="feature">
                <h2>Customizable Templates</h2>
                <p>
                    Choose from a variety of professionally designed resume templates that can be easily customized to match your personal style and preferences.
                </p>
            </div>
            <div className="feature">
                <h2>Automatic Formatting</h2>
                <p>
                    Our platform automatically formats your resume for you, ensuring it looks polished and professional without any extra effort.
                </p>
            </div>
            <div className="feature">
                <h2>Upload Certifications</h2>
                <p>
                    Easily upload your certifications, and let our OCR technology extract the necessary details, saving you time and manual entry.
                </p>
            </div>
            <div className="feature">
                <h2>Live Preview</h2>
                <p>
                    View real-time changes to your resume as you edit, giving you instant feedback on your layout and design.
                </p>
            </div>
            <div className="feature">
                <h2>Export as PDF</h2>
                <p>
                    Once you are satisfied with your resume, download it as a professional PDF file, ready for submission to potential employers.
                </p>
            </div>
        </div>
    );
};

export default Features;
