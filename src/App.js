// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './components/Navbar.css'; // CSS for the navbar
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Features from './Pages/Features.jsx';
import Howitworks from './Pages/Howitworks.jsx'; // Ensure correct casing
import Login from './Pages/Login.jsx';
import Signin from './Pages/Signin.jsx'; // Ensure correct casing
import About from './Pages/About.jsx'; // Ensure this import exists
import UploadCertificate from './UploadCertificate'; // Import your new component
import ReviewResume from './ReviewResume'; // Import the ReviewResume component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './styles.css'; // Your global styles

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/features" element={<Features />} />
                <Route path="/howitworks" element={<Howitworks />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/about" element={<About />} /> {/* Ensure this line is correct */}
                <Route path="/upload" element={<UploadCertificate />} /> {/* Add this line */}
                <Route path="/review" element={<ReviewResume />} /> {/* Add this line for the ReviewResume page */}
            </Routes>
        </Router>
    );
};

export default App;
