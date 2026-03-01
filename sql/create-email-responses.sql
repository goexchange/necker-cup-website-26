-- ============================================================
-- Table: email_responses
-- Tracks Interested / Not Interested clicks from outreach emails
-- ============================================================

CREATE TABLE IF NOT EXISTS email_responses (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id    TEXT NOT NULL,              -- unique ID per recipient (passed in email link)
  email         TEXT,                       -- recipient email (optional, for easy lookup)
  response      TEXT NOT NULL CHECK (response IN ('interested', 'not_interested')),
  campaign      TEXT DEFAULT 'early-access-2026',  -- which email campaign
  responded_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_address    TEXT,                       -- optional
  user_agent    TEXT                        -- optional
);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_email_responses_contact_id ON email_responses (contact_id);
CREATE INDEX IF NOT EXISTS idx_email_responses_campaign   ON email_responses (campaign);
CREATE INDEX IF NOT EXISTS idx_email_responses_response   ON email_responses (response);

-- Enable RLS
ALTER TABLE email_responses ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (the email click comes from unauthenticated users)
CREATE POLICY "Allow anonymous inserts on email_responses"
  ON email_responses FOR INSERT TO anon
  WITH CHECK (true);

-- Allow anonymous select so the page can check for duplicate responses
CREATE POLICY "Allow anonymous select on email_responses"
  ON email_responses FOR SELECT TO anon
  USING (true);

-- Grant permissions
GRANT INSERT, SELECT ON TABLE email_responses TO anon;
GRANT ALL ON TABLE email_responses TO authenticated;
