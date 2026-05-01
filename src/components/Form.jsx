import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../config/firebase.config';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await addDoc(collection(db, 'contactForm'), {
        ...formData,
        timestamp: new Date(),
      });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending form: ', error);
      setError(t('contact.form_error') || 'Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
              {t('contact.eyebrow') || 'Get in Touch'}
            </span>
            <h1 className="section-title">{t('contact.get_in_touch')}</h1>
            <p className="section-subtitle">{t('contact.fill_form')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
             {/* Contact Info */}
             <div className="p-8 rounded-2xl bg-white shadow-lg">
               <h3 className="text-xl font-bold text-neutral-800 mb-6">{t('contact.info_title') || 'Contact Information'}</h3>

               {[
                 { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: 'location', value: t('contact.address_val') || 'Prague, Czech Republic (Willing to relocate)' },
                 { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, label: 'Phone', value: t('contact.phone_val') || '+420 777 990 829' },
                 { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, label: 'Email', value: t('contact.email_val') || 'rafael.quinterosv@gmail.com' },
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4 mb-6 last:mb-0">
                   <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-600 shrink-0">
                     {item.icon}
                   </div>
                   <div>
                     <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                     <p className="text-neutral-800 font-medium">{item.value}</p>
                   </div>
                 </div>
               ))}

               {/* Social Media Links */}
               <div className="pt-6 border-t border-neutral-100">
                 {[
                   { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label: 'LinkedIn', value: 'linkedin.com/in/rafael-quinteros' },
                   { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, label: 'GitHub', value: 'github.com/rquinterosv' },
                   { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, label: 'Instagram', value: 'instagram.com/rafaquinterosv' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4 mb-6 last:mb-0">
                     <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-600 shrink-0">
                       {item.icon}
                     </div>
                     <div>
                       <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                       <a href={item.label === 'LinkedIn' ? 'https://www.linkedin.com/in/rafael-quinteros/' : item.label === 'GitHub' ? 'https://github.com/rquinterosv' : 'https://www.instagram.com/rafaquinterosv/'} target="_blank" rel="noopener noreferrer" className="text-neutral-800 font-medium hover:text-primary-600 transition-colors">{item.value}</a>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

            {/* Form */}
            <div className="p-8 rounded-2xl bg-white shadow-lg">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">{t('contact.form_success')}</h3>
                  <p className="text-neutral-500">{t('contact.form_success_detail') || 'I\'ll get back to you soon!'}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">{t('contact.full_name')}</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.full_name')}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">{t('contact.email_label')}</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.email_label')}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">{t('contact.message')}</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.message_placeholder')}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 mb-4">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {t('contact.sending')}
                      </span>
                    ) : t('contact.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
