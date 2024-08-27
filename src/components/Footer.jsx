import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Título y párrafo */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p className="text-sm">
            Rafa Tutoring is dedicated to providing quality online education in programming and remote work platforms.
          </p>
        </div>

        {/* Columna 2: Redes sociales */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            contact@rafatutoring.com
          </p>
          <p className="text-sm flex items-center mt-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +1 234 567 890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
