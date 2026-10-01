-- Payments, schema follow-up: remove risky default table privileges, and
-- schedule the 30-day webhook_events pruning job.
--
-- Apply once by pasting the whole file into the Supabase SQL Editor (it runs as
-- postgres), after 20261001000000_payments_schema.sql. It is a single
-- transaction: if any statement fails, nothing is applied, so a failed paste
-- can simply be fixed and pasted again. It is not written to be re-run after it
-- has succeeded.
--
-- What it does:
--   1. Default privileges. Tables created by role postgres in schema public
--      currently pre-grant TRUNCATE, REFERENCES, TRIGGER and MAINTAIN to anon,
--      authenticated and service_role (TRUNCATE bypasses row-level security).
--      This removes every default table privilege for those three roles, so a
--      future table starts with no access for them and every grant has to be
--      written out. Only default privileges for role postgres in schema public
--      on tables change; other schemas, role supabase_admin and non-table
--      objects are not touched, and existing tables keep the grants they have.
--   2. Enables pg_cron (the check file's query 14 reported it available) and
--      schedules the pruning job exactly as written in section B of
--      20261001000000_payments_schema.sql.
--
-- Not part of the Astro build. Run supabase/checks/payments_schema_check.sql
-- afterwards; queries 17 and 18 confirm both changes.

begin;

-- ---------------------------------------------------------------------------
-- 1. No default table privileges for the API roles
-- ---------------------------------------------------------------------------

alter default privileges for role postgres in schema public
  revoke all on tables from anon, authenticated, service_role;

-- ---------------------------------------------------------------------------
-- 2. pg_cron and the 30-day pruning job
-- ---------------------------------------------------------------------------

create extension if not exists pg_cron;

select cron.schedule(
  'prune-webhook-events',
  '17 3 * * *',
  $$ delete from public.webhook_events where received_at < now() - interval '30 days' $$
);

commit;
