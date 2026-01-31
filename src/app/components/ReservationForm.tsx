import { useState } from 'react';
import { Check, X } from 'lucide-react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? 'https://emfbrenmnqainsqkvzoq.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZmJyZW5tbnFhaW5zcWt2em9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MTE1MTgsImV4cCI6MjA4NTE4NzUxOH0.q2s6DqKc88xqCpWAnSv4wxm6Qw8hFJetB0KvCdAVuCU';

const PACKAGE_OPTIONS = [
  { value: 'player_necker', label: 'Pro-Am: Player — Necker Island ($109,750 / couple)' },
  { value: 'player_moskito', label: 'Pro-Am: Player — Branson Estate, Moskito ($99,250 / couple)' },
  { value: 'spectator_necker', label: 'Pro-Am: Spectator — Necker Island ($78,750 / couple)' },
  { value: 'spectator_moskito', label: 'Pro-Am: Spectator — Branson Estate, Moskito ($67,250 / couple)' },
];

async function insertIntoNeckerCupInquiries(data: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  package_interest?: string;
  message?: string;
  source?: string;
  status?: string;
}) {
  if (!SUPABASE_KEY || SUPABASE_KEY === 'YOUR_ANON_KEY_HERE') {
    throw new Error('Supabase API key not configured. Set VITE_SUPABASE_ANON_KEY in .env');
  }
  if (!data.first_name || !data.last_name || !data.email || !data.phone) {
    throw new Error('Missing required fields: first_name, last_name, email, phone');
  }

  const url = `${SUPABASE_URL}/rest/v1/necker_cup_inquiries`;
  console.log('[ReservationForm] POST', url, 'payload keys:', Object.keys(data));

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(data),
  });

  const text = await response.text();
  if (!response.ok) {
    console.error('[ReservationForm] Supabase error', response.status, response.statusText, text);
    throw new Error(`Supabase ${response.status}: ${text.slice(0, 200)}`);
  }

  let json: unknown;
  try {
    json = text ? JSON.parse(text) : [];
  } catch {
    json = [];
  }
  return { data: json, error: null };
}

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  package: '',
  numberOfGuests: '1',
  arrivalDate: '',
  specialRequests: '',
  dietaryRestrictions: '',
  emergencyContact: '',
  emergencyPhone: '',
};

type FormData = typeof initialFormData;

export function ReservationForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const submissionData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        package_interest: formData.package || undefined,
        message: `Number of Guests: ${formData.numberOfGuests}\nArrival Date: ${formData.arrivalDate || 'Not specified'}\nDietary Restrictions: ${formData.dietaryRestrictions || 'None'}\nSpecial Requests: ${formData.specialRequests || 'None'}\nEmergency Contact: ${formData.emergencyContact || 'Not provided'}\nEmergency Phone: ${formData.emergencyPhone || 'Not provided'}`,
        source: 'website_reservation_form',
        status: 'new',
      };

      const { data, error } = await insertIntoNeckerCupInquiries(submissionData);

      if (error) {
        alert(`Error submitting reservation: ${error}`);
        setIsSubmitting(false);
        return;
      }

      setSubmitSuccess(true);
      const submissionId = data?.[0]?.id ?? 'N/A';
      alert(`Reservation submitted successfully.\nSubmission ID: ${submissionId}\nOur team will contact you within 24 hours.`);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData(initialFormData);
        onClose();
      }, 5000);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('Reservation submit error:', err);
      alert(`Error submitting reservation:\n\n${message}\n\nCheck DevTools (F12) → Console and Network for details. We're posting to: ${SUPABASE_URL}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-stone-200 px-8 py-6 flex items-center justify-between">
          <h2 className="font-display text-3xl text-stone-900">Reserve Your Spot</h2>
          <button type="button" onClick={onClose} className="w-10 h-10 rounded-full hover:bg-stone-100 flex items-center justify-center transition-colors">
            <X className="w-6 h-6 text-stone-600" />
          </button>
        </div>

        {submitSuccess ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Check className="w-12 h-12 text-emerald-800" />
            </div>
            <h3 className="font-display text-3xl text-emerald-800 mb-4">Reservation Submitted Successfully!</h3>
            <p className="font-body text-lg text-stone-700 mb-4">Your reservation has been saved. Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <h3 className="font-display text-xl text-stone-900 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body" />
                </div>
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-stone-900 mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body" />
                </div>
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-stone-900 mb-4">Package Selection</h3>
              <div className="space-y-3">
                {PACKAGE_OPTIONS.map((pkg) => (
                  <label key={pkg.value} className="flex items-start gap-3 p-4 border-2 border-stone-200 rounded-xl hover:border-emerald-800 cursor-pointer transition-colors">
                    <input type="radio" name="package" value={pkg.value} checked={formData.package === pkg.value} onChange={handleChange} className="mt-1 w-5 h-5 text-emerald-800 focus:ring-emerald-800" />
                    <span className="font-body text-stone-900">{pkg.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-stone-900 mb-4">Booking Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">Number of Guests *</label>
                  <select name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">Preferred Arrival Date</label>
                  <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} min="2026-11-30" max="2026-12-05" className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-stone-900 mb-4">Additional Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">Dietary Restrictions or Preferences</label>
                  <textarea name="dietaryRestrictions" value={formData.dietaryRestrictions} onChange={handleChange} rows={3} placeholder="Any dietary restrictions or preferences..." className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body resize-none" />
                </div>
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">Special Requests</label>
                  <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={3} placeholder="Any special requests..." className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body resize-none" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-stone-900 mb-4">Emergency Contact</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">Contact Name</label>
                  <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body" />
                </div>
                <div>
                  <label className="font-body text-sm text-stone-700 mb-2 block">Contact Phone</label>
                  <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none font-body" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 flex gap-4">
              <button type="button" onClick={onClose} className="flex-1 px-6 py-4 rounded-xl border-2 border-stone-300 text-stone-700 font-body font-medium hover:bg-stone-50 transition-all">
                Cancel
              </button>
              <button type="submit" disabled={isSubmitting} className="flex-1 px-6 py-4 rounded-xl bg-emerald-800 text-white font-body font-medium hover:bg-emerald-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Submitting...' : 'Submit Reservation'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
