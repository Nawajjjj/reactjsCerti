// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Features from './Pages/Features.jsx';
import Howitworks from './Pages/Howitworks.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx'; // Ensure correct casing
import About from './Pages/About.jsx';
import UploadCertificate from './UploadCertificate'; 
import ReviewResume from './ReviewResume'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles.css'; 

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
                <Route path="/signup" element={<SignUp />} /> {/* Correct case */}
                <Route path="/about" element={<About />} />
                <Route path="/upload" element={<UploadCertificate />} />
                <Route path="/review" element={<ReviewResume />} />
            </Routes>
        </Router>
    );
};

export default App;
