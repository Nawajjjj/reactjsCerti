import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';
import './UploadCertificate.css';

const UploadCertificate = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [jars, setJars] = useState([]);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
        setJars(files.map((file, index) => ({ id: index, name: file.name, filled: false })));
    };

    const handleUpload = () => {
        if (selectedFiles.length === 0) {
            alert('Please select a file to upload.');
            return;
        }

        let allFileNames = [];
        const ocrPromises = []; // Array to hold all OCR promises
        const extractedData = []; // Store extracted data temporarily

        jars.forEach((jar, index) => {
            setTimeout(() => {
                setJars(prevJars => {
                    const newJars = [...prevJars];
                    newJars[index].filled = true;
                    return newJars;
                });
                allFileNames.push(jar.name);

                const file = selectedFiles[index];
                if (file) {
                    const ocrPromise = Tesseract.recognize(
                        URL.createObjectURL(file),
                        'eng',
                        {
                            logger: info => console.log(info),
                        }
                    ).then(({ data: { text } }) => {
                        console.log(`Raw extracted text from ${jar.name}:`, text);

                        const nameMatch = text.match(/Name[:\s]*([^\n]+)/i);  
                        const schoolMatch = text.match(/School[:\s]*([^\n]+)/i);
                        const emailMatch = text.match(/Email[:\s]*([^\n]+)/i);
                        const certifications = text.match(/Certification[:\s]*([^\n]+)/gi) || []; 

                        const extracted = {
                            name: nameMatch ? nameMatch[1].trim() : 'N/A',
                            school: schoolMatch ? schoolMatch[1].trim() : 'N/A',
                            email: emailMatch ? emailMatch[1].trim() : 'N/A',
                            certifications: certifications.map(cert => cert.replace(/Certification[:\s]*/, '').trim()),
                            skills: ['N/A'],  // Placeholder for skills
                            projects: ['N/A']  // Placeholder for projects
                        };

                        extractedData.push(extracted);
                        console.log(`Processed extracted data from ${jar.name}:`, extracted);
                    }).catch(error => {
                        console.error(`Error processing ${jar.name}:`, error);
                    });
                    ocrPromises.push(ocrPromise); // Push OCR promise into the array
                }

                if (index === jars.length - 1) {
                    setTimeout(() => {
                        alert(`Uploaded: ${allFileNames.join(', ')}`);
                        // Wait for all OCR promises to resolve before navigating
                        Promise.all(ocrPromises).then(() => {
                            navigate('/review', {
                                state: { extractedText: extractedData }
                            });
                        });
                    }, 1000);
                }
            }, index * 1000);
        });

        setSelectedFiles([]); // Reset the selected files
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
            <button className="upload-button" onClick={handleUpload}>
                Upload
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
                        <div className="water" style={{ height: jar.filled ? '100%' : '0%' }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadCertificate;
