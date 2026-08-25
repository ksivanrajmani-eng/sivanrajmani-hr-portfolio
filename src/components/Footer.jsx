import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left text-lg">
          <p>&copy; 2024 K.Sivanrajmani | All Rights Reserved</p>
        </div>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://linkedin.com" className="hover:text-yellow-500 transition duration-300">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/sivanrajmani" className="hover:text-yellow-500 transition duration-300">
            <FaGithub size={30} />
          </a>
          <a href="https://wa.me/9385833982" className="hover:text-yellow-500 transition duration-300">
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
