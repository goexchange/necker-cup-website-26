-- Migration: Link sponsor_responses to existing CRM tables
-- Run this in Supabase SQL Editor AFTER create-sponsor-responses.sql

-- Add foreign key columns linking to existing CRM tables
ALTER TABLE sponsor_responses
  ADD COLUMN IF NOT EXISTS group_email_history_id UUID REFERENCES group_email_history(id),
  ADD COLUMN IF NOT EXISTS client_id INTEGER REFERENCES clients(id),
  ADD COLUMN IF NOT EXISTS group_email_recipient_id UUID REFERENCES group_email_recipients(id);

-- Index the new FK columns for fast joins
CREATE INDEX IF NOT EXISTS idx_sponsor_responses_history ON sponsor_responses(group_email_history_id);
CREATE INDEX IF NOT EXISTS idx_sponsor_responses_client ON sponsor_responses(client_id);
CREATE INDEX IF NOT EXISTS idx_sponsor_responses_recipient ON sponsor_responses(group_email_recipient_id);

-- Enable RLS and allow authenticated users to SELECT (for admin dashboard)
ALTER TABLE sponsor_responses ENABLE ROW LEVEL SECURITY;

-- Anon can still INSERT (for webhook clicks from emails)
CREATE POLICY "anon_insert_sponsor_responses"
  ON sponsor_responses FOR INSERT TO anon
  WITH CHECK (true);

-- Authenticated users (admin) can read all responses
CREATE POLICY "authenticated_select_sponsor_responses"
  ON sponsor_responses FOR SELECT TO authenticated
  USING (true);
