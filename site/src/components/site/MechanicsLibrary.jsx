/* Website kit — Mechanics Library: filter sidebar and pill selection.
 * Pills and card grids are pre-rendered by Astro in pages/mechanics/index.astro;
 * this island adds show/hide filtering and the pill-tap reveal via DOM data
 * attributes. It never renders row/card content itself.
 *
 * Two filters, doing different jobs (spec §3.4), each with its own heading
 * and a one-line explanation rather than a bare word — Category, Role, and
 * the old Product context filter all drew from overlapping vocabulary
 * (retention/monetization/social/engagement/activation), with nothing on
 * the page saying which one a reader was looking at (owner finding, 15 Sep
 * 2026). Product context is removed entirely rather than relabeled: it was
 * the pre-library freeform context vocabulary, never a defined list (spec
 * §6.4 flags exactly this), and its values duplicate Category and Role.
 *
 * Category and search both narrow which *pills* show (owner instruction,
 * 16 Sep 2026): both are properties of the mechanic, read from data-cat and
 * data-search on [data-pill] itself — search matches mechanic name,
 * definition, and every one of its cards' implementation summaries (spec
 * §3.4's "implementation content"), all folded into data-search at build
 * time. User type filters pills the same way, from data-players. Role is
 * different on purpose: it's a property of the implementation, not the
 * mechanic, so it filters individual [data-role-card] elements inside the
 * currently-open grid rather than a pill's own data attributes,
 * multi-select OR (any selected role present on the card's own data-roles
 * matches). Hidden grids get filtered too since it's cheap and harmless —
 * nothing depends on it not running there.
 *
 * Pill selection (spec §3.2/§3.3): tapping a pill shows its grid and hides
 * every other one; tapping the active pill again clears back to the
 * landing state (the empty-state line), the same toggle-off behavior
 * Category's own "All" button already uses. Deep-linked via `?m=<id>`
 * (owner instruction, 16 Sep 2026 — a shareable mechanic matters for a
 * library): read on mount to open a pill pre-selected, written with
 * replaceState on every selection change so sharing the current view is a
 * copy-paste of the address bar without cluttering back/forward history
 * with every pill tapped along the way. If a filter hides the selected
 * pill, selection clears the same way tapping it again would. */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Input } from "../ds/Input.jsx";

const CATS = {
  retention:     { label: "Retention",     color: "var(--cat-retention)" },
  monetization:  { label: "Monetization",  color: "var(--cat-monetization)" },
  social:        { label: "Social",        color: "var(--cat-social)" },
  progression:   { label: "Progression",   color: "var(--cat-progression)" },
  competition:   { label: "Competition",   color: "var(--cat-competition)" },
  customization: { label: "Customization", color: "var(--cat-customization)" },
  engagement:    { label: "Engagement",    color: "var(--cat-engagement)" },
  reach:         { label: "Reach",         color: "var(--cat-reach)" },
};

const USER_TYPES = {
  achiever:   { label: "Achiever",   color: "var(--cat-social)" },
  explorer:   { label: "Explorer",   color: "var(--cat-monetization)" },
  socializer: { label: "Socializer", color: "var(--cat-retention)" },
  competitor: { label: "Competitor", color: "var(--red-600)" },
};

const fmt = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const SearchIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

function FilterRow({ active, dot, label, onClick }) {
  return (
    <button type="button" className={"frow" + (active ? " frow--active" : "")} aria-pressed={active} onClick={onClick}>
      {dot !== undefined && <span className="frow__dot" style={{ background: dot }} />}
      <span className="frow__label">{label}</span>
    </button>
  );
}

/**
 * Filter sidebar and pill-selection controller for the mechanics library.
 * Reads pre-rendered [data-pill] buttons and [data-mech-cards] grids (with
 * [data-role-card] cards inside) from the DOM and toggles `hidden`/
 * `aria-pressed` based on filter and selection state. Never re-renders pill
 * or card content — JavaScript is additive only.
 */
