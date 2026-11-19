import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { loadFirestore } from '../../config/firebase.config';

// Booking requests are stored in Firestore (collection "contactForm", topic "music").
// The fields and limits below must match the contactForm rule in firestore.rules.
const LIMITS = { name: 100, email: 200, venue: 200, message: 5000 };
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const EMPTY = { name: '', email: '', venue: '', date: '', message: '', website: '' };

// Local date as YYYY-MM-DD (min value for the date picker).
const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const validate = (data) => {
  const errors = {};
  for (const key of ['name', 'email', 'venue', 'message']) {
    if (!data[key].trim()) errors[key] = 'required';
  }
  if (!errors.email && !EMAIL_RE.test(data.email.trim())) errors.email = 'email';
  if (data.date && data.date < today()) errors.date = 'date';
  return errors;
};

const inputClass = (hasError) =>
  `w-full px-4 py-3 rounded-xl bg-stage-950/70 border text-cream placeholder:text-cream/35 [color-scheme:dark] focus:outline-none focus:ring-2 transition-colors ${
    hasError ? 'border-red-400/70 focus:ring-red-400/30' : 'border-cream/15 focus:border-ember-400 focus:ring-ember-400/30'
  }`;

const Field = ({ id, label, optionalLabel, hint, error, children }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-cream/85 mb-2">
      {label}
      {optionalLabel && <span className="ml-1 font-normal text-cream/45">({optionalLabel})</span>}
    </label>
    {children}
    {hint && !error && (
      <p id={`${id}-hint`} className="mt-1.5 text-xs text-cream/45">
        {hint}
      </p>
    )}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
        {error}
      </p>
    )}
  </div>
);

const BookingForm = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const errorText = (key) => (errors[key] ? t(`music.booking.form.errors.${errors[key]}`) : null);
  const describedBy = (key, hasHint = false) =>
    errors[key] ? `booking-${key}-error` : hasHint ? `booking-${key}-hint` : undefined;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(data);
    if (Object.keys(found).length) {
      setErrors(found);
      document.getElementById(`booking-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    // Honeypot: real visitors never see or fill the "website" field.
    if (data.website) {
      setStatus('success');
      return;
    }

    setStatus('sending');
    try {
      const { db, collection, addDoc, serverTimestamp } = await loadFirestore();
      const doc = {
        name: data.name.trim(),
        email: data.email.trim(),
        topic: 'music',
        venue: data.venue.trim(),
        message: data.message.trim(),
        timestamp: serverTimestamp(),
      };
      if (data.date) doc.eventDate = data.date;
      await addDoc(collection(db, 'contactForm'), doc);

      // Email notification (api/booking.js). The request is already saved above,
      // so a failed email doesn't fail the submission.
      fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...doc, timestamp: undefined, date: data.date, lang: i18n.resolvedLanguage }),
        keepalive: true,
      }).catch((err) => console.warn('Booking email notification failed:', err));

      setData(EMPTY);
      setStatus('success');
    } catch (err) {
      console.error('Booking request failed:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 md:p-10 rounded-3xl bg-stage-800/70 ring-1 ring-ember-400/25 text-center" role="status">
        <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-ember-500/15 ring-1 ring-ember-400/40 flex items-center justify-center">
          <svg className="w-8 h-8 text-ember-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-display text-2xl md:text-3xl text-cream mb-2">{t('music.booking.form.success_title')}</p>
        <p className="text-cream/65 mb-8">{t('music.booking.form.success_text')}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="px-6 py-3 rounded-full ring-1 ring-cream/25 text-cream font-semibold hover:bg-cream/5 hover:ring-cream/40 transition-all duration-300"
        >
          {t('music.booking.form.send_another')}
        </button>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-stage-800/70 ring-1 ring-cream/10 text-left"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="booking-name" label={t('music.booking.form.name')} error={errorText('name')}>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            required
            aria-invalid={!!errors.name}
            aria-describedby={describedBy('name')}
            value={data.name}
            onChange={handleChange}
            placeholder={t('music.booking.form.name_placeholder')}
            className={inputClass(errors.name)}
          />
        </Field>

        <Field id="booking-email" label={t('music.booking.form.email')} error={errorText('email')}>
          <input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={LIMITS.email}
            required
            aria-invalid={!!errors.email}
            aria-describedby={describedBy('email')}
            value={data.email}
            onChange={handleChange}
            placeholder={t('music.booking.form.email_placeholder')}
            className={inputClass(errors.email)}
          />
        </Field>

        <Field id="booking-venue" label={t('music.booking.form.venue')} error={errorText('venue')}>
          <input
            id="booking-venue"
            name="venue"
            type="text"
            maxLength={LIMITS.venue}
            required
            aria-invalid={!!errors.venue}
            aria-describedby={describedBy('venue')}
            value={data.venue}
            onChange={handleChange}
            placeholder={t('music.booking.form.venue_placeholder')}
            className={inputClass(errors.venue)}
          />
        </Field>

        <Field
          id="booking-date"
          label={t('music.booking.form.date')}
          optionalLabel={t('music.booking.form.optional')}
          hint={t('music.booking.form.date_hint')}
          error={errorText('date')}
        >
          <input
            id="booking-date"
            name="date"
            type="date"
            min={today()}
            aria-invalid={!!errors.date}
            aria-describedby={describedBy('date', true)}
            value={data.date}
            onChange={handleChange}
            className={inputClass(errors.date)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id="booking-message" label={t('music.booking.form.message')} error={errorText('message')}>
            <textarea
              id="booking-message"
              name="message"
              rows={5}
              maxLength={LIMITS.message}
              required
              aria-invalid={!!errors.message}
              aria-describedby={describedBy('message')}
              value={data.message}
              onChange={handleChange}
              placeholder={t('music.booking.form.message_placeholder')}
              className={`${inputClass(errors.message)} resize-y min-h-[8rem]`}
            />
          </Field>
        </div>

        {/* Honeypot (hidden from people and screen readers) */}
        <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor="booking-website">{t('music.booking.form.honeypot')}</label>
          <input id="booking-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={data.website} onChange={handleChange} />
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-6 p-4 rounded-xl bg-red-500/10 ring-1 ring-red-400/30 text-sm text-red-200" role="alert">
          {t('music.booking.form.error')}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-ember-500 text-stage-950 font-semibold shadow-lg shadow-ember-500/25 hover:bg-ember-400 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {sending && (
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {sending ? t('music.booking.form.sending') : t('music.booking.form.submit')}
      </button>
    </form>
  );
};

export default BookingForm;
