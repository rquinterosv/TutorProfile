import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faCalendar, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Steps = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">{t('services.steps.title')}</h2>        
        <p className="text-lg text-gray-700 mb-8">
          {t('services.steps.description')}
        </p>        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">          
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHandshake} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('services.steps.meet.title')}</h3>
            <p className="text-sm text-gray-600">
              {t('services.steps.meet.description')}
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faCalendar} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('services.steps.schedule.title')}</h3>
            <p className="text-sm text-gray-600">
              {t('services.steps.schedule.description')}
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faRocket} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('services.steps.learn.title')}</h3>
            <p className="text-sm text-gray-600">
              {t('services.steps.learn.description')}
            </p>
          </div>
        </div>

        {/* Botón Let's Begin */}
        <div className="mt-8">
          <Link to="/contact" className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md">
            {t('contact.get_in_touch')} {/* Puedes cambiar este texto si es necesario */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Steps;