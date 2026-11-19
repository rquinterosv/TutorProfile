// Vercel Function: POST /api/booking
// Emails a /music booking request to the inbox in BOOKING_TO_EMAIL via Resend (https://resend.com).
// The request is already saved in Firestore by the browser, so this is the notification only.
//
// Environment variables (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY    API key from resend.com → API Keys
//   BOOKING_TO_EMAIL  inbox that receives the requests (without a verified domain in Resend
//                     this must be the email the Resend account was created with)
//   BOOKING_FROM      optional sender, e.g. "Bookings <booking@yourdomain.com>" once a domain
//                     is verified in Resend; defaults to Resend's test sender.

const LIMITS = { name: 100, email: 200, venue: 200, message: 5000 };
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  const { RESEND_API_KEY, BOOKING_TO_EMAIL, BOOKING_FROM } = process.env;
  if (!RESEND_API_KEY || !BOOKING_TO_EMAIL) {
    console.error('[booking] RESEND_API_KEY or BOOKING_TO_EMAIL is not set');
    return res.status(503).json({ ok: false, error: 'not_configured' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = null;
    }
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ ok: false, error: 'invalid' });

  // Honeypot: pretend it worked.
  if (body.website) return res.status(200).json({ ok: true });

  const data = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    venue: clean(body.venue, LIMITS.venue),
    date: clean(body.date, 10),
    message: clean(body.message, LIMITS.message),
    lang: body.lang === 'es' ? 'es' : 'en',
  };
  if (!data.name || !data.venue || !data.message || !EMAIL_RE.test(data.email) || (data.date && !DATE_RE.test(data.date))) {
    return res.status(400).json({ ok: false, error: 'invalid' });
  }

  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Venue / event', data.venue],
    ['Date', data.date || '—'],
    ['Language', data.lang.toUpperCase()],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${data.message}`;
  const html = `
    <h2 style="font-family:sans-serif">New booking request</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`).join('')}
    </table>
    <p style="font-family:sans-serif;white-space:pre-wrap;margin-top:16px">${escapeHtml(data.message)}</p>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: BOOKING_FROM || 'Booking form <onboarding@resend.dev>',
        to: [BOOKING_TO_EMAIL],
        reply_to: data.email,
        subject: `🎸 Booking request: ${data.venue}${data.date ? ` · ${data.date}` : ''} — ${data.name}`,
        text,
        html,
      }),
    });
    if (!response.ok) {
      console.error('[booking] Resend responded', response.status, await response.text());
      return res.status(502).json({ ok: false, error: 'send_failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[booking] Resend request failed', err);
    return res.status(502).json({ ok: false, error: 'send_failed' });
  }
}
