import type { VercelRequest, VercelResponse } from '@vercel/node';

const SUPABASE_URL = 'https://abhxvgpnwbnfjjdmzqdn.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaHh2Z3Bud2JuZmpqZG16cWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMjQ2NzcsImV4cCI6MjA2MzYwMDY3N30.qDaQbwmpFJKQwn30gVLZChUd6j_TVLn790XGMTrJG_A';
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@neckercup.com';

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
        response: 'interested',
        ip_address: (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.socket?.remoteAddress || '',
        user_agent: req.headers['user-agent'] || '',
      }),
    });
  } catch (err) {
    console.error('Failed to log sponsor response:', err);
  }

  // Notify Rem via SendGrid
  if (SENDGRID_API_KEY) {
    try {
      await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: 'rem@goexchange.ai' }] }],
          from: { email: SENDGRID_FROM_EMAIL, name: 'Necker Cup Sponsors' },
          subject: `Sponsor INTERESTED: ${contactName || contactEmail} (${companyName || 'Unknown Company'})`,
          content: [{
            type: 'text/html',
            value: `
              <div style="font-family: Georgia, serif; padding: 32px;">
                <h2 style="color: #065f46;">A sponsor clicked "I'm Interested"</h2>
                <table style="border-collapse: collapse; margin-top: 16px;">
                  <tr><td style="padding: 8px 16px 8px 0; color: #78716c;">Name</td><td style="padding: 8px 0; font-weight: bold;">${contactName || 'N/A'}</td></tr>
                  <tr><td style="padding: 8px 16px 8px 0; color: #78716c;">Email</td><td style="padding: 8px 0;"><a href="mailto:${contactEmail}">${contactEmail}</a></td></tr>
                  <tr><td style="padding: 8px 16px 8px 0; color: #78716c;">Company</td><td style="padding: 8px 0; font-weight: bold;">${companyName || 'N/A'}</td></tr>
                  <tr><td style="padding: 8px 16px 8px 0; color: #78716c;">Campaign</td><td style="padding: 8px 0;">${campaignName || campaignId || 'N/A'}</td></tr>
                </table>
                <p style="margin-top: 24px; color: #57534e;">Follow up ASAP while they're warm.</p>
              </div>
            `,
          }],
        }),
      });
    } catch (err) {
      console.error('Failed to send notification:', err);
    }
  }

  // Redirect to thank-you page
  res.redirect(302, '/sponsor/thank-you?response=interested&name=' + encodeURIComponent(contactName));
}
