/* Website kit — Mechanics Library page. Floating filters + 2-up card grid. */
import React, { useState, useMemo } from "react";
import { Tag } from "../ds/Tag.jsx";
import { Input } from "../ds/Input.jsx";
import { Badge } from "../ds/Badge.jsx";

const CATS = {
  retention:    { label: "Retention",    color: "var(--cat-retention)" },
  monetization: { label: "Monetization", color: "var(--cat-monetization)" },
  social:       { label: "Social",       color: "var(--cat-social)" },
};

/* Player types (Bartle). Dot colors drawn from existing DS tokens. */
const USER_TYPES = {
  achiever:   { label: "Achiever",   color: "var(--cat-social)" },
  explorer:   { label: "Explorer",   color: "var(--cat-monetization)" },
  socializer: { label: "Socializer", color: "var(--cat-retention)" },
  competitor: { label: "Competitor", color: "var(--red-600)" },
};

const fmt = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* `category` may be a single key or an array of keys; normalize to an array. */
const catsOf = (m) => (Array.isArray(m.category) ? m.category : [m.category]);

const SearchIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const LockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
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

function MechanicLibCard({ m }) {
  const cats = catsOf(m);
  const primary = cats[0];
  const locked = m.locked;
  return (
    <a className={"mlc" + (locked ? " mlc--locked" : "")} href={locked ? "/subscribe/" : (m.href || `/mechanics/${m.id}/`)}>
      <div className="mlc__top">
        <span className="mlc__lead">
          <span className="mlc__num">{String(m.n).padStart(2, "0")}</span>
          <Tag category={primary}>{CATS[primary].label}</Tag>
        </span>
        <span className="mlc__badge">
          {locked
            ? <Badge tone="neutral" variant="outline" icon={LockIcon}>For subscribers</Badge>
            : <Badge tone="ok" variant="soft">Free</Badge>}
        </span>
      </div>
      <h3 className="mlc__name">{m.name}</h3>
      <p className="mlc__desc">{m.definition}</p>
      <div className="mlc__tags">
        {(m.contextTags || []).map((t) => (
          <span className="pillchip" key={t}>{t}</span>
        ))}
      </div>
      <div className="mlc__foot">
        <span className="mlc__dots">
          {cats.map((c) => (
            <span className="mlc__dot" key={c} style={{ background: CATS[c].color }} title={CATS[c].label} />
          ))}
        </span>
        <span className="mlc__examples">{m.exampleCount} examples</span>
      </div>
    </a>
  );
}

/** Mechanics library: floating filter panel on the left, 2-up card grid on the right. */
export function MechanicsLibraryPage({ mechanics, contextOptions, playerOptions }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [contexts, setContexts] = useState([]);
  const [users, setUsers] = useState([]);

  const toggle = (list, setList, value) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  const pickCategory = (key) => setCategory((c) => (c === key ? "all" : key));

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mechanics.filter((m) => {
      if (q && !(m.name.toLowerCase().includes(q) || m.definition.toLowerCase().includes(q))) return false;
      if (category !== "all" && !catsOf(m).includes(category)) return false;
      if (contexts.length && !(m.contextTags || []).some((t) => contexts.includes(t))) return false;
      if (users.length && !(m.players || []).some((u) => users.includes(u))) return false;
      return true;
    });
  }, [mechanics, query, category, contexts, users]);

  const active = query || category !== "all" || contexts.length || users.length;
  const clearAll = () => { setQuery(""); setCategory("all"); setContexts([]); setUsers([]); };

  return (
    <main id="main">
      <section className="band--tight lib-head">
        <div className="container">
          <div className="eyebrow lib-head__eyebrow">The library</div>
          <h1>Mechanics library</h1>
          <p>The building blocks behind the apps and games people keep coming back to. Each mechanic comes with its psychology, the players it fits, and real examples from the library.</p>
        </div>
      </section>

      <div className="container">
        <div className="lib-layout">
          <aside className="lib-filters">
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
          </aside>

          <section aria-label="Mechanics">
            <div className="lib-resultbar">
              <span className="lib-resultbar__count"><b>{results.length}</b> of {mechanics.length} mechanics</span>
              {active ? (
                <button type="button" className="filters__clear" onClick={clearAll}>Reset filters</button>
              ) : (
                <span className="lib-resultbar__hint">Updated weekly</span>
              )}
            </div>

            {results.length ? (
              <div className="lib-grid">
                {results.map((m) => <MechanicLibCard key={m.id || m.n} m={m} />)}
              </div>
            ) : (
              <div className="lib-empty">No mechanics match those filters. Try removing one.</div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
