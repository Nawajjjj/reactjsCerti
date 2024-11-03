// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Importing components
import Navbar from './components/Navbar';

// Importing pages
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Features from './Pages/Features';
import HowItWorks from './Pages/Howitworks';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import UploadCertificate from './UploadCertificate';
import ReviewPage from './ReviewPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<UploadCertificate />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
