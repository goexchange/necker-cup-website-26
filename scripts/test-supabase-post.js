const SUPABASE_URL = 'https://emfbrenmnqainsqkvzoq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZmJyZW5tbnFhaW5zcWt2em9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MTE1MTgsImV4cCI6MjA4NTE4NzUxOH0.q2s6DqKc88xqCpWAnSv4wxm6Qw8hFJetB0KvCdAVuCU';

const testData = {
  first_name: 'Test',
  last_name: 'Submission',
  email: 'test@neckercup.com',
  phone: '+1-555-0123',
  package_interest: 'player_necker',
  message: 'Number of Guests: 2\nArrival Date: 2026-11-30\nDietary Restrictions: None\nSpecial Requests: This is a test submission from v0\nEmergency Contact: Not provided\nEmergency Phone: Not provided',
  source: 'v0_test_script',
  status: 'test',
};

const url = `${SUPABASE_URL}/rest/v1/necker_cup_inquiries`;

async function run() {
  console.log('[v0] Posting test data to:', url);
  console.log('[v0] Payload:', JSON.stringify(testData, null, 2));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(testData),
    });

    const text = await response.text();
    console.log('[v0] Response status:', response.status, response.statusText);
    console.log('[v0] Response body:', text);

    if (response.ok) {
      console.log('[v0] SUCCESS - Test row inserted!');
    } else {
      console.log('[v0] FAILED - Check if the table exists and RLS policies allow inserts');

      console.log('\n[v0] Checking if table exists...');
      const checkResponse = await fetch(`${SUPABASE_URL}/rest/v1/necker_cup_inquiries?select=*&limit=1`, {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
        },
      });
      console.log('[v0] Table check status:', checkResponse.status, checkResponse.statusText);
      const checkText = await checkResponse.text();
      console.log('[v0] Table check body:', checkText);
    }
  } catch (err) {
    console.error('[v0] Network error:', err.message);
  }
}

run();
