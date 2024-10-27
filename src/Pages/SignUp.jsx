import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
  const [isFocused, setIsFocused] = useState({
    name: false,
    username: false,
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);

  const handleFocus = (field) => {
    setIsFocused((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setIsFocused((prevState) => ({
        ...prevState,
        [field]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate a loading state
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#121212",
        color: "#f0f0f0",
        padding: "0 15px",
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes spinner {
            to { transform: rotate(360deg); }
          }
          .form-container {
            width: 100%;
            max-width: 400px;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            background-color: #1e1e1e;
            border-radius: 10px;
            text-align: center;
            animation: fadeIn 1.2s ease-in-out;
          }
          .input-field {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
            background-color: #2a2a2a;
            color: #f0f0f0;
            border: 1px solid #333;
            outline: none;
            box-sizing: border-box;
            margin-bottom: 20px;
            transition: border-color 0.3s ease, transform 0.2s ease;
            position: relative;
          }
          .input-field:focus {
            border-color: #2196f3;
            transform: scale(1.02);
          }
          .submit-button {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            font-weight: bold;
            background-color: #2196f3;
            color: #f0f0f0;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
            position: relative;
          }
          .submit-button:hover {
            background-color: #1976d2;
            transform: scale(1.05);
          }
          .submit-button .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid #fff;
            border-radius: 50%;
            animation: spinner 0.6s linear infinite;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .floating-label {
            position: absolute;
            top: -6px;
            left: 12px;
            font-size: 12px;
            color: #b3b3b3;
            transition: color 0.3s;
          }
          .floating-label-active {
            color: #2196f3;
          }
          .link {
            color: #2196f3;
            text-decoration: none;
            transition: color 0.3s;
          }
          .link:hover {
            color: #1976d2;
          }
          .social-buttons {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
          }
          .social-button {
            flex: 1;
            margin: 0 5px;
            padding: 10px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s;
            color: white;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
          }
          .social-button:hover {
            transform: scale(1.05);
          }
          .facebook { background-color: #3b5998; }
          .google { background-color: #db4437; }
          .linkedin { background-color: #0077b5; }
          .heading {
            animation: fadeInDown 1.5s ease;
          }
        `}
      </style>

      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="heading" style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "bold" }}>
          Welcome to CertiResume Generator
        </h1>
        <h2 style={{ color: "#b3b3b3", marginBottom: "20px", fontSize: "18px" }}>Sign Up</h2>

        {['name', 'username', 'email', 'password'].map((field, index) => (
          <div style={{ position: "relative" }} key={index}>
            <input
              type={field === 'password' ? 'password' : 'text'}
              className="input-field"
              aria-label={field}
              onFocus={() => handleFocus(field)}
              onBlur={(e) => handleBlur(field, e.target.value)}
              placeholder={`Enter your ${field}`}
              style={{ borderColor: isFocused[field] ? "#2196f3" : "#333" }}
            />
            <span className={`floating-label ${isFocused[field] ? "floating-label-active" : ""}`}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </span>
          </div>
        ))}

        <div className="social-buttons">
          <button type="button" className="social-button facebook">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            Facebook
          </button>
          <button type="button" className="social-button google">
            <FontAwesomeIcon icon={faGoogle} className="icon" />
            Google
          </button>
          <button type="button" className="social-button linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            LinkedIn
          </button>
        </div>

        <button type="submit" className="submit-button">
          {loading ? <div className="spinner"></div> : "Sign Up"}
        </button>

        <div style={{ marginTop: "15px", fontSize: "14px", color: "#b3b3b3" }}>
          Already have an account?{" "}
          <a href="/login" className="link">Login</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
