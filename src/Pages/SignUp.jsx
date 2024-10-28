import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, email, password, confirmPassword } = formData;

    if (!name || !username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
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
      }}
    >
      <style>
        {`
          .form-container {
            width: 100%;
            max-width: 400px;
            padding: 20px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
            background-color: #1e1e1e;
            border-radius: 10px;
            text-align: center;
            transform: translateY(-20px);
            opacity: ${fadeIn ? '1' : '0'};
            transition: transform 0.8s ease, opacity 0.8s ease;
            animation: fadeSlideIn 0.8s ease-out forwards;
          }
          @keyframes fadeSlideIn {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .label {
            margin-bottom: 5px;
            font-size: 14px;
            color: #b3b3b3;
            text-align: left;
            width: 100%;
            animation: fadeIn 0.6s ease-in forwards;
          }
          .input-field {
            width: 100%;
            padding: 8px;
            font-size: 16px;
            border-radius: 5px;
            background-color: #2a2a2a;
            color: #f0f0f0;
            border: 1px solid #333;
            outline: none;
            box-sizing: border-box;
            margin-bottom: 10px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            animation: fadeInUp 0.8s ease forwards;
          }
          .input-field:focus {
            border-color: #2196f3;
            box-shadow: 0px 0px 10px rgba(33, 150, 243, 0.5);
            animation: pulse 0.5s ease;
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
            transition: background-color 0.3s ease, transform 0.3s ease;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
            animation: fadeInUp 0.9s ease forwards;
          }
          .submit-button:hover {
            background-color: #1976d2;
            transform: scale(1.05);
            animation: bounce 0.3s ease;
          }
          .social-buttons {
            display: flex;
            justify-content: space-between;
            margin: 15px 0;
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
            color: #1a1a1a;
            background-color: #888;
            transition: background-color 0.3s ease, transform 0.3s ease;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
            animation: slideUp 1s ease forwards;
          }
          .social-button:hover {
            background-color: #777;
            transform: scale(1.1);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
          .already-account {
            margin-top: 10px;
            font-size: 14px;
            color: #b3b3b3;
            animation: fadeIn 1.2s ease forwards;
          }
          .login-link {
            color: #2196f3;
            text-decoration: none;
            font-weight: bold;
            margin-left: 5px;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes slideUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>

      <form className="form-container" onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: "5px", fontSize: "24px", fontWeight: "bold" }}>
          Welcome to CertiResume Generator
        </h1>
      

        {/* Form Fields with Labels */}
        <label className="label">Name</label>
        <input
          type="text"
          className="input-field"
          placeholder="Enter your name"
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <label className="label">Username</label>
        <input
          type="text"
          className="input-field"
          placeholder="Enter your username"
          onChange={(e) => handleChange("username", e.target.value)}
        />
        <label className="label">Email</label>
        <input
          type="email"
          className="input-field"
          placeholder="Enter your email"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <label className="label">Password</label>
        <input
          type="password"
          className="input-field"
          placeholder="Enter your password"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <label className="label">Confirm Password</label>
        <input
          type="password"
          className="input-field"
          placeholder="Confirm your password"
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        />

        {/* Social Login Buttons */}
        <div className="social-buttons">
          <button type="button" className="social-button facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button type="button" className="social-button google">
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button type="button" className="social-button linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        {/* Already Have an Account */}
        <div className="already-account">
          Already have an account?
          <Link to="/login" className="login-link">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
