import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createWorker } from 'tesseract.js';
import { generateResume } from '../services/openaiService';
import './UploadCertificate.css';

const UploadCertificate = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [jars, setJars] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const workerRef = useRef(null);

  // Initialize worker and handle cleanup
  useEffect(() => {
    const initializeWorker = async () => {
      try {
        const worker = createWorker();
        workerRef.current = worker;

        // Load and initialize the worker
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
      } catch (error) {
        console.error("Error initializing Tesseract worker:", error);
      }
    };

    initializeWorker();

    // Cleanup worker when component unmounts
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  // Handle file input change
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file.name));
    setSelectedFiles(validFiles);
    setJars(validFiles.map((file, index) => ({
      id: index,
      name: file.name,
      filled: false,
      filling: false,
    })));
  };

  // Extract relevant data from OCR text
  const extractRelevantInfo = (text) => {
    const relevantData = {};
    const patterns = {
      name: /(Name|Full Name|Student Name):?\s*([A-Za-z\s]+)/i,
      date: /(Date|Issued on|Date of Issue):?\s*(\d{2}\/\d{2}\/\d{4})/,
      qualification: /(Qualification|Degree|Course):?\s*([A-Za-z\s]+)/i,
      issuer: /(Issued By|Organization|Institution):?\s*([A-Za-z\s]+)/i,
    };

    Object.entries(patterns).forEach(([key, pattern]) => {
      const match = text.match(pattern);
      if (match) relevantData[key] = match[2].trim();
    });

    return relevantData;
  };

  // Handle file upload and OCR processing
  const handleUpload = useCallback(async () => {
    if (selectedFiles.length === 0) {
      alert('Please select a file to upload.');
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    const extractedDataArray = [];

    const worker = workerRef.current;
    if (!worker) {
      alert('OCR worker is not initialized');
      return;
    }

    const totalFiles = selectedFiles.length;

    for (let currentFileIndex = 0; currentFileIndex < totalFiles; currentFileIndex++) {
      const file = selectedFiles[currentFileIndex];
      setJars(prevJars => prevJars.map((jar, index) =>
        index === currentFileIndex ? { ...jar, filling: true } : jar
      ));

      try {
        // OCR process using Tesseract
        const { data: { text } } = await worker.recognize(file);
        const extractedData = extractRelevantInfo(text);
        extractedDataArray.push(extractedData);

        setJars(prevJars => prevJars.map((jar, index) =>
          index === currentFileIndex ? { ...jar, filled: true, filling: false } : jar
        ));

        // Update progress bar
        setProgress(Math.round(((currentFileIndex + 1) / totalFiles) * 100));
      } catch (error) {
        console.error(`Error processing ${file.name}:`, error);
        setJars(prevJars => prevJars.map((jar, index) =>
          index === currentFileIndex ? { ...jar, filling: false } : jar
        ));
      }
    }

    // Generate resume data
    try {
      const formattedData = await generateResume({
        sections: {
          header: {
            name: extractedDataArray[0].name || 'Unknown Name',
            contactInfo: "email@example.com",
          },
          professionalSummary: "A motivated individual with experience in XYZ...",
          experience: extractedDataArray.map(data => ({
            jobTitle: data.qualification || 'N/A',
            company: data.issuer || 'N/A',
            startDate: data.date || 'N/A',
            endDate: "Present",
            description: "Description of role responsibilities.",
          })),
          education: [{
            degree: "Bachelor of XYZ",
            institution: "XYZ University",
            graduationDate: "2024",
          }],
          skills: ["Skill 1", "Skill 2", "Skill 3"],
          certifications: extractedDataArray.map(data => ({
            certificationName: data.qualification || 'Unknown',
            issuer: data.issuer || 'Unknown',
            date: data.date || 'Unknown',
          })),
          languages: ["English", "Spanish"],
          projects: [{
            title: "Project Title",
            description: "Project Description",
            technologies: ["React", "Node.js"],
          }],
          volunteerExperience: [{
            role: "Volunteer",
            organization: "XYZ Organization",
            dates: "2022 - 2023",
            description: "Description of volunteer work."
          }],
        },
      });

      navigate('/review', { state: { formattedResume: formattedData } });
    } catch (error) {
      console.error('Error formatting resume:', error);
    }

    setIsProcessing(false);
    setProgress(100);
  }, [selectedFiles, navigate]);

  return (
    <div className="upload-container">
      <h2>Upload Your Certificates</h2>
      <div className="upload-area">
        <input
          type="file"
          multiple
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
        <button onClick={handleUpload} disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Upload'}
        </button>
      </div>
      {jars.length > 0 && (
        <div className="progress-container">
          {jars.map((jar) => (
            <div key={jar.id} className="jar">
              <span>{jar.name}</span>
              {jar.filling && <span>Processing...</span>}
              {jar.filled && <span>Completed</span>}
            </div>
          ))}
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadCertificate;
