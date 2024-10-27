import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ReviewResume.css';

const ReviewResume = () => {
    const location = useLocation();
    const [data, setData] = useState(location.state?.extractedText || []);
    const [isEditing, setIsEditing] = useState(true);  // By default, we are in "Edit Resume" mode
    const [editedData, setEditedData] = useState([...data]);

    if (!data || data.length === 0) {
        return <p>No data available. Please upload certificates first.</p>;
    }

    const handleTabSwitch = (tab) => {
        if (tab === 'edit') {
            setIsEditing(true);
        } else {
            setIsEditing(false);
        }
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
            <h2>Generate Your Resume</h2>
            
            {/* Tabs for Edit and Preview */}
            <div className="tabs">
                <span 
                    className={isEditing ? "active-tab" : ""} 
                    onClick={() => handleTabSwitch('edit')}
                >
                    Edit Resume
                </span>
                <span 
                    className={!isEditing ? "active-tab" : ""} 
                    onClick={() => handleTabSwitch('preview')}
                >
                    Preview
                </span>
            </div>

            {/* Conditional Rendering based on the selected tab */}
            {isEditing ? (
                // Edit Resume form
                <>
                    {editedData.map((item, index) => (
                        <div className="resume-section card" key={index}>
                            <div className="row">
                                <div className="col">
                                    <div className="resume-field">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            value={editedData[index].name}
                                            onChange={(e) => handleChange(index, 'name', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="resume-field">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            value={editedData[index].email}
                                            onChange={(e) => handleChange(index, 'email', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="resume-field">
                                        <label>Phone</label>
                                        <input
                                            type="tel"
                                            value={editedData[index].phone}
                                            onChange={(e) => handleChange(index, 'phone', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="resume-field">
                                        <label>Skills</label>
                                        <textarea
                                            value={editedData[index].skills?.join(', ') || ''}
                                            onChange={(e) => handleChange(index, 'skills', e.target.value.split(', '))}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="resume-field">
                                <label>Experience</label>
                                <textarea
                                    value={editedData[index].experience || ''}
                                    onChange={(e) => handleChange(index, 'experience', e.target.value)}
                                />
                            </div>
                            <div className="resume-field">
                                <label>Education</label>
                                <textarea
                                    value={editedData[index].education || ''}
                                    onChange={(e) => handleChange(index, 'education', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="resume-buttons">
                        <button className="save-button" onClick={handleSave}>Save</button>
                    </div>
                </>
            ) : (
                // Preview Resume (read-only view)
                <>
                    {data.map((item, index) => (
                        <div className="resume-section card" key={index}>
                            <div className="row">
                                <div className="col">
                                    <div className="resume-field">
                                        <label>Full Name</label>
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="resume-field">
                                        <label>Email</label>
                                        <span>{item.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="resume-field">
                                        <label>Phone</label>
                                        <span>{item.phone}</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="resume-field">
                                        <label>Skills</label>
                                        <span>{item.skills?.join(', ') || 'No skills listed'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-field">
                                <label>Experience</label>
                                <span>{item.experience || 'No experience listed'}</span>
                            </div>
                            <div className="resume-field">
                                <label>Education</label>
                                <span>{item.education || 'No education listed'}</span>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default ReviewResume;
