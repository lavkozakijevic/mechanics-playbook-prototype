-- Payments schema check. READ-ONLY: every statement is a SELECT, nothing is
-- changed. Paste into the Supabase SQL Editor after applying
-- supabase/migrations/20261001000000_payments_schema.sql.
--
-- If the editor shows only the last result when you run several statements,
-- select one numbered query at a time and run it. "Expect" says what a correct
-- result looks like.

-- [1] Row-level security on every table in public.
-- Expect: exactly three rows (subscriptions, webhook_events,
-- manual_entitlements), all with rls_enabled = true. Any other table listed
-- here with rls_enabled = false is a problem.
select c.relname                      as table_name,
       c.relrowsecurity               as rls_enabled,
       pg_get_userbyid(c.relowner)    as owner
  from pg_class c
  join pg_namespace n on n.oid = c.relnamespace
 where n.nspname = 'public'
   and c.relkind in ('r', 'p')
 order by c.relname;

-- [2] Policies.
-- Expect: exactly two rows, both SELECT / {authenticated} / (user_id = ( SELECT
-- auth.uid() )): subscriptions_select_own on subscriptions, and (after
-- 20261002000000_entitlement.sql) manual_entitlements_select_own on
-- manual_entitlements. No policy for anon, and none on webhook_events.
select tablename, policyname, cmd, roles, qual, with_check
  from pg_policies
 where schemaname = 'public'
 order by tablename, policyname;

-- [3] Table privileges per role, against what the plan grants.
-- Shows every privilege that is granted or expected; result = 'ok' when they
-- agree, 'MISMATCH' when they do not.
-- Expect: five rows, all 'ok' (the first four from the first migration, the
-- last from 20261002000000_entitlement.sql):
--   authenticated  subscriptions        SELECT
--   service_role   subscriptions        SELECT
--   service_role   webhook_events       SELECT
--   service_role   manual_entitlements  SELECT
--   authenticated  manual_entitlements  SELECT
-- anon appears nowhere. Any 'MISMATCH' row is a problem.
with roles(role_name) as (
  values ('anon'), ('authenticated'), ('service_role')
),
tbls(table_name) as (
  values ('subscriptions'), ('webhook_events'), ('manual_entitlements')
),
privs(priv) as (
  values ('SELECT'), ('INSERT'), ('UPDATE'), ('DELETE'),
         ('TRUNCATE'), ('REFERENCES'), ('TRIGGER')
),
expected(role_name, table_name, priv) as (
  values ('authenticated', 'subscriptions',       'SELECT'),
         ('service_role',  'subscriptions',       'SELECT'),
         ('service_role',  'webhook_events',      'SELECT'),
         ('service_role',  'manual_entitlements', 'SELECT'),
         ('authenticated', 'manual_entitlements', 'SELECT')
),
matrix as (
  select r.role_name, t.table_name, p.priv,
         has_table_privilege(r.role_name, format('public.%I', t.table_name), p.priv) as actual,
         exists (select 1 from expected e
                  where e.role_name = r.role_name
                    and e.table_name = t.table_name
                    and e.priv = p.priv) as is_expected
    from roles r cross join tbls t cross join privs p
)
select role_name, table_name, priv as privilege,
       case when actual = is_expected then 'ok' else 'MISMATCH' end as result
  from matrix
 where actual or is_expected
 order by table_name, role_name, privilege;

-- [4] Raw table ACLs, including PUBLIC (grantee 0).
-- Expect: only the owner, plus the grants listed under [3]. No row with
-- grantee = PUBLIC, none for anon.
select c.relname as table_name,
       case a.grantee when 0 then 'PUBLIC' else pg_get_userbyid(a.grantee) end as grantee,
       a.privilege_type
  from pg_class c
  join pg_namespace n on n.oid = c.relnamespace,
       lateral aclexplode(coalesce(c.relacl, acldefault('r', c.relowner))) a
 where n.nspname = 'public'
   and c.relkind in ('r', 'p')
 order by c.relname, grantee, a.privilege_type;

-- [5] Column-level grants.
-- Expect: zero rows. All grants are table-level.
select c.relname as table_name, a.attname as column_name, a.attacl
  from pg_attribute a
  join pg_class c on c.oid = a.attrelid
  join pg_namespace n on n.oid = c.relnamespace
 where n.nspname = 'public'
   and c.relkind in ('r', 'p')
   and a.attnum > 0
   and a.attacl is not null;

