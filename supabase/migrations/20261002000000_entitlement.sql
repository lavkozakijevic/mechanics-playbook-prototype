-- Payments, step 4: let a signed-in user read their own entitlement, and compute
-- it in one place.
--
-- Apply once by pasting the whole file into the Supabase SQL Editor (it runs as
-- postgres), after 20261001000000_payments_schema.sql and
-- 20261001000100_payments_hardening.sql. It is a single transaction: if any
-- statement fails, nothing is applied, so a failed paste can simply be fixed and
-- pasted again. It is not written to be re-run after it has succeeded.
--
-- What it does:
--   1. A signed-in user can read their own row in manual_entitlements (a policy
--      on the row, and SELECT granted to authenticated). Nothing else changes
--      for that table: still no insert, update or delete for any client role.
--   2. public.entitlement_of(user id): the one definition of who has access.
--      Executable by service_role only (the payments Worker uses it).
--   3. public.current_entitlement(): the same answer for the caller's own
--      user (auth.uid()), executable by authenticated only. The site Worker
--      calls it with the visitor's own session; it needs no secret key.
--
-- The rules (decided 1 Oct 2026). The answer is 'full', 'past_due' or 'none':
--   full      a manual entitlement that has not expired (expires_at null or in
--             the future); or a subscription that is active or trialing; or a
--             subscription whose status is canceled but whose scheduled
--             cancellation date (cancel_effective_at) is still in the future
--   past_due  otherwise, a subscription in past_due. Access continues, with a
--             banner (the site decides what to show)
--   none      everything else, including paused and canceled
-- When a user has several subscriptions (subscribed, cancelled, subscribed
-- again) the best answer wins: full over past_due over none.
--
-- Not part of the Astro build. Run supabase/checks/payments_schema_check.sql
-- afterwards; queries 19 to 21 are for this file, and queries 2 and 3 now list
-- the manual_entitlements policy and grant.

begin;

-- ---------------------------------------------------------------------------
-- 1. Own-row read on manual_entitlements
-- ---------------------------------------------------------------------------

create policy manual_entitlements_select_own
  on public.manual_entitlements
  for select
  to authenticated
  using (user_id = (select auth.uid()));

grant select on public.manual_entitlements to authenticated;

-- ---------------------------------------------------------------------------
-- 2. The one definition of access
-- ---------------------------------------------------------------------------

create function public.entitlement_of(p_user_id uuid)
returns text
language sql
stable
security definer
set search_path = ''
as $$
  select case
    when exists (
           select 1
             from public.manual_entitlements m
            where m.user_id = p_user_id
              and (m.expires_at is null or m.expires_at > now())
         )
      or exists (
           select 1
             from public.subscriptions s
            where s.user_id = p_user_id
              and (s.status in ('active', 'trialing')
                   or (s.status = 'canceled' and s.cancel_effective_at > now()))
         )
      then 'full'
    when exists (
           select 1
             from public.subscriptions s
            where s.user_id = p_user_id
              and s.status = 'past_due'
         )
      then 'past_due'
    else 'none'
  end
$$;

-- ---------------------------------------------------------------------------
-- 3. The same answer for the signed-in caller
-- ---------------------------------------------------------------------------

-- Security definer so it can call entitlement_of, which no client role may
-- call directly. It only ever answers about auth.uid(): there is no argument a
-- caller could change to ask about someone else. For a caller with no session
-- auth.uid() is null and the answer is 'none'.
create function public.current_entitlement()
returns text
language sql
stable
security definer
set search_path = ''
as $$
  select public.entitlement_of((select auth.uid()))
$$;

-- ---------------------------------------------------------------------------
-- 4. Who can execute what
-- ---------------------------------------------------------------------------

revoke all on function public.entitlement_of(uuid)
  from public, anon, authenticated, service_role;
revoke all on function public.current_entitlement()
  from public, anon, authenticated, service_role;

grant execute on function public.entitlement_of(uuid)    to service_role;
grant execute on function public.current_entitlement()   to authenticated;

commit;
