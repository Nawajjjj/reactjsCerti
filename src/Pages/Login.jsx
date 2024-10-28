import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Here you can add your authentication logic
    navigate('/home'); // Redirect to home page after login
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#121212',
      fontFamily: "'Roboto', sans-serif",
    },
    formContainer: {
      backgroundColor: '#1e1e1e',
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
      backgroundColor: '#222',
      color: '#ffffff',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#007bff',
    },
    submitButton: {
      width: '100%', // You can set this to a specific value if you prefer
      maxWidth: '450px', // Increased max-width for the button
      padding: '12px',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px',
      boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.3)',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    submitButtonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)', // Slightly enlarge on hover
    },
    socialLogin: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    socialButton: {
      flex: 1,
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      marginRight: '10px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      backgroundColor: '#555', // Changed to a grayish color
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.submitButton.backgroundColor)}
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
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#666')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#555')}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button
            style={styles.socialButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#666')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#555')}
          >
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button
            style={{ ...styles.socialButton, ...styles.lastSocialButton }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#666')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#555')}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