-- [6] The function: definer, fixed search_path, owner.
-- Expect: one row, security_definer = true, config = {search_path=""}.
select p.proname,
       pg_get_function_identity_arguments(p.oid) as args,
       pg_get_userbyid(p.proowner)               as owner,
       p.prosecdef                               as security_definer,
       p.proconfig                               as config
  from pg_proc p
  join pg_namespace n on n.oid = p.pronamespace
 where n.nspname = 'public'
   and p.proname = 'apply_subscription_event';

-- [7] Who can execute the function.
-- Expect: anon false, authenticated false, service_role true.
select r.role_name,
       has_function_privilege(r.role_name, p.oid, 'EXECUTE') as can_execute,
       (r.role_name = 'service_role')                        as expected,
       case when has_function_privilege(r.role_name, p.oid, 'EXECUTE') = (r.role_name = 'service_role')
            then 'ok' else 'MISMATCH' end                    as result
  from (values ('anon'), ('authenticated'), ('service_role')) r(role_name)
 cross join (select p.oid
               from pg_proc p
               join pg_namespace n on n.oid = p.pronamespace
              where n.nspname = 'public'
                and p.proname = 'apply_subscription_event') p
 order by r.role_name;

-- [8] PUBLIC cannot execute the function.
-- Expect: public_can_execute = false. (Postgres grants EXECUTE to PUBLIC by
-- default; the migration revokes it. This reads the ACL directly.)
select exists (
         select 1
           from pg_proc p
           join pg_namespace n on n.oid = p.pronamespace,
                lateral aclexplode(coalesce(p.proacl, acldefault('f', p.proowner))) a
          where n.nspname = 'public'
            and p.proname = 'apply_subscription_event'
            and a.grantee = 0
            and a.privilege_type = 'EXECUTE'
       ) as public_can_execute;

-- [9] Informational: other functions in public that anon or authenticated can
-- call through the Data API. Not created by the first migration (for example the
-- automatic-RLS helper), so review rather than expect a particular result. After
-- 20261002000000_entitlement.sql, current_entitlement() is listed here for
-- authenticated (and only authenticated); that is intended.
select p.proname,
       pg_get_function_identity_arguments(p.oid) as args,
       has_function_privilege('anon', p.oid, 'EXECUTE')          as anon_can_execute,
       has_function_privilege('authenticated', p.oid, 'EXECUTE') as authenticated_can_execute
  from pg_proc p
  join pg_namespace n on n.oid = p.pronamespace
 where n.nspname = 'public'
   and p.proname <> 'apply_subscription_event'
   and (has_function_privilege('anon', p.oid, 'EXECUTE')
        or has_function_privilege('authenticated', p.oid, 'EXECUTE'))
 order by p.proname;

-- [10] Deleting a user in Auth removes their rows.
-- Expect: three rows, on_delete = 'c' (cascade): manual_entitlements,
-- subscriptions, webhook_events.
select c.conrelid::regclass as child_table,
       c.conname,
       c.confdeltype        as on_delete
  from pg_constraint c
 where c.contype = 'f'
   and c.confrelid = 'auth.users'::regclass
   and c.connamespace = 'public'::regnamespace
 order by 1;

-- [11] Columns, for reading against the plan.
select table_name, ordinal_position, column_name, data_type, is_nullable
  from information_schema.columns
 where table_schema = 'public'
   and table_name in ('subscriptions', 'webhook_events', 'manual_entitlements')
 order by table_name, ordinal_position;

-- [12] None of the three tables is published to Realtime.
-- Expect: zero rows.
select pubname, schemaname, tablename
  from pg_publication_tables
 where pubname = 'supabase_realtime'
   and schemaname = 'public'
   and tablename in ('subscriptions', 'webhook_events', 'manual_entitlements');

-- [13] Informational: default privileges for future objects. With "automatically
-- expose new tables" OFF, there should be no entry that grants anon,
-- authenticated or service_role access to new tables ('r') in public.
select pg_get_userbyid(defaclrole)          as for_role,
       defaclnamespace::regnamespace        as in_schema,
       defaclobjtype                        as object_type,
       defaclacl
  from pg_default_acl
 order by 1, 2, 3;

-- [14] Is pg_cron available on this project?
-- Expect: one row means it is available, so section B of the migration can be
-- run. Zero rows means it is not available: skip section B. installed_version
-- null means available but not yet enabled; section B enables it.
select name, default_version, installed_version
  from pg_available_extensions
 where name = 'pg_cron';

-- [15] Is pg_cron installed right now?
-- Expect: null before section B has been run, 'cron.job' after.
select to_regclass('cron.job') as cron_job_table;