export function MechanicsFilters({ playerOptions, roleOptions, total }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selected, setSelected] = useState(null);
  const mounted = useRef(false);

  const active = !!(query || category !== "all" || users.length || roles.length);

  const clearAll = useCallback(() => {
    setQuery(""); setCategory("all"); setUsers([]); setRoles([]);
  }, []);

  const toggle = (list, setList, value) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  const pickCategory = (key) => setCategory((c) => (c === key ? "all" : key));

  // Read the deep-linked pill once on mount — before the filter effect
  // below runs, so a linked-to mechanic that a filter would otherwise hide
  // still opens (nothing is filtered yet at this point).
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("m");
    if (id && document.querySelector(`[data-pill="${id}"]`)) setSelected(id);
  }, []);

  // Pill click handling: delegated to the pill container so it works for
  // every pill without per-pill React state or re-rendering their content.
  useEffect(() => {
    const container = document.getElementById("mech-pills");
    if (!container) return;
    const onClick = (e) => {
      const pill = e.target.closest("[data-pill]");
      if (!pill) return;
      const id = pill.dataset.pill;
      setSelected((cur) => (cur === id ? null : id));
    };
    container.addEventListener("click", onClick);
    return () => container.removeEventListener("click", onClick);
  }, []);

  // Selection: show the chosen grid, hide every other, mark the active
  // pill, show/hide the landing-state line, and sync the URL.
  useEffect(() => {
    document.querySelectorAll("[data-mech-cards]").forEach((grid) => {
      grid.hidden = grid.dataset.mechCards !== selected;
    });
    document.querySelectorAll("[data-pill]").forEach((pill) => {
      pill.setAttribute("aria-pressed", String(pill.dataset.pill === selected));
    });
    const emptyEl = document.getElementById("mech-empty");
    if (emptyEl) emptyEl.hidden = !!selected;

    // Skip the very first run: don't overwrite a URL a reader arrived on
    // (e.g. one with other query params) before anything's actually changed.
    if (!mounted.current) { mounted.current = true; return; }
    const url = new URL(window.location.href);
    if (selected) url.searchParams.set("m", selected);
    else url.searchParams.delete("m");
    window.history.replaceState(null, "", url);
  }, [selected]);

  // Filter the pre-rendered pill list by updating DOM visibility
  useEffect(() => {
    const q = query.trim().toLowerCase();
    const pills = document.querySelectorAll("[data-pill]");
    let shown = 0;

    pills.forEach((pill) => {
      const cat = pill.dataset.cat ?? "";
      const players = JSON.parse(pill.dataset.players ?? "[]");
      const search = pill.dataset.search ?? "";

      let visible = true;
      if (q && !search.includes(q)) visible = false;
      if (category !== "all" && cat !== category) visible = false;
      if (users.length && !players.some((u) => users.includes(u))) visible = false;

      pill.hidden = !visible;
      if (visible) shown++;
    });

    // A filter that hides the selected pill clears the selection, the same
    // as tapping it again would — an open grid whose pill just vanished
    // isn't a state a reader can get back to by looking at the page.
    if (selected) {
      const pill = document.querySelector(`[data-pill="${selected}"]`);
      if (!pill || pill.hidden) setSelected(null);
    }

    const countEl = document.getElementById("lib-shown");
    if (countEl) countEl.textContent = String(shown);

    const hintEl = document.getElementById("lib-hint");
    const resetEl = document.getElementById("lib-reset");
    if (hintEl) hintEl.hidden = active;
    if (resetEl) resetEl.hidden = !active;

    const emptyEl = document.getElementById("lib-empty");
    if (emptyEl) emptyEl.hidden = shown > 0;
  }, [query, category, users, active, selected]);

  // Role filters cards inside whichever grid is open — multi-select OR, any
  // selected role present on the card's own roles is a match. Runs over
  // every grid, not just the visible one; a hidden grid's cards filtering
  // internally has no visible effect, so there's no need to scope this.
  useEffect(() => {
    document.querySelectorAll("[data-role-card]").forEach((card) => {
      if (!roles.length) { card.hidden = false; return; }
      const cardRoles = JSON.parse(card.dataset.roles ?? "[]");
      card.hidden = !cardRoles.some((r) => roles.includes(r));
    });
  }, [roles]);

  // Wire the resultbar's reset button to the same clearAll
  useEffect(() => {
    const resetEl = document.getElementById("lib-reset");
    if (!resetEl) return;
    resetEl.addEventListener("click", clearAll);
    return () => resetEl.removeEventListener("click", clearAll);
  }, [clearAll]);

  return (
    <form className="filters" onSubmit={(e) => e.preventDefault()} aria-label="Filter mechanics">
      <div className="filters__head">
        <span className="filters__title">Filters</span>
        <button type="button" className="filters__clear" onClick={clearAll} disabled={!active}>Clear all</button>
      </div>

      <Input
        aria-label="Search mechanics"
        placeholder="Search mechanics"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        leadingIcon={SearchIcon}
      />

      <div className="fgroup" role="group" aria-label="Category">
        <span className="fgroup__label">Category</span>
        <p className="fgroup__hint">A property of the mechanic itself.</p>
        <FilterRow active={category === "all"} dot="var(--ink-400)" label="All" onClick={() => setCategory("all")} />
        {Object.entries(CATS).map(([key, c]) => (
          <FilterRow key={key} active={category === key} dot={c.color} label={c.label} onClick={() => pickCategory(key)} />
        ))}
      </div>

      <div className="fgroup" role="group" aria-label="Role">
        <span className="fgroup__label">Role</span>
        <p className="fgroup__hint">What it does in a specific app.</p>
        {(roleOptions || []).map((r) => (
          <FilterRow key={r} active={roles.includes(r)} label={fmt(r)} onClick={() => toggle(roles, setRoles, r)} />
        ))}
      </div>

      <div className="fgroup" role="group" aria-label="User type">
        <span className="fgroup__label">User type</span>
        {(playerOptions || []).map((key) => (
          <FilterRow
            key={key}
            active={users.includes(key)}
            dot={USER_TYPES[key] ? USER_TYPES[key].color : "var(--ink-400)"}
            label={USER_TYPES[key] ? USER_TYPES[key].label : fmt(key)}
            onClick={() => toggle(users, setUsers, key)}
          />
        ))}
      </div>
    </form>
  );
}
