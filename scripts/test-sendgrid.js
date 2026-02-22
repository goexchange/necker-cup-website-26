const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@neckercup.com';
const TO_EMAIL = 'rem@goexchange.ai';

if (!SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not set');
  process.exit(1);
}

console.log(`[v0] SendGrid API key found: ${SENDGRID_API_KEY.substring(0, 7)}...`);
console.log(`[v0] From: ${FROM_EMAIL}`);
console.log(`[v0] To: ${TO_EMAIL}`);

const testData = {
  first_name: 'Test',
  last_name: 'Submission',
  email: 'test@example.com',
  phone: '+1 (555) 123-4567',
  package_interest: 'pro_am_player_necker',
  message: 'This is a test submission to verify the SendGrid email integration is working correctly.',
};

const packageLabel = testData.package_interest
  .replace(/_/g, ' ')
  .replace(/\b\w/g, (c) => c.toUpperCase());

const emailHtml = `
  <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafaf9; border-radius: 12px;">
    <h1 style="color: #1c4532; font-size: 24px; margin-bottom: 24px; border-bottom: 2px solid #1c4532; padding-bottom: 12px;">
      TEST: New Necker Cup Reservation
    </h1>
    <p style="color: #78716c; font-size: 14px; margin-bottom: 16px; padding: 8px; background: #fef3c7; border-radius: 4px;">
      This is a test email to verify the SendGrid integration.
    </p>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #78716c; font-size: 14px; width: 140px;">Name</td>
        <td style="padding: 8px 0; color: #1c1917; font-size: 16px; font-weight: bold;">${testData.first_name} ${testData.last_name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Email</td>
        <td style="padding: 8px 0; color: #1c1917; font-size: 16px;"><a href="mailto:${testData.email}" style="color: #1c4532;">${testData.email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Phone</td>
        <td style="padding: 8px 0; color: #1c1917; font-size: 16px;">${testData.phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Package</td>
        <td style="padding: 8px 0; color: #1c1917; font-size: 16px;">${packageLabel}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #78716c; font-size: 14px; vertical-align: top;">Details</td>
        <td style="padding: 8px 0; color: #1c1917; font-size: 14px;">${testData.message}</td>
      </tr>
    </table>
    <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #d6d3d1; color: #a8a29e; font-size: 12px;">
      Submitted from neckercup.com reservation form (TEST)
    </p>
  </div>
`;

async function sendTestEmail() {
  console.log('[v0] Sending test email via SendGrid...');

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: TO_EMAIL }] }],
      from: { email: FROM_EMAIL, name: 'Necker Cup' },
      subject: `TEST: New Reservation — ${testData.first_name} ${testData.last_name} — ${packageLabel}`,
      content: [{ type: 'text/html', value: emailHtml }],
    }),
  });

  console.log(`[v0] SendGrid response status: ${response.status}`);

  if (response.ok || response.status === 202) {
    console.log('[v0] SUCCESS - Test email sent to ' + TO_EMAIL);
    console.log('[v0] Check your inbox (and spam folder) for the test email.');
  } else {
    const errorText = await response.text();
    console.error('[v0] FAILED - SendGrid error:', errorText);
  }
}

sendTestEmail();
