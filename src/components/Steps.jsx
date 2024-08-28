import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Steps = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">My Process</h2>        
        <p className="text-lg text-gray-700 mb-8">
          This is how I manage my courses and tutoring
        </p>        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">          
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faCode} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">We Meet!</h3>
            <p className="text-sm text-gray-600">
              Let's start with a conversation about your expectations and what you want to learn in order to prepare for our tutorials.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faPaintBrush} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Schedule</h3>
            <p className="text-sm text-gray-600">
              We will coordinate a session for further tutoring via Google Meet.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faMobileAlt} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">We Learn</h3>
            <p className="text-sm text-gray-600">
              Investiguemos, estudiemos y trabajemos en lo que tienes ganas de aprender.
            </p>
          </div>
        </div>

        {/* Botón Let's Begin */}
        <div className="mt-8">
          <Link to="/contact" className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md">
            Let's Begin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Steps;
