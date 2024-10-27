import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';
import './UploadCertificate.css';

const UploadCertificate = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [jars, setJars] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
        setJars(files.map((file, index) => ({ id: index, name: file.name, filled: false, filling: false }))); // Added "filling" state
    };

    const handleUpload = () => {
        if (selectedFiles.length === 0) {
            alert('Please select a file to upload.');
            return;
        }

        setIsProcessing(true);
        const ocrPromises = [];
        const extractedData = [];

        jars.forEach((jar, index) => {
            setTimeout(() => {
                setJars(prevJars => {
                    const newJars = [...prevJars];
                    newJars[index].filling = true; // Start filling water animation
                    return newJars;
                });

                const file = selectedFiles[index];
                if (file) {
                    const ocrPromise = Tesseract.recognize(
                        URL.createObjectURL(file),
                        'eng',
                        {
                            logger: info => console.log(info),
                        }
                    ).then(({ data: { text } }) => {
                        const nameMatch = text.match(/Name[:\s]*([^\n]+)/i);
                        const schoolMatch = text.match(/School[:\s]*([^\n]+)/i);
                        const emailMatch = text.match(/Email[:\s]*([^\n]+)/i);
                        const certifications = text.match(/Certification[:\s]*([^\n]+)/gi) || [];

                        const extracted = {
                            name: nameMatch ? nameMatch[1].trim() : 'N/A',
                            school: schoolMatch ? schoolMatch[1].trim() : 'N/A',
                            email: emailMatch ? emailMatch[1].trim() : 'N/A',
                            certifications: certifications.map(cert => cert.replace(/Certification[:\s]*/, '').trim()),
                            skills: ['N/A'],
                            projects: ['N/A']
                        };

                        extractedData.push(extracted);

                        setJars(prevJars => {
                            const updatedJars = [...prevJars];
                            updatedJars[index].filled = true; // Complete the water filling
                            return updatedJars;
                        });
                    }).catch(error => {
                        console.error(`Error processing ${jar.name}:`, error);
                    });

                    ocrPromises.push(ocrPromise);
                }

                if (index === jars.length - 1) {
                    // Wait for all OCR promises to resolve before navigating
                    Promise.all(ocrPromises).then(() => {
                        setIsProcessing(false);
                        navigate('/review', {
                            state: { extractedText: extractedData }
                        });
                    });
                }
            }, index * 2000); // Delay for each jar filling animation
        });

        setSelectedFiles([]);
    };

    return (
        <div className="upload-container">
            <h2>Upload Your Certificates</h2>
            <div className="upload-area" onClick={() => document.getElementById('file-input').click()}>
                <p>Drag & drop your file here, or click to select files</p>
                <input
                    id="file-input"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    multiple
                    onChange={handleFileChange}
                />
            </div>
            <button className="upload-button" onClick={handleUpload} disabled={isProcessing}>
                {isProcessing ? 'Processing...' : 'Upload'}
            </button>
            {selectedFiles.length > 0 && (
                <div className="file-names">
                    {selectedFiles.map(file => (
                        <p key={file.name}>{file.name}</p>
                    ))}
                </div>
            )}
            <div className="jars-container">
                {jars.map((jar) => (
                    <div className="jar" key={jar.id}>
                        <div className="jar-label">{jar.name}</div>
                        <div className={`water ${jar.filling ? 'filling' : ''} ${jar.filled ? 'filled' : ''}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadCertificate;
