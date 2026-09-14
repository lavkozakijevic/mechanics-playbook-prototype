/* Website kit — Mechanics Library: filter sidebar only.
 * Rows and cards are pre-rendered by Astro in pages/mechanics/index.astro;
 * this island adds show/hide filtering via DOM data attributes.
 *
 * Category, product context, and user type all filter whole rows (spec §3
 * rebuild, 14 Sep 2026, owner correction): each is a property of the
 * mechanic, read from data-cat/data-contexts/data-players on [data-tag-row]
 * itself, same as before this rebuild — the only thing that changed under
 * them is that a row now holds a card grid instead of being the card.
 * Role is different on purpose: it's a property of the implementation, not
 * the mechanic, so it filters individual [data-role-card] elements within a
 * row rather than the row's own data attributes, multi-select OR (any
 * selected role present on the card's own data-roles matches), and a row
 * left with zero visible cards after that hides too — but only once a role
 * filter is actually active; a row's own natural zero-implementations state
 * is not itself a filter result and stays visible until one is. */
import React, { useState, useEffect, useCallback } from "react";
import { Input } from "../ds/Input.jsx";

const CATS = {
  retention:    { label: "Retention",    color: "var(--cat-retention)" },
  monetization: { label: "Monetization", color: "var(--cat-monetization)" },
  social:       { label: "Social",       color: "var(--cat-social)" },
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
 * Filter sidebar for the mechanics library.
 * Reads pre-rendered [data-tag-row] rows (and the [data-role-card] cards
 * inside each) from the DOM and toggles `hidden` based on the active filter
 * state. Never re-renders the row/card list — JavaScript is additive only.
 */
export function MechanicsFilters({ contextOptions, playerOptions, roleOptions, total }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [contexts, setContexts] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const active = !!(query || category !== "all" || contexts.length || users.length || roles.length);

  const clearAll = useCallback(() => {
    setQuery(""); setCategory("all"); setContexts([]); setUsers([]); setRoles([]);
  }, []);

  const toggle = (list, setList, value) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  const pickCategory = (key) => setCategory((c) => (c === key ? "all" : key));

  // Filter the pre-rendered row/card grid by updating DOM visibility
  useEffect(() => {
    const q = query.trim().toLowerCase();
    const rows = document.querySelectorAll("[data-tag-row]");
    let shown = 0;

    rows.forEach((row) => {
      const cat = row.dataset.cat ?? "";
      const ctxs = JSON.parse(row.dataset.contexts ?? "[]");
      const players = JSON.parse(row.dataset.players ?? "[]");
      const name = row.dataset.name ?? "";
      const def = row.dataset.def ?? "";

      let visible = true;
      if (q && !(name.includes(q) || def.includes(q))) visible = false;
      if (category !== "all" && cat !== category) visible = false;
      if (contexts.length && !ctxs.some((t) => contexts.includes(t))) visible = false;
      if (users.length && !players.some((u) => users.includes(u))) visible = false;

      // Role filters cards, not the row itself — multi-select OR, any
      // selected role present on the card's own roles is a match. Only
      // touches a row that otherwise passed every row-level filter above;
      // a row already hidden by category/search/context/player stays
      // hidden regardless of what its cards carry.
      if (visible && roles.length) {
        const cards = row.querySelectorAll("[data-role-card]");
        let anyCardVisible = false;
        cards.forEach((card) => {
          const cardRoles = JSON.parse(card.dataset.roles ?? "[]");
          const cardVisible = cardRoles.some((r) => roles.includes(r));
          card.hidden = !cardVisible;
          if (cardVisible) anyCardVisible = true;
        });
        if (!anyCardVisible) visible = false;
      } else {
        row.querySelectorAll("[data-role-card]").forEach((card) => { card.hidden = false; });
      }

      row.hidden = !visible;
      if (visible) shown++;
    });

    const countEl = document.getElementById("lib-shown");
    if (countEl) countEl.textContent = String(shown);

    const hintEl = document.getElementById("lib-hint");
    const resetEl = document.getElementById("lib-reset");
    if (hintEl) hintEl.hidden = active;
    if (resetEl) resetEl.hidden = !active;

    const emptyEl = document.getElementById("lib-empty");
    if (emptyEl) emptyEl.hidden = shown > 0;
  }, [query, category, contexts, users, roles, active]);

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
        <FilterRow active={category === "all"} dot="var(--ink-400)" label="All" onClick={() => setCategory("all")} />
        {Object.entries(CATS).map(([key, c]) => (
          <FilterRow key={key} active={category === key} dot={c.color} label={c.label} onClick={() => pickCategory(key)} />
        ))}
      </div>

      <div className="fgroup" role="group" aria-label="Role">
        <span className="fgroup__label">Role</span>
        {(roleOptions || []).map((r) => (
          <FilterRow key={r} active={roles.includes(r)} label={fmt(r)} onClick={() => toggle(roles, setRoles, r)} />
        ))}
      </div>

      <div className="fgroup" role="group" aria-label="Product context">
        <span className="fgroup__label">Product context</span>
        {(contextOptions || []).map((t) => (
          <FilterRow key={t} active={contexts.includes(t)} label={fmt(t)} onClick={() => toggle(contexts, setContexts, t)} />
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
