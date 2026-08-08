import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const apiKey = process.env.SENDGRID_API_KEY;
const apiBase = process.env.SENDGRID_API_BASE || 'https://api.sendgrid.com';
const existingTemplateId = process.env.SENDGRID_TEMPLATE_ID;

if (!apiKey) {
  console.error('SENDGRID_API_KEY is required. Export it in this terminal and run the command again.');
  process.exit(1);
}

const htmlPath = resolve('public/newsletter-necker-cup-2026.html');
const htmlContent = await readFile(htmlPath, 'utf8');
const templateName = 'Necker Cup 2026 — Moskito Island 10% Offer';
const versionName = 'Moskito Island Promotion — Promo Tracking';
const subject = 'A Private Moskito Island Offer for Necker Cup 2026';
const testData = JSON.stringify({ first_name: 'Rem' });

async function sendgrid(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const text = await response.text();
  const body = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = body?.errors?.map((error) => error.message).join('; ') || text || response.statusText;
    throw new Error(`SendGrid ${response.status}: ${message}`);
  }

  return body;
}

const template = existingTemplateId
  ? { id: existingTemplateId }
  : await sendgrid('/v3/templates', {
      method: 'POST',
      body: JSON.stringify({ name: templateName, generation: 'dynamic' }),
    });

try {
  const version = await sendgrid(`/v3/templates/${template.id}/versions`, {
    method: 'POST',
    body: JSON.stringify({
      active: 1,
      name: versionName,
      subject,
      html_content: htmlContent,
      generate_plain_content: true,
      editor: 'code',
      test_data: testData,
    }),
  });

  console.log(`${existingTemplateId ? 'Updated' : 'Created'} SendGrid dynamic template: ${template.id}`);
  console.log(`Created active version: ${version.id}`);
} catch (error) {
  console.error(`Template ${template.id} was created, but its version failed.`);
  throw error;
}
