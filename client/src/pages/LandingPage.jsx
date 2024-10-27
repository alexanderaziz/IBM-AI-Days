import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import SlidingMenu from '../components/SlidingMenu';
import DisclosureSection from '../components/DisclosureSection';

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const typingSpeed = 70; // Time in milliseconds to type each character
  const deletingSpeed = 200; // Time in milliseconds to delete each character
  const pauseTime = 20000; // Pause time after completing a text
  const texts = [
    "that prepares you for hurricanes.",
    "that teaches safety precautions.",
    "where your choices matter.",
    "that conveys critical information.",
    "designed for real-life hurricane scenarios.",
    "that turns preparation into a quest."
  ]; 
  const [isDeleting, setIsDeleting] = useState(false);
  

  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        className="h-[200vh] flex flex-col justify-center items-center bg-[#222831] text-center"
        initial={{ opacity: 0.5, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }} // Loading animation
      >
        <div className="h-screen flex flex-col justify-center items-center">
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
            Rainfall Preparation Game
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
            <span className="text-[#9B7EBD]">The Game </span> {displayText}
          </motion.h3>


          <motion.button 
            onClick={() => navigate('/game')}
            className="bg-[#31363F] text-[#EEEEEE] hover:text-[#76ABAE] transition-colors px-6 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.1, rotate: 2 }} // Hover effect
          >
            Start Game
          </motion.button>
        </div>
      
        
        {/* Fixed-width disclosure section centered in the bottom half */}
        <motion.div
          className="h-screen w-full flex items-center justify-center items-end pb-40"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: scrolling ? 1 : 0.1 }}
          transition={{ duration: 1 }}
        >
          <DisclosureSection />
        </motion.div>

      </motion.div>
      

      <Footer />
    </>
  );
};

export default LandingPage;
