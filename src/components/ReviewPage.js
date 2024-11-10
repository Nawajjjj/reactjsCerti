import React from 'react';
import { useLocation } from 'react-router-dom';

const ReviewPage = () => {
  const location = useLocation();
  const { formattedResume } = location.state || {};

  if (!formattedResume) {
    return <p>Loading...</p>;
  }

  return (
    <div className="review-container">
      <h1>Review Your Resume</h1>
      <div className="resume-section">
        <h2>Header</h2>
        <p>Name: {formattedResume.header.name}</p>
        <p>Contact Info: {formattedResume.header.contactInfo}</p>
      </div>
      
      <div className="resume-section">
        <h2>Experience</h2>
        {formattedResume.experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.jobTitle} at {exp.company}</h3>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
      
      <div className="resume-section">
        <h2>Education</h2>
        <p>{formattedResume.education[0].degree} from {formattedResume.education[0].institution}</p>
      </div>
      
      <div className="resume-section">
        <h2>Skills</h2>
        <ul>
          {formattedResume.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="resume-section">
        <h2>Projects</h2>
        {formattedResume.projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(", ")}</p>
          </div>
        ))}
      </div>

      {/* You can also display other sections like Languages, Certifications, etc. */}
    </div>
  );
};

export default ReviewPage;
