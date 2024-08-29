import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../config/firebase.config'; // Asegúrate de importar el Firestore desde tu archivo de configuración
import { collection, addDoc } from 'firebase/firestore';
import perfilImage from '../assets/img/perfil.jpeg';

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
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <img 
              src={perfilImage} 
              alt="Profile" 
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contactForm'), formData);
      alert('Formulario enviado exitosamente!');
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    } catch (error) {
      console.error('Error al enviar formulario: ', error);
      alert('Hubo un error al enviar el formulario.');
    }
  };

  return (
    <div>
      <Hero />
      <div className="pb-12 pt-20 bg-white lg:pb-[90px] lg:pt-[120px] overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 p-4">
              <div className="p-6 bg-white">
                <h1 className="text-4xl sm:text-5xl text-blue-700 font-extrabold tracking-tight">
                  {t('contact.get_in_touch')}
                </h1>
                <p className="text-lg sm:text-2xl font-medium text-blue-500 mt-2">
                  {t('contact.fill_form')}
                </p>

                <div className="flex items-center mt-8 text-blue-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    {t('contact.address')}
                  </div>
                </div>

                <div className="flex items-center mt-4 text-blue-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    {t('contact.phone')}
                  </div>
                </div>

                <div className="flex items-center mt-2 text-blue-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    {t('contact.email')}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
                <div className="flex flex-col mb-4">
                  <label htmlFor="name" className="text-blue-700 font-semibold">{t('contact.full_name')}</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.full_name')}
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-blue-700 font-semibold focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="text-blue-700 font-semibold">{t('contact.email_label')}</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.email_label')}
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-blue-700 font-semibold focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="message" className="text-blue-700 font-semibold">{t('contact.message')}</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.message_placeholder')}
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-blue-700 font-semibold focus:border-blue-500 focus:outline-none"
                    maxLength="100"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                >
                  {t('contact.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
