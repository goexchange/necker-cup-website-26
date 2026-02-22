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

    // Send confirmation email to the guest
    const confirmationHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 32px; background: #fafaf9; border-radius: 12px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="color: #1c4532; font-size: 28px; margin: 0 0 8px;">The Necker Cup</h1>
          <p style="color: #78716c; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin: 0;">Necker Island, BVI</p>
        </div>

        <p style="color: #1c1917; font-size: 18px; line-height: 1.6; margin-bottom: 8px;">
          Dear ${first_name},
        </p>

        <p style="color: #44403c; font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          Thank you so much for your interest in the Necker Cup! We are truly excited that you are considering joining us for what promises to be an extraordinary week of world-class tennis, incredible entertainment, and unforgettable experiences on Sir Richard Branson's private Necker Island.
        </p>

        <p style="color: #44403c; font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          We received your inquiry for the <strong style="color: #1c4532;">${packageLabel}</strong> package and would love to personally walk you through everything the Necker Cup has to offer and answer any questions you may have.
        </p>

        <p style="color: #44403c; font-size: 16px; line-height: 1.7; margin-bottom: 24px;">
          The easiest way to get started is to schedule a quick call at your convenience:
        </p>

        <div style="text-align: center; margin: 32px 0;">
          <a href="https://calendly.com/rem-goexchange" style="display: inline-block; background-color: #1c4532; color: #ffffff; font-family: 'DM Sans', system-ui, sans-serif; font-size: 16px; font-weight: 600; text-decoration: none; padding: 16px 40px; border-radius: 50px; letter-spacing: 0.5px;">
            Schedule a Call
          </a>
        </div>

        <p style="color: #44403c; font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          You are also welcome to reach me directly anytime:
        </p>

        <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 8px; padding: 20px; margin-bottom: 28px;">
          <p style="color: #1c1917; font-size: 16px; font-weight: bold; margin: 0 0 8px;">Rem Ghali</p>
          <p style="color: #44403c; font-size: 14px; margin: 0 0 4px;">
            Phone: <a href="tel:6784786649" style="color: #1c4532; text-decoration: none;">678.478.6649</a>
          </p>
          <p style="color: #44403c; font-size: 14px; margin: 0;">
            Email: <a href="mailto:rem@goexchange.ai" style="color: #1c4532; text-decoration: none;">rem@goexchange.ai</a>
          </p>
        </div>

        <p style="color: #44403c; font-size: 16px; line-height: 1.7; margin-bottom: 0;">
          We look forward to welcoming you to the Necker Cup family!
        </p>

        <p style="color: #44403c; font-size: 16px; line-height: 1.7; margin-top: 24px; margin-bottom: 0;">
          Warm regards,<br />
          <strong style="color: #1c1917;">The Necker Cup Team</strong><br />
          <span style="color: #78716c; font-size: 14px;">Produced by Premier Live</span>
        </p>

        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #d6d3d1; text-align: center;">
          <p style="color: #a8a29e; font-size: 12px; margin: 0;">
            neckercup.com &middot; November 29 &ndash; December 4, 2026
          </p>
        </div>
      </div>
    `;

    // Fire confirmation email (don't block on failure)
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email }] }],
        from: { email: FROM_EMAIL, name: 'The Necker Cup' },
        subject: `Thank You for Your Interest in the Necker Cup, ${first_name}!`,
        content: [{ type: 'text/html', value: confirmationHtml }],
      }),
    }).catch((err) => console.error('Confirmation email error:', err));

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email notification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