-- [16] Only after section B has been run (this errors if pg_cron is not
-- installed, so leave it commented until then): the pruning job exists and is
-- active.
-- select jobid, jobname, schedule, command, active from cron.job;

-- [17] Default table privileges for role postgres in schema public (run after
-- 20261001000100_payments_hardening.sql).
-- Expect: exactly one row, grantee = postgres (its own privileges on tables it
-- creates). No row for anon, authenticated, service_role or PUBLIC. If the
-- default entry was removed entirely because it now equals Postgres's built-in
-- default, this still lists postgres only, which is the expected result.
-- Entries that apply to all schemas, and other roles such as supabase_admin,
-- are not part of this check; query 13 lists every default entry.
select case x.grantee when 0 then 'PUBLIC' else pg_get_userbyid(x.grantee) end as grantee,
       string_agg(x.privilege_type, ', ' order by x.privilege_type)             as privileges
  from pg_roles r
 cross join lateral aclexplode(coalesce(
         (select d.defaclacl
            from pg_default_acl d
           where d.defaclrole      = r.oid
             and d.defaclnamespace = 'public'::regnamespace
             and d.defaclobjtype   = 'r'),
         acldefault('r', r.oid))) x
 where r.rolname = 'postgres'
 group by x.grantee
 order by 1;

-- [18] The pruning job (run after 20261001000100_payments_hardening.sql; errors
-- if pg_cron is not installed).
-- Expect: exactly one row, jobname = prune-webhook-events, schedule =
-- 17 3 * * *, active = true, username = postgres, and a command that deletes
-- from public.webhook_events where received_at is older than 30 days.
select jobid, jobname, schedule, command, active, username, database
  from cron.job
 where jobname = 'prune-webhook-events';

-- [19] The entitlement functions: definer, fixed search_path, owner (run after
-- 20261002000000_entitlement.sql).
-- Expect: two rows (current_entitlement, entitlement_of), owner postgres,
-- security_definer = true, config = {search_path=""}, volatility 's' (stable).
select p.proname,
       pg_get_function_identity_arguments(p.oid) as args,
       pg_get_userbyid(p.proowner)               as owner,
       p.prosecdef                               as security_definer,
       p.proconfig                               as config,
       p.provolatile                             as volatility
  from pg_proc p
  join pg_namespace n on n.oid = p.pronamespace
 where n.nspname = 'public'
   and p.proname in ('entitlement_of', 'current_entitlement')
 order by p.proname;

-- [20] Who can execute the entitlement functions.
-- Expect: every row 'ok'. entitlement_of: service_role only. current_entitlement:
-- authenticated only (anon false, service_role false).
select f.proname, r.role_name,
       has_function_privilege(r.role_name, f.oid, 'EXECUTE')            as can_execute,
       (   (f.proname = 'entitlement_of'      and r.role_name = 'service_role')
        or (f.proname = 'current_entitlement' and r.role_name = 'authenticated')) as expected,
       case when has_function_privilege(r.role_name, f.oid, 'EXECUTE')
                 = (   (f.proname = 'entitlement_of'      and r.role_name = 'service_role')
                    or (f.proname = 'current_entitlement' and r.role_name = 'authenticated'))
            then 'ok' else 'MISMATCH' end                                as result
  from (select p.oid, p.proname
          from pg_proc p
          join pg_namespace n on n.oid = p.pronamespace
         where n.nspname = 'public'
           and p.proname in ('entitlement_of', 'current_entitlement')) f
 cross join (values ('anon'), ('authenticated'), ('service_role')) r(role_name)
 order by f.proname, r.role_name;

-- [21] PUBLIC cannot execute either entitlement function.
-- Expect: zero rows.
select p.proname
  from pg_proc p
  join pg_namespace n on n.oid = p.pronamespace,
       lateral aclexplode(coalesce(p.proacl, acldefault('f', p.proowner))) a
 where n.nspname = 'public'
   and p.proname in ('entitlement_of', 'current_entitlement')
   and a.grantee = 0
   and a.privilege_type = 'EXECUTE';

-- [22] The rules, read-only. Expect 'none' for an id that does not exist.
select public.entitlement_of('00000000-0000-0000-0000-000000000000') as unknown_user;

-- [23] Your own answer. Replace the placeholder with your user id
-- (Authentication > Users). Expect 'full' while your manual entitlement has not
-- expired. Leave commented until you have replaced it.
-- select public.entitlement_of('<LAV_USER_ID>') as lav;
