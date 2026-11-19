import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { loadFirestore } from '../config/firebase.config';
import { SOCIAL_LINKS } from '../data/social';

// Keep in sync with the "topic" whitelist in firestore.rules.
const TOPICS = ['general', 'development', 'consulting', 'music'];

const ICONS = {
  location: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </>
  ),
  phone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
  email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
};

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all';

const Form = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const requested = searchParams.get('topic');
  const initialTopic = TOPICS.includes(requested) ? requested : 'general';

  const emptyForm = { name: '', email: '', topic: initialTopic, message: '' };
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { db, collection, addDoc, serverTimestamp } = await loadFirestore();
      await addDoc(collection(db, 'contactForm'), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        topic: formData.topic,
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
      });
      setIsSubmitted(true);
      setFormData(emptyForm);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Error sending form: ', err);
      setError(t('contact.form_error'));
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { id: 'location', value: t('contact.address_val') },
    { id: 'phone', value: t('contact.phone_val'), href: `tel:${t('contact.phone_val').replace(/\s/g, '')}` },
    { id: 'email', value: t('contact.email_val'), href: `mailto:${t('contact.email_val')}` },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
              {t('contact.eyebrow')}
            </span>
            <h1 className="section-title">{t('contact.title')}</h1>
            <p className="section-subtitle">{t('contact.fill_form')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact info */}
            <div className="p-8 rounded-2xl bg-white shadow-lg">
              <h2 className="text-xl font-bold text-neutral-800 mb-6">{t('contact.info_title')}</h2>

              {contactItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4 mb-6 last:mb-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {ICONS[item.id]}
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">{t(`contact.labels.${item.id}`)}</p>
                    {item.href ? (
                      <a href={item.href} className="text-neutral-800 font-medium hover:text-primary-600 transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-neutral-800 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-neutral-100">
                {SOCIAL_LINKS.filter((s) => s.id !== 'facebook').map((social) => (
                  <div key={social.id} className="flex items-start gap-4 mb-6 last:mb-0">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-600 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={social.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">{t(`social.${social.id}`)}</p>
                      <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-neutral-800 font-medium hover:text-primary-600 transition-colors">
                        {social.handle}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-2xl bg-white shadow-lg">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8" role="status">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-neutral-800 mb-2">{t('contact.form_success')}</h2>
                  <p className="text-neutral-500">{t('contact.form_success_detail')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">{t('contact.full_name')}</label>
                    <input type="text" name="name" id="name" autoComplete="name" maxLength={100} required value={formData.name} onChange={handleChange} placeholder={t('contact.full_name')} className={inputClass} />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">{t('contact.email_label')}</label>
                    <input type="email" name="email" id="email" autoComplete="email" maxLength={200} required value={formData.email} onChange={handleChange} placeholder={t('contact.email_label')} className={inputClass} />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="topic" className="block text-sm font-semibold text-neutral-700 mb-2">{t('contact.topic_label')}</label>
                    <select name="topic" id="topic" required value={formData.topic} onChange={handleChange} className={inputClass}>
                      {TOPICS.map((topic) => (
                        <option key={topic} value={topic}>
                          {t(`contact.topics.${topic}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">{t('contact.message')}</label>
                    <textarea
                      name="message"
                      id="message"
                      maxLength={5000}
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t(formData.topic === 'music' ? 'contact.message_placeholder_music' : 'contact.message_placeholder')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && <p className="text-sm text-red-500 mb-4" role="alert">{error}</p>}

                  <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70">
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {t('contact.sending')}
                      </span>
                    ) : (
                      t('contact.submit')
                    )}
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
