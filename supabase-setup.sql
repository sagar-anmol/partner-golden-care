-- Run this in your Supabase SQL Editor (supabase.com → your project → SQL Editor)

-- Partner applications table
CREATE TABLE IF NOT EXISTS partner_applications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  experience text,
  motivation text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Allow logged-in users to insert their own application
ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own application"
  ON partner_applications FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own application"
  ON partner_applications FOR SELECT
  USING (auth.uid() = user_id);
