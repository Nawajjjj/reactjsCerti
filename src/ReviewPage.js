import React from 'react';
import ResumeForm from '../components/ResumeForm';
import Preview from '../components/Preview';

const ReviewPage = () => {give 
  const resumeData = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    summary: 'Experienced professional with a strong background in...',
    experience: `Software Engineer at Tech Co. (2018-Present) - Developed...`,
    education: 'Bachelor of Science in Computer Science, University of Technology (2012-2016)'
  };

  return (
    <div>
      <h1>Resume Review</h1>
      <ResumeForm initialData={resumeData} />
      <Preview resumeData={resumeData} />
    </div>
  );
};

export default ReviewPage;
