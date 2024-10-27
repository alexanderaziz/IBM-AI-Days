import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SlidingMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="fixed top-0 left-0 p-3"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      {/* Container including icon and menu box */}
      <div className="relative flex items-center">
        <span
          className="material-symbols-outlined text-4xl text-[#EEEEEE] drop-shadow-lg cursor-pointer"
          style={{
            filter: isMenuOpen ? 'drop-shadow(0 0 10px #76ABAE)' : '',
            transition: 'filter 0.3s ease',
          }}
        >
          menu
        </span>

        {/* Menu Box with drop shadow and compact styling */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-0 left-12 bg-[#31363F] p-3 rounded px-2 py-1 drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ padding: '8px 12px', width: 'fit-content' }}
            >
              {['Home', 'About', 'Game'].map((text, index) => (
                <div
                  key={index}
                  className="text-[#EEEEEE] my-2 cursor-pointer hover:bg-[#76ABAE] hover:text-[#EEEEEE] rounded px-2 py-1"
                  onClick={() => navigate(`/${text.toLowerCase()}`)}
                >
                  {text}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlidingMenu;
