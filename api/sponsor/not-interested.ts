import type { VercelRequest, VercelResponse } from '@vercel/node';

const SUPABASE_URL = 'https://abhxvgpnwbnfjjdmzqdn.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaHh2Z3Bud2JuZmpqZG16cWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMjQ2NzcsImV4cCI6MjA2MzYwMDY3N30.qDaQbwmpFJKQwn30gVLZChUd6j_TVLn790XGMTrJG_A';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { email, name, company, campaign_id, campaign_name } = req.query;

  const contactEmail = (Array.isArray(email) ? email[0] : email) || 'unknown';
  const contactName = (Array.isArray(name) ? name[0] : name) || '';
  const companyName = (Array.isArray(company) ? company[0] : company) || '';
  const campaignId = (Array.isArray(campaign_id) ? campaign_id[0] : campaign_id) || '';
  const campaignName = (Array.isArray(campaign_name) ? campaign_name[0] : campaign_name) || '';

  // Log to Supabase
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/sponsor_responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        contact_email: contactEmail,
        contact_name: contactName,
        company: companyName,
        campaign_id: campaignId,
        campaign_name: campaignName,
        response: 'not_interested',
        ip_address: (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.socket?.remoteAddress || '',
        user_agent: req.headers['user-agent'] || '',
      }),
    });
  } catch (err) {
    console.error('Failed to log sponsor response:', err);
  }

  // Redirect to acknowledgment page (no email notification for "not interested")
  res.redirect(302, '/sponsor/thank-you?response=declined&name=' + encodeURIComponent(contactName));
}
