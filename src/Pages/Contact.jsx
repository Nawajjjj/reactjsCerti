import React, { useState } from 'react';
import './Styles/Contact.css'; // Ensure this path is correct

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name && email && message) {
            setIsSubmitting(true); // Disable the button
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            
            // Simulate async operation (like sending to a server)
            setTimeout(() => {
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
                setSuccess(true);
                setIsSubmitting(false); // Re-enable the button
            }, 1000); // Simulated delay
        } else {
            console.log('Please fill in all fields.');
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            {success && <p className="success-message">Your message has been sent successfully!</p>}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default Contact;
