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
        setJars(
            files.map((file, index) => ({
                id: index,
                name: file.name,
                filled: false,
                filling: false,
            }))
        );
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) {
            alert('Please select a file to upload.');
            return;
        }

        setIsProcessing(true);
        const extractedTextArray = [];
        const ocrPromises = [];

        for (let index = 0; index < selectedFiles.length; index++) {
            const file = selectedFiles[index];

            setJars((prevJars) => {
                const newJars = [...prevJars];
                newJars[index].filling = true;
                return newJars;
            });

            const ocrPromise = Tesseract.recognize(URL.createObjectURL(file), 'eng', {
                logger: (info) => console.log(info),
            })
                .then(({ data: { text } }) => {
                    extractedTextArray.push(text);

                    setJars((prevJars) => {
                        const updatedJars = [...prevJars];
                        updatedJars[index].filled = true;
                        return updatedJars;
                    });
                })
                .catch((error) => {
                    console.error(`Error processing ${file.name}:`, error);
                });

            ocrPromises.push(ocrPromise);

            // Delay to simulate water filling animation
            await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        // Wait for all OCR processes to finish
        Promise.all(ocrPromises).then(() => {
            navigate('/review', {
                state: { extractedText: extractedTextArray },
            });

            setIsProcessing(false);
        });
    };

    return (
        <div className="upload-container">
            <h2>Upload Your Certificates</h2>

            <div
                className="upload-area"
                onClick={() => document.getElementById('file-input').click()}
            >
                <p>Drag & drop your file here, or click to select files</p>
                <input
                    id="file-input"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    multiple
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </div>

            <button className="upload-button" onClick={handleUpload} disabled={isProcessing}>
                {isProcessing ? 'Processing...' : 'Upload'}
            </button>

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
