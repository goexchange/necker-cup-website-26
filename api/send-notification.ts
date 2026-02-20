import type { VercelRequest, VercelResponse } from '@vercel/node';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const NOTIFICATION_EMAIL = 'rem@goexchange.ai';
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@neckercup.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const { first_name, last_name, email, phone, package_interest, message } = req.body;

    const packageLabel = package_interest
      ? package_interest.replace(/_/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())
      : 'Not specified';

    const emailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafaf9; border-radius: 12px;">
        <h1 style="color: #1c4532; font-size: 24px; margin-bottom: 24px; border-bottom: 2px solid #1c4532; padding-bottom: 12px;">
          New Necker Cup Reservation
        </h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #78716c; font-size: 14px; width: 140px;">Name</td>
            <td style="padding: 8px 0; color: #1c1917; font-size: 16px; font-weight: bold;">${first_name} ${last_name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Email</td>
            <td style="padding: 8px 0; color: #1c1917; font-size: 16px;"><a href="mailto:${email}" style="color: #1c4532;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Phone</td>
            <td style="padding: 8px 0; color: #1c1917; font-size: 16px;"><a href="tel:${phone}" style="color: #1c4532;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Package</td>
            <td style="padding: 8px 0; color: #1c1917; font-size: 16px;">${packageLabel}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 8px 0; color: #78716c; font-size: 14px; vertical-align: top;">Details</td>
            <td style="padding: 8px 0; color: #1c1917; font-size: 14px; white-space: pre-line;">${message}</td>
          </tr>` : ''}
        </table>
        <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #d6d3d1; color: #a8a29e; font-size: 12px;">
          Submitted from neckercup.com reservation form
        </p>
      </div>
    `;

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: NOTIFICATION_EMAIL }] }],
        from: { email: FROM_EMAIL, name: 'Necker Cup' },
        subject: `New Reservation: ${first_name} ${last_name} — ${packageLabel}`,
        content: [{ type: 'text/html', value: emailHtml }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid API error:', errorText);
      return res.status(response.status).json({ error: 'Failed to send notification', details: errorText });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email notification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
