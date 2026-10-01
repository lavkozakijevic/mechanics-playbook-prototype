-- Payments, step 1: subscription state, webhook dedupe log, manual entitlement.
--
-- Apply once by pasting the whole file into the Supabase SQL Editor (it runs as
-- postgres). It is a single transaction: if any statement fails, nothing is
-- applied, so a failed paste can simply be fixed and pasted again. It is not
-- written to be re-run after it has succeeded.
--
-- Project settings assumed: Data API on, "automatically expose new tables" OFF,
-- automatic RLS ON. So nothing below is reachable through the Data API except
-- what is granted explicitly in section 5, and every grant is written out.
--
-- Not part of the Astro build. Run supabase/checks/payments_schema_check.sql
-- afterwards to confirm RLS, policies and privileges.
--
-- Sections:
--   1. Tables
--   2. Row-level security
--   3. The one function (the only write path for subscription state)
--   4. Policies
--   5. Grants
--   Then, after COMMIT, outside the transaction:
--   A. Lav's manual entitlement (commented out, run by hand)
--   B. 30-day pruning job (commented out, run only if the check file says
--      pg_cron is available)
--   C. A history query for reference (commented out)

begin;

-- ---------------------------------------------------------------------------
-- 1. Tables
-- ---------------------------------------------------------------------------

-- One row per Paddle subscription, never per user. A user who subscribes,
-- cancels and subscribes again has two rows. Rows are never deleted or replaced
-- by application code; the only delete path is the cascade when the user is
-- deleted from Auth. Sign-up date is auth.users.created_at and is not copied.
create table public.subscriptions (
  paddle_subscription_id text primary key,
  user_id                uuid not null references auth.users (id) on delete cascade,
  paddle_customer_id     text not null,
  status                 text not null
                         check (status in ('active', 'trialing', 'past_due', 'paused', 'canceled')),
  price_id               text not null,
  product_id             text not null,
  -- Paddle subscription.started_at. Nullable: Paddle's docs describe it as the
  -- time the subscription started, and a missing value must never make the
  -- webhook fail and leave a paying user without access.
  started_at             timestamptz,
  -- Paddle subscription.canceled_at. Null until the cancellation has happened.
  canceled_at            timestamptz,
  -- Paddle subscription.scheduled_change.effective_at, kept only while
  -- scheduled_change.action = 'cancel'. Scheduled pauses are not stored.
  cancel_effective_at    timestamptz,
  -- occurred_at of the last event applied; the ordering guard (section 3).
  last_event_occurred_at timestamptz not null,
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);

create index subscriptions_user_id_idx on public.subscriptions (user_id);

-- Dedupe log. No payload is stored. Pruned after 30 days (section B).
create table public.webhook_events (
  event_id               text primary key,
  event_type             text not null,
  occurred_at            timestamptz not null,
  paddle_subscription_id text,
  user_id                uuid references auth.users (id) on delete cascade,
  outcome                text not null
                         check (outcome in ('applied', 'stale', 'rejected_user')),
  received_at            timestamptz not null default now()
);

create index webhook_events_user_id_idx     on public.webhook_events (user_id);
create index webhook_events_received_at_idx on public.webhook_events (received_at);

-- Hand-set access (Lav). Deliberately separate from Paddle-driven state: no
-- webhook or reconciliation code path touches this table.
create table public.manual_entitlements (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  granted_at timestamptz not null default now(),
  note       text,
  expires_at timestamptz
);

-- ---------------------------------------------------------------------------
-- 2. Row-level security
-- ---------------------------------------------------------------------------
-- Automatic RLS already does this for new tables; stated explicitly so the
-- file stays correct if that setting is ever changed.

alter table public.subscriptions       enable row level security;
alter table public.webhook_events      enable row level security;
alter table public.manual_entitlements enable row level security;

-- ---------------------------------------------------------------------------
-- 3. The only write path for subscription state
-- ---------------------------------------------------------------------------
-- Called by the webhook Worker (and the reconciliation job) with the secret
-- key. In one transaction it:
--   a. records the event_id; a repeated event_id returns 'duplicate' and
--      changes nothing;
--   b. rejects the event if the user id is missing, not in Auth, or differs
--      from the user already stored for that subscription;
--   c. upserts the subscription only if the event is newer than the last one
--      applied for that subscription (strictly newer; an equal or older event
--      returns 'stale' and changes nothing);
--   d. never changes user_id on an existing subscription.
-- Returns one of: applied, stale, duplicate, rejected_user.
--
-- The dedupe insert and the upsert share one transaction, so a failure part
-- way through rolls both back and Paddle's retry starts clean. A value that
-- breaks a constraint (for example an unknown status) raises and rolls back,
-- so the Worker sees an error and Paddle retries rather than the event being
-- recorded as handled.
--
-- Reconciliation calls this with the subscription's own updated_at from the
-- Paddle API as p_occurred_at (and "reconcile:<subscription>:<updated_at>" as
-- p_event_id). That time and the webhooks' occurred_at both come from Paddle's
-- clock, so a reconciliation can never overwrite a newer webhook; the time of
-- the read would come from the Worker's clock, which can run ahead of Paddle's.

create function public.apply_subscription_event(
  p_event_id               text,
  p_event_type             text,
  p_occurred_at            timestamptz,
  p_user_id                uuid,
  p_subscription_id        text,
  p_customer_id            text,
  p_status                 text,
  p_price_id               text,
  p_product_id             text,
  p_started_at             timestamptz,
  p_canceled_at            timestamptz,
  p_scheduled_action       text,
  p_scheduled_effective_at timestamptz
)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_ok     boolean;
  v_stored_user uuid;
  v_count       integer;
