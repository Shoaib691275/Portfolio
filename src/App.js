// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './about/about';

import Contact from './contact/index';
import Homepage from './homepage';
import Projects from './projects';
import EducationalBackground from './education';

function App() {
    return (
        <>
        <Router>
          <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/education" element={<EducationalBackground/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
        </Router>
        
        </>
    );
}

export default App;
