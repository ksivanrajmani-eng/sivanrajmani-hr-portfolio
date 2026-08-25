import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">

        {/* Logo / Name */}
        <div className="text-2xl font-bold">
          <Link to="/">
            SIVANRAJMANI KASINADHAN
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-500 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="hover:text-yellow-500 transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-yellow-500 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gray-700 text-white p-4 space-y-4">

          <Link
            to="/"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            to="/projects"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;