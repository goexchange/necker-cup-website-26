import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? 'https://emfbrenmnqainsqkvzoq.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZmJyZW5tbnFhaW5zcWt2em9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MTE1MTgsImV4cCI6MjA4NTE4NzUxOH0.q2s6DqKc88xqCpWAnSv4wxm6Qw8hFJetB0KvCdAVuCU';

type Status = 'loading' | 'success' | 'already' | 'error';

export function EmailResponsePage() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<Status>('loading');

  const contactId = searchParams.get('contact_id') ?? '';
  const response = searchParams.get('response') ?? '';
  const campaign = searchParams.get('campaign') ?? 'early-access-2026';
  const email = searchParams.get('email') ?? '';

  const isInterested = response === 'interested';

  useEffect(() => {
    if (!contactId || !['interested', 'not_interested'].includes(response)) {
      setStatus('error');
      return;
    }

    async function record() {
      try {
        // Check if already responded
        const checkUrl = `${SUPABASE_URL}/rest/v1/email_responses?contact_id=eq.${encodeURIComponent(contactId)}&campaign=eq.${encodeURIComponent(campaign)}&select=id`;
        const checkRes = await fetch(checkUrl, {
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
          },
        });
        const existing = await checkRes.json();
        if (Array.isArray(existing) && existing.length > 0) {
          setStatus('already');
          return;
        }

        // Insert response
        const insertUrl = `${SUPABASE_URL}/rest/v1/email_responses`;
        const res = await fetch(insertUrl, {
          method: 'POST',
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            Prefer: 'return=representation',
          },
          body: JSON.stringify({
            contact_id: contactId,
            email: email || null,
            response,
            campaign,
          }),
        });

        if (!res.ok) {
          console.error('Supabase error:', res.status, await res.text());
          setStatus('error');
          return;
        }

        setStatus('success');
      } catch (err) {
        console.error('Error recording response:', err);
        setStatus('error');
      }
    }

    record();
  }, [contactId, response, campaign, email]);

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        {status === 'loading' && (
          <>
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-700 rounded-full animate-spin mx-auto mb-6" />
            <p className="text-stone-600 font-body text-lg">Recording your response...</p>
          </>
        )}

        {status === 'success' && isInterested && (
          <>
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">&#10003;</span>
            </div>
            <h1 className="font-display text-3xl text-stone-900 mb-4">Wonderful!</h1>
            <p className="font-body text-lg text-stone-600 mb-6">
              We're thrilled you're interested in Necker Cup 2026. A member of our team will be in touch shortly to discuss next steps.
            </p>
            <a href="/" className="inline-block px-8 py-3 bg-emerald-800 text-white rounded-xl font-body font-medium hover:bg-emerald-900 transition-colors">
              Visit Our Website
            </a>
          </>
        )}

        {status === 'success' && !isInterested && (
          <>
            <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">&#128075;</span>
            </div>
            <h1 className="font-display text-3xl text-stone-900 mb-4">Thank You</h1>
            <p className="font-body text-lg text-stone-600 mb-6">
              We appreciate you letting us know. If your plans change, we'd love to hear from you anytime.
            </p>
            <a href="/" className="inline-block px-8 py-3 bg-stone-700 text-white rounded-xl font-body font-medium hover:bg-stone-800 transition-colors">
              Visit Our Website
            </a>
          </>
        )}

        {status === 'already' && (
          <>
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">&#128077;</span>
            </div>
            <h1 className="font-display text-3xl text-stone-900 mb-4">Already Recorded</h1>
            <p className="font-body text-lg text-stone-600 mb-6">
              We've already received your response for this campaign. Thank you!
            </p>
            <a href="/" className="inline-block px-8 py-3 bg-emerald-800 text-white rounded-xl font-body font-medium hover:bg-emerald-900 transition-colors">
              Visit Our Website
            </a>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">&#9888;</span>
            </div>
            <h1 className="font-display text-3xl text-stone-900 mb-4">Something Went Wrong</h1>
            <p className="font-body text-lg text-stone-600 mb-6">
              We couldn't record your response. Please try again or contact us directly at{' '}
              <a href="mailto:partnerships@neckercup.com" className="text-emerald-700 underline">partnerships@neckercup.com</a>.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
