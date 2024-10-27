import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import GamePage from './pages/GamePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App