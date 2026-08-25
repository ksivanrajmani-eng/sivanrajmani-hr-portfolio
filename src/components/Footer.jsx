import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Copyright */}
        <div className="text-center md:text-left text-lg">
          <p>&copy; 2026 K. Sivanrajmani | All Rights Reserved</p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-6 mt-4 md:mt-0">

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sivanrajmani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9385833982"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={30} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;