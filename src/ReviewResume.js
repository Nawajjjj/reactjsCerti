import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ReviewResume.css';

const ReviewResume = () => {
    const location = useLocation();
    const [data, setData] = useState(location.state?.extractedText || []);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState([...data]);

    if (!data || data.length === 0) {
        return <p>No data available. Please upload certificates first.</p>;
    }

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (index, field, value) => {
        const newData = [...editedData];
        newData[index][field] = value;
        setEditedData(newData);
    };

    const handleSave = () => {
        setData(editedData);
        setIsEditing(false);
    };

    return (
        <div className="resume-container">
            <h2>Your Resume</h2>
            {data.map((item, index) => (
                <div className="resume-section" key={index}>
                    <div className="resume-field">
                        <label>Name:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedData[index].name}
                                onChange={(e) => handleChange(index, 'name', e.target.value)}
                            />
                        ) : (
                            <span>{item.name}</span>
                        )}
                    </div>
                    <div className="resume-field">
                        <label>School:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedData[index].school}
                                onChange={(e) => handleChange(index, 'school', e.target.value)}
                            />
                        ) : (
                            <span>{item.school}</span>
                        )}
                    </div>
                    <div className="resume-field">
                        <label>Email:</label>
                        {isEditing ? (
                            <input
                                type="email"
                                value={editedData[index].email}
                                onChange={(e) => handleChange(index, 'email', e.target.value)}
                            />
                        ) : (
                            <span>{item.email}</span>
                        )}
                    </div>
                    <div className="resume-field">
                        <label>Certifications:</label>
                        {isEditing ? (
                            <textarea
                                value={editedData[index].certifications.join(', ')}
                                onChange={(e) => handleChange(index, 'certifications', e.target.value.split(', '))}
                            />
                        ) : (
                            <span>{item.certifications.join(', ')}</span>
                        )}
                    </div>
                    <div className="resume-field">
                        <label>Skills:</label>
                        {isEditing ? (
                            <textarea
                                value={editedData[index].skills.join(', ')}
                                onChange={(e) => handleChange(index, 'skills', e.target.value.split(', '))}
                            />
                        ) : (
                            <span>{item.skills.join(', ')}</span>
                        )}
                    </div>
                    <div className="resume-field">
                        <label>Projects:</label>
                        {isEditing ? (
                            <textarea
                                value={editedData[index].projects.join(', ')}
                                onChange={(e) => handleChange(index, 'projects', e.target.value.split(', '))}
                            />
                        ) : (
                            <span>{item.projects.join(', ')}</span>
                        )}
                    </div>
                </div>
            ))}
            <div className="resume-buttons">
                {isEditing ? (
                    <button className="save-button" onClick={handleSave}>Save</button>
                ) : (
                    <button className="edit-button" onClick={handleEditToggle}>Edit</button>
                )}
            </div>
        </div>
    );
};

export default ReviewResume;
