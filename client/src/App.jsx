import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [count, setCount] = useState(0)
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
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

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
