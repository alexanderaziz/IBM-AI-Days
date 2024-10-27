import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GamePage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // first message from the server when the page loads
  useEffect(() => {
    axios.get('http://localhost:5000/api/message')
      .then(response => {
        setMessages([{ text: response.data.message, sender: 'LLM' }]);
      })
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  // Handle sending messages
  const sendMessage = async () => {
    if (!input) return;

    // Add user message to the chat
    const newMessages = [...messages, { text: input, sender: 'User' }];
    setMessages(newMessages);
    setInput(''); // Clear the input field

    try {
      // Fetch response from the server
      const response = await axios.get('http://localhost:5000/api/message');
      setMessages(prevMessages => [
        ...prevMessages,
        { text: response.data.message, sender: 'LLM' }
      ]);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-800 text-white">
		<Header />


      {/* Chatbox container */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`mb-4 p-3 max-w-xs ${msg.sender === 'User' ? 'bg-blue-500 self-end' : 'bg-gray-700 self-start'} rounded-lg`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center p-4 bg-gray-900">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="flex-grow bg-gray-700 text-white rounded-lg p-3 mr-3 outline-none"
        />
        <motion.button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          whileHover={{ scale: 1.1 }}
        >
          Send
        </motion.button>
      </div>
    </div>
  );
};

export default GamePage;
