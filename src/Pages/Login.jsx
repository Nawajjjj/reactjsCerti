import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email, 'Password:', password);
  };

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#121212', // Dark theme background
      fontFamily: "'Roboto', sans-serif",
    },
    formContainer: {
      backgroundColor: '#1e1e1e', // Darker form background
      borderRadius: '10px',
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
      padding: '40px',
      maxWidth: '400px',
      width: '100%',
      color: '#ffffff',
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    subheading: {
      fontSize: '18px',
      color: '#bbbbbb',
      marginBottom: '30px',
    },
    inputGroup: {
      marginBottom: '20px',
    },
    label: {
      fontSize: '14px',
      display: 'block',
      textAlign: 'left',
      marginBottom: '5px',
      color: '#aaaaaa',
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #333',
      borderRadius: '5px',
      backgroundColor: '#222', // Input background to match dark theme
      color: '#ffffff',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#007bff', // Border on focus
    },
    submitButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    submitButtonHover: {
      backgroundColor: '#0056b3',
      transform: 'translateY(-3px)', // Slight lift on hover
    },
    socialLogin: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    socialButton: {
      flex: 1,
      padding: '10px',
      border: '1px solid #444',
      borderRadius: '5px',
      marginRight: '10px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      backgroundColor: '#333',
      color: '#ffffff',
    },
    socialButtonHover: {
      backgroundColor: '#555',
      transform: 'scale(1.05)', // Subtle scaling on hover
    },
    lastSocialButton: {
      marginRight: '0',
    },
    linkText: {
      fontSize: '14px',
      marginTop: '20px',
      color: '#bbbbbb',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
    imageContainer: {
      flex: 1,
      backgroundImage: 'url(https://source.unsplash.com/1600x900/?business,workspace)', // Professional background
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '10px',
      height: '400px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Login to CertiResumeGen</h1>
        <p style={styles.subheading}>Start your journey with us</p>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = '#333')}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = '#333')}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Login
          </button>
        </form>
        <p style={styles.linkText}>
          Don't have an account? <Link to="/Signup" style={styles.link}>Sign Up</Link>
        </p>
        <div style={styles.socialLogin}>
          <button
            style={styles.socialButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.socialButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#333')}
          >
            Facebook
          </button>
          <button
            style={styles.socialButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.socialButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#333')}
          >
            Google
          </button>
          <button
            style={{ ...styles.socialButton, ...styles.lastSocialButton }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.socialButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#333')}
          >
            LinkdIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
