import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#31363F] text-[#EEEEEE] py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} RPG.AI | All Rights Reserved.</p>
        <p className="mt-2 text-[#EEEEEE]"></p>
        <div className="mt-2">
          <Link to="/about" className="text-[#76ABAE] hover:underline mx-2">About Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;