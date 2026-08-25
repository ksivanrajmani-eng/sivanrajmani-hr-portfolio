import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import 'animate.css';
import WhatsappNotification from './WhatsappNotification';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs
      .sendForm(
        'service_tqu04rg', 
        'template_a0dp3xu', 
        e.target,
        '8UFkib4mE_gVg0H9X'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setStatus('Oops! Something went wrong.');
        }
      );

    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-gray-800 min-h-screen py-12 text-center text-white">
      <h1 className="text-4xl font-bold mb-8 animate__animated animate__fadeIn">
        Contact Me
      </h1>

      <div className="max-w-4xl mx-auto space-y-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate__animated animate__fadeInUp animate__delay-1s">
          {/* Phone */}
          <div className="bg-gray-900 p-6 rounded-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaPhoneAlt className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Phone</h3>
            </div>
            <p className="text-lg text-gray-400">+91 9385833982</p>
          </div>

          {/* Email */}
          <div className="bg-gray-900 p-6 rounded-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaEnvelope className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Email</h3>
            </div>
            <p className="text-lg text-gray-400">ksivanrajmani@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-gray-900 p-6 rounded-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Address</h3>
            </div>
            <p className="text-lg text-gray-400">Chennai</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8 animate__animated animate__fadeInUp animate__delay-2s">
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always available for new opportunities and projects. You can reach out to me via the above contact details. I would love to connect with you!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 bg-gray-900 p-8 rounded-lg animate__animated animate__fadeInUp animate__delay-2s">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-lg text-gray-900"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg text-gray-900"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-gray-300 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-lg text-gray-900"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              Send Message
            </button>
          </form>

          {status && (
            <div className={`mt-4 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </div>
          )}
        </div>
      </div>

      {/* WhatsApp Notification */}
      <WhatsappNotification />
    </section>
  );
};

export default Contact;
