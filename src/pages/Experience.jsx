import React from 'react';
import { useTranslation } from 'react-i18next'; // Asegúrate de importar useTranslation
import Zigzag from '../components/Zigzag';

const Experience = () => {
  const { t } = useTranslation();  // Usamos useTranslation para obtener la función t

  return (
    <>
      <div className="overflow-x-hidden py-20">
        <div>
          <h1 className="text-5xl pt-10 text-center font-semibold text-blue-500 mb-12">
            {t('home.experience_title')}
          </h1>
          <p className=" mx-auto mt-3 text-center text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            {t('home.experience_perex')}
          </p>
        </div>
      </div>
      <Zigzag />
    </>
  );
};

export default Experience;


