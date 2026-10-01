-- Minimal stand-ins for what Supabase provides, so the real migrations in
-- supabase/migrations/ can be applied to a throwaway local Postgres 16 for the
-- end-to-end run (see run.mjs). Never run this against a real project.
-- Roles are cluster-wide, so they are created only if missing.
do $$
begin
  if not exists (select 1 from pg_roles where rolname = 'anon') then create role anon nologin; end if;
  if not exists (select 1 from pg_roles where rolname = 'authenticated') then create role authenticated nologin; end if;
  if not exists (select 1 from pg_roles where rolname = 'service_role') then create role service_role nologin bypassrls; end if;
end
$$;
create schema auth;
create table auth.users (id uuid primary key default gen_random_uuid(), email text);
create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
grant usage on schema public to anon, authenticated, service_role;
-- The real project has these default privileges; the hardening migration removes them.
alter default privileges for role postgres in schema public grant all on tables to anon, authenticated, service_role;
