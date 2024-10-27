import { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <> 
      <Header />
      <motion.div
	  	id="homeSection"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} // some random loading animation
      >
        <motion.h1
          className="text-5xl font-extrabold mb-4 cursor-pointer hover:translate-y-1 hover:text-blue-300 transition-all duration-300" // Added hover effect
          whileHover={{ scale: 1.05 }} // hover scale
        >
          Welcome to RPG game!
        </motion.h1>
        <p className="text-lg mb-8">A game where u are in a hurricane and u try not to die.</p>
        <motion.button 
          onClick={() => navigate('/game')}
          className="bg-white text-blue-500 hover:bg-gray-200 transition-colors px-6 py-3 rounded-full font-semibold"
          whileHover={{ scale: 1.1, rotate: 3 }} // hover effect
        >
          Start Game
        </motion.button>

      </motion.div>

      {/* Additional Content Section */}
      <motion.div
        id="aboutSection"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-200 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} // loading animation
      >
        <h2 className="text-3xl font-bold mb-4">About RPG game</h2>
        <p className="text-center max-w-2xl text-lg text-gray-700 mb-4">
          Some stuff about the game here blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah 
        </p>
        <motion.button 
          onClick={() => scrollToSection('homeSection')}
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors px-6 py-3 rounded-full font-semibold"
          whileHover={{ scale: 1.1 }} // Scale on hover
        >
          Play now!
        </motion.button>
      </motion.div>

      <Footer />
    </>
  );
};

export default LandingPage;
