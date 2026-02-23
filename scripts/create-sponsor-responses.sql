-- Create sponsor_responses table to track email click-throughs
CREATE TABLE IF NOT EXISTS sponsor_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_email TEXT NOT NULL,
  contact_name TEXT,
  company TEXT,
  campaign_id TEXT,
  campaign_name TEXT,
  response TEXT NOT NULL CHECK (response IN ('interested', 'not_interested')),
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Disable RLS so the anon key can insert
ALTER TABLE sponsor_responses DISABLE ROW LEVEL SECURITY;

-- Index for quick lookups by campaign and contact
CREATE INDEX IF NOT EXISTS idx_sponsor_responses_campaign ON sponsor_responses(campaign_id);
CREATE INDEX IF NOT EXISTS idx_sponsor_responses_email ON sponsor_responses(contact_email);
CREATE INDEX IF NOT EXISTS idx_sponsor_responses_response ON sponsor_responses(response);
