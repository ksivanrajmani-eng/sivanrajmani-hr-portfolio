import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-1/2 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform -translate-y-1/2">
          <a
            href="https://wa.me/9385833982"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaWhatsapp size={30} />
          </a>
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 text-white text-xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsappNotification;
