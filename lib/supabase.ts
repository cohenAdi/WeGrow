import { createClient } from '@supabase/supabase-js'

const supabaseUrl      = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/** Browser / client-side Supabase client */
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Supabase SQL to create the waitlist table:
 *
 * CREATE TABLE waitlist (
 *   id                  UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
 *   created_at          TIMESTAMPTZ DEFAULT NOW() NOT NULL,
 *   full_name           TEXT        NOT NULL,
 *   email               TEXT        NOT NULL UNIQUE,
 *   phone               TEXT,
 *   city                TEXT,
 *   child_age           TEXT,
 *   usage_expectation   TEXT,
 *   most_important      TEXT[]
 * );
 *
 * -- Row-level security (enable before production)
 * ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
 * CREATE POLICY "service_role_all" ON waitlist USING (true) WITH CHECK (true);
 */
