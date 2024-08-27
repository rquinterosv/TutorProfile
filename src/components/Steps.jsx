import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Steps = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Our Process</h2>
        
        {/* Subtítulo */}
        <p className="text-lg text-gray-700 mb-8">
          Follow these simple steps to achieve your goals.
        </p>
        
        {/* Div con 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna 1 */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faCode} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Coding</h3>
            <p className="text-sm text-gray-600">
              Learn the fundamentals of coding to create your first project.
            </p>
          </div>
          
          {/* Columna 2 */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faPaintBrush} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Design</h3>
            <p className="text-sm text-gray-600">
              Design a user-friendly interface for your application.
            </p>
          </div>
          
          {/* Columna 3 */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faMobileAlt} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Deploy</h3>
            <p className="text-sm text-gray-600">
              Deploy your application and make it accessible on all devices.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Steps;