begin
  select exists (select 1 from auth.users u where u.id = p_user_id)
    into v_user_ok;

  insert into public.webhook_events
    (event_id, event_type, occurred_at, paddle_subscription_id, user_id, outcome)
  values
    (p_event_id, p_event_type, p_occurred_at, p_subscription_id,
     case when v_user_ok then p_user_id end, 'applied')
  on conflict (event_id) do nothing;
  get diagnostics v_count = row_count;
  if v_count = 0 then
    return 'duplicate';
  end if;

  if not v_user_ok then
    update public.webhook_events set outcome = 'rejected_user'
     where event_id = p_event_id;
    return 'rejected_user';
  end if;

  select s.user_id into v_stored_user
    from public.subscriptions s
   where s.paddle_subscription_id = p_subscription_id;
  if found and v_stored_user <> p_user_id then
    update public.webhook_events set outcome = 'rejected_user'
     where event_id = p_event_id;
    return 'rejected_user';
  end if;

  insert into public.subscriptions as s
    (paddle_subscription_id, user_id, paddle_customer_id, status, price_id,
     product_id, started_at, canceled_at, cancel_effective_at,
     last_event_occurred_at)
  values
    (p_subscription_id, p_user_id, p_customer_id, p_status, p_price_id,
     p_product_id, p_started_at, p_canceled_at,
     case when p_scheduled_action = 'cancel' then p_scheduled_effective_at end,
     p_occurred_at)
  on conflict (paddle_subscription_id) do update set
    paddle_customer_id     = excluded.paddle_customer_id,
    status                 = excluded.status,
    price_id               = excluded.price_id,
    product_id             = excluded.product_id,
    started_at             = coalesce(excluded.started_at, s.started_at),
    canceled_at            = excluded.canceled_at,
    cancel_effective_at    = excluded.cancel_effective_at,
    last_event_occurred_at = excluded.last_event_occurred_at,
    updated_at             = now()
  where s.last_event_occurred_at < excluded.last_event_occurred_at;
  get diagnostics v_count = row_count;
  if v_count = 0 then
    update public.webhook_events set outcome = 'stale'
     where event_id = p_event_id;
    return 'stale';
  end if;

  return 'applied';
end;
$$;

-- ---------------------------------------------------------------------------
-- 4. Policies
-- ---------------------------------------------------------------------------
-- subscriptions: a signed-in user reads only their own rows and can write
-- nothing (there is no insert, update or delete policy). webhook_events and
-- manual_entitlements have no policies at all, so no client role can touch
-- them. anon has no policy anywhere. service_role bypasses RLS by role
-- attribute and needs none.

create policy subscriptions_select_own
  on public.subscriptions
  for select
  to authenticated
  using (user_id = (select auth.uid()));

-- ---------------------------------------------------------------------------
-- 5. Grants
-- ---------------------------------------------------------------------------
-- New tables are not auto-exposed, and the same change removes the automatic
-- grants for service_role, so the Worker needs explicit grants too. The
-- baseline revoke makes the result the same even if a default grant exists.
-- The Worker (service_role) can read all three tables and call the function;
-- it has no direct INSERT, UPDATE or DELETE on any table.

revoke all on table public.subscriptions       from public, anon, authenticated, service_role;
revoke all on table public.webhook_events      from public, anon, authenticated, service_role;
revoke all on table public.manual_entitlements from public, anon, authenticated, service_role;

grant select on public.subscriptions       to authenticated;
grant select on public.subscriptions       to service_role;
grant select on public.webhook_events      to service_role;
grant select on public.manual_entitlements to service_role;

-- Postgres grants EXECUTE on new functions to PUBLIC by default; remove it.
revoke all on function public.apply_subscription_event(
  text, text, timestamptz, uuid, text, text, text, text, text,
  timestamptz, timestamptz, text, timestamptz
) from public, anon, authenticated, service_role;

grant execute on function public.apply_subscription_event(
  text, text, timestamptz, uuid, text, text, text, text, text,
  timestamptz, timestamptz, text, timestamptz
) to service_role;

commit;

-- ===========================================================================
-- Everything below is outside the transaction and is commented out.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- A. Lav's manual entitlement. Run by hand, once, after replacing the
--    placeholder with Lav's user id (Authentication > Users in the dashboard).
--    Runs as postgres in the SQL Editor; no client role can run it.
-- ---------------------------------------------------------------------------
-- insert into public.manual_entitlements (user_id, note)
-- values ('<LAV_USER_ID>', 'Owner access, set by hand');

-- ---------------------------------------------------------------------------
-- B. 30-day pruning of webhook_events. Run ONLY if the check file reports
--    pg_cron as available on this project. If it is not available, skip this
--    section; nothing else depends on it and the table stays small.
--    Run this block on its own, after the migration above has committed.
--    This section has been superseded by 20261001000100_payments_hardening.sql.
-- ---------------------------------------------------------------------------
-- create extension if not exists pg_cron;
--
-- select cron.schedule(
--   'prune-webhook-events',
--   '17 3 * * *',
--   $$ delete from public.webhook_events where received_at < now() - interval '30 days' $$
-- );
--
-- To remove the job later:
-- select cron.unschedule('prune-webhook-events');

-- ---------------------------------------------------------------------------
-- C. One user's full history: sign-up date from Auth, then every subscription
--    in order. Subscribed, cancelled and subscribed again shows as separate
--    rows.
-- ---------------------------------------------------------------------------
-- select u.email,
--        u.created_at as signed_up_at,
--        s.paddle_subscription_id,
--        s.status,
--        s.started_at,
--        s.canceled_at,
--        s.cancel_effective_at
--   from auth.users u
--   left join public.subscriptions s on s.user_id = u.id
--  where u.email = 'someone@example.com'
--  order by s.started_at;
