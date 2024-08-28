import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


const Hero = () => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <div className={`relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-2 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>   
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-center md:text-left">
          <h2 className="text-6xl font-bold leading-10 tracking-tight text-gray-800 sm:text-7xl sm:leading-none md:text-7xl">
          <span className="font-bold text-blue-500 block sm:inline p-2">Tech</span>
            Tutor
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {t('home.mentor_profile')}
          </p>
          <div className="mt-5 sm:flex md:mt-8 justify-center md:justify-start">
            <div className="rounded-md shadow">
            <Link
                to="/services"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                {t('home.info')}
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                {t('home.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
            <img 
                src="./src/assets/img/perfil.jpeg" 
                alt="" 
                className="rounded-full object-cover w-full h-full"
            />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Hero;
