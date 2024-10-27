import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import SlidingMenu from '../components/SlidingMenu'; 

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const typingSpeed = 100; // Time in milliseconds to type each character
  const deletingSpeed = 200; // Time in milliseconds to delete each character
  const pauseTime = 2000; // Pause time after completing a text
  const texts = ["Innovative Solutions", "Data-Driven Insights", "Proactive Strategies"]; // Texts to type
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 50); // Set scrolling true if scrolled down more than 50px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval;

    const type = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        // Delete one character
        setDisplayText((prev) => prev.slice(0, prev.length - 1));
        if (displayText.length === 0) {
          // Switch to the next text after a pause
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          interval = setTimeout(type, pauseTime); // Pause before typing the next text
        } else {
          interval = setTimeout(type, deletingSpeed);
        }
      } else {
        // Type one character
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        if (displayText.length === currentText.length) {
          // Switch to deleting mode after a pause
          setIsDeleting(true);
          interval = setTimeout(type, pauseTime); // Pause after typing
        } else {
          interval = setTimeout(type, typingSpeed);
        }
      }
    };

    interval = setTimeout(type, typingSpeed); // Start the typing process

    // Cleanup function to clear the timer
    return () => clearTimeout(interval);
  }, [displayText, isDeleting, textIndex, texts]);


  return (
    <> 
      <Logo />
      <SlidingMenu />

      <motion.div
        id="homeSection"
        className="h-screen flex flex-col justify-center items-center bg-[#222831] text-center"
        initial={{ opacity: 0.5, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }} // Loading animation
      >
        {/* RPG */}
        <motion.h1
          className="text-6xl font-semibold mb-4 text-[#EEEEEE] cursor-pointer"
          whileHover={{
            filter: 'drop-shadow(0 0 10px #76ABAE)', // Glow effect
            transition: { duration: 0.3 },
            y: -3,
          }}
          style={{
            filter: 'drop-shadow(0 0 6px rgba(0, 0, 0, 0.5))', // drop shadow
          }}
        >
          Rainfall Preparation Generative
        </motion.h1>
        {/* AI */}
        <motion.h2
          className="text-6xl font-extrabold mb-8 text-[#76ABAE] cursor-pointer"
          whileHover={{
            filter: 'drop-shadow(0 0 10px #76ABAE)', // Glow effect
            transition: { duration: 0.3 },
            y: -3,
          }}
          style={{
            filter: 'drop-shadow(0 0 6px rgba(0, 0, 0, 0.5))', // drop shadow
          }}
        >
          Artificial Intelligence
        </motion.h2>

        {/* Typing Animation Text */}
        <motion.h3
          className="text-4xl font-semibold text-[#EEEEEE] mb-6"
          style={{ minWidth: '300px' }} // Set a minimum width
        >
          RPG.AI: {displayText}
        </motion.h3>





        <motion.button 
          onClick={() => navigate('/game')}
          className="bg-[#31363F] text-[#EEEEEE] hover:text-[#76ABAE] transition-colors px-6 py-3 rounded-full font-semibold"
          whileHover={{ scale: 1.1, rotate: 2 }} // Hover effect
        >
          Start Game
        </motion.button>
      </motion.div>
      
      {/* Description Section */}
      <motion.div
        id="descriptionSection"
        className="h-screen bg-[#222831] text-[#EEEEEE] py-10 px-6"
        initial={{ opacity: 0.5, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }} // Loading animation
      >
        <h2 className="text-4xl font-bold text-center mb-4">About the App</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">
          Rainfall Preparation Generative leverages cutting-edge artificial intelligence to provide innovative solutions for managing rainfall patterns and preparation strategies. With our app, users can easily access valuable insights and make informed decisions to ensure readiness for any rainfall scenario.
        </p>
      </motion.div>
      

      <Footer />
    </>
  );
};

export default LandingPage;
