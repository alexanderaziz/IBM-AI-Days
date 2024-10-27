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
  const [message, setMessage] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:5000/api/prompt', {text: prompt})
    .then(response => setMessage(response.data.message))
    .catch(err => console.log(err));
    setPrompt('')
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>

    </Router>
    
  );


      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={prompt}
        onChange={handleInputChange}
        placeholder="Enter prompt here"
      />
      <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </>
  )

}

export default App

