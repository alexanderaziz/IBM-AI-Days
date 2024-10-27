import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../index.css';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SlidingMenu from '../components/SlidingMenu';

const TypingIndicator = () => (
  <div className="flex space-x-2">
    <div
      className="w-2.5 h-2.5 bg-[#EEEEEE] rounded-full animate-bounce"
      style={{ animationDelay: '0s' }}
    ></div>
    <div
      className="w-2.5 h-2.5 bg-[#EEEEEE] rounded-full animate-bounce"
      style={{ animationDelay: '0.2s' }}
    ></div>
    <div
      className="w-2.5 h-2.5 bg-[#EEEEEE] rounded-full animate-bounce"
      style={{ animationDelay: '0.4s' }}
    ></div>
  </div>
);

const GamePage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // State for loading animation
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    fetchChatHistory();
  }, []);

  const fetchChatHistory = () => {
    axios
      .get('http://localhost:5000/api/history')
      .then((response) => {
        const reconstructedMessages = response.data.history.slice(1).map((entry) => ({
          text: Array.isArray(entry.content)
            ? entry.content.map((item) => item.text).join(' ')
            : entry.content,
          sender: entry.role === 'user' ? 'User' : 'LLM',
        }));
        setMessages(reconstructedMessages);
      })
      .catch((error) => console.error('Error fetching history:', error));
  };

  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { text: input, sender: 'User' }];
    setMessages(newMessages);
    setInput('');
    setLoading(true); // Start loading animation

    try {
      const response = await axios.post('http://localhost:5000/api/prompt', {
        text: newMessages[newMessages.length - 1].text,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.message, sender: 'LLM' },
      ]);
    } catch (error) {
      console.error('Error fetching message:', error);
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  const resetGame = async () => {
    try {
      await axios.delete('http://localhost:5000/api/history');
      setMessages([]);
      fetchChatHistory();
    } catch (error) {
      console.error('Error resetting game:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#222831] text-[#EEEEEE]">
      <Logo />
      <SlidingMenu />

      <div className="flex-grow overflow-y-auto p-4 pt-20 ml-36 mr-36">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`mb-4 p-3 max-w-[90%] ${
              msg.sender === 'User'
                ? 'bg-[#76ABAE] self-end ml-auto'
                : 'bg-[#31363F] self-start mr-auto'
            } rounded-lg shadow-md`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {msg.text}
          </motion.div>
        ))}

        {loading && (
          <div className="self-start mr-auto mb-4 p-3 bg-[#31363F] rounded-lg shadow-md">
            <TypingIndicator />
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div className="flex items-center p-4 bg-[#31363F]">
        <motion.button
          onClick={resetGame}
          className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg font-semibold mr-3"
          whileHover={{ scale: 1.1 }}
        >
          Reset Game
        </motion.button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="flex-grow bg-[#3D434A] text-white rounded-lg p-3 mr-3 outline-none"
        />

        <motion.button
          onClick={sendMessage}
          className="bg-[#76ABAE] hover:bg-[#76ABAE]/80 px-6 py-3 rounded-lg font-semibold"
          whileHover={{ scale: 1.1 }}
        >
          Send
        </motion.button>
      </div>
    </div>
  );
};

export default GamePage;
