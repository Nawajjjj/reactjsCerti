// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Importing components
import Navbar from './components/Navbar';

// Importing pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import UploadCertificate from './components/UploadCertificate';
import ReviewPage from './components/ReviewPage';  // Adjust path if needed


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/upload" element={<UploadCertificate />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
