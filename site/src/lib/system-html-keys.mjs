/**
 * Parsing helpers for the CONNECTIONS and POSITIONS object literals embedded
 * in the repo root's system.html, plus the check that guards them against a
 * repeated app-id key — a literal silently keeps only the LAST copy of a
 * repeated key, same as a browser evaluating it, so a stale leftover entry
 * from an earlier draft can silently win over the real one and drop content
 * undetected through a build and a push (this is what happened with a "cleo"
 * entry, spec review 11 Sep 2026; and again with bareword-keyed "picsart",
 * "calm" and "uptime" entries, found 16 Sep and 28 Sep 2026 — see
 * convert-content.mjs's call site for the fuller history).
 *
 * Pulled out of convert-content.mjs so the scanner can be unit tested
 * directly against small synthetic literals, without needing to run the
 * full conversion pipeline against the real repo content. That gap is why
 * a bug that left topLevelKeys() finding almost no keys at all, quoted or
 * bareword, went unnoticed for twelve days: the only thing exercising it
 * was a real build against real content, and a check that never fires reads
 * identically to a check that passes. See system-html-keys.test.mjs.
 */

export function extractObjectLiteral(systemHtmlSrc, name) {
  const i = systemHtmlSrc.indexOf("const " + name);
  if (i < 0) throw new Error(name + " not found in system.html");
  const start = systemHtmlSrc.indexOf("{", i);
  let depth = 0,
    j = start;
  for (; j < systemHtmlSrc.length; j++) {
    if (systemHtmlSrc[j] === "{") depth++;
    else if (systemHtmlSrc[j] === "}") {
      depth--;
      if (depth === 0) break;
    }
  }
  return systemHtmlSrc.slice(start, j + 1);
}

// Scans a "{ "key": ... }" object literal's source text (as extracted above)
// for its immediate (depth-1) keys, quoted or bareword, string-aware so a
// brace or bracket inside a description's prose can't miscount nesting
// depth. Returns every key found, duplicates included, so the caller can
// decide what a repeat means.
//
// The bareword branch exists because a bareword key (picsart: [...], no
// quotes) is exactly as valid a JS object key as a quoted one, and exactly
// as capable of silently shadowing an earlier entry, "last copy wins" per
// this same file's own comments on this hazard. It was also, until 16 Sep
// 2026, invisible to this function: PicsArt's v4.1 migration found a
// bareword "picsart" CONNECTIONS entry sitting well after an already-quoted
// "picsart" entry, silently winning over it on every build, undetected
// because the two spellings were never recognized as the same key. Scanned
// the same way as the quoted branch: only at depth 1, and only counted as a
// key if a colon (skipping whitespace) follows the identifier, so app-id
// keys are caught but a per-connection field like `from:` or `title:` two
// levels deeper is not.
//
// Two more bareword duplicates (calm, uptime) turned up on a sweep on 28
// Sep 2026 — and this function had been silently failing to find almost any
// key, quoted or bareword, since the 16 Sep fix above. It was treating a
// bare apostrophe as a string delimiter exactly like `"` and `` ` ``, on the
// assumption that it would only ever open and close around a real string.
// It doesn't: every comment in this file is full of possessives and
// contractions ("doordash's", "wispr-flow's"), and this scanner has no
// concept of `//` comments at all, so it read the apostrophe in the very
// first comment as opening a string, hunted for the next apostrophe
// (anywhere, including deep inside real prose) as the close, and stayed
// desynced for the rest of the file from there — occasionally landing back
// on a depth-1 position by coincidence and logging a stray prose word
// ("one", "all", "simultaneously") as a bareword key. A live check of every
// entry confirmed neither CONNECTIONS nor POSITIONS ever uses a real
// single-quoted string: the only appearances of `'` are contractions,
// possessives, and nested quotation marks inside double-quoted strings, so
// the fix is to stop treating `'` as a delimiter at all and to skip `//`
// comments outright, rather than trying to make apostrophe-matching
// comment-aware.
export function topLevelKeys(objectLiteralSrc) {
  const keys = [];
  let depth = 0;
  for (let i = 0; i < objectLiteralSrc.length; i++) {
    const c = objectLiteralSrc[i];
    if (c === "/" && objectLiteralSrc[i + 1] === "/") {
      const nl = objectLiteralSrc.indexOf("\n", i);
      i = nl < 0 ? objectLiteralSrc.length : nl;
      continue;
    }
    if (c === '"' || c === "`") {
      const quote = c;
      let j = i + 1;
      while (j < objectLiteralSrc.length && objectLiteralSrc[j] !== quote) {
        if (objectLiteralSrc[j] === "\\") j++;
        j++;
      }
      if (depth === 1) {
        let k = j + 1;
        while (k < objectLiteralSrc.length && /\s/.test(objectLiteralSrc[k])) k++;
        if (objectLiteralSrc[k] === ":") keys.push(objectLiteralSrc.slice(i + 1, j));
      }
      i = j;
      continue;
    }
    if (c === "{" || c === "[") {
      depth++;
      continue;
    }
    if (c === "}" || c === "]") {
      depth--;
      continue;
    }
    if (depth === 1 && /[A-Za-z_$]/.test(c)) {
      let j = i;
      while (j < objectLiteralSrc.length && /[A-Za-z0-9_$]/.test(objectLiteralSrc[j])) j++;
      let k = j;
      while (k < objectLiteralSrc.length && /\s/.test(objectLiteralSrc[k])) k++;
      if (objectLiteralSrc[k] === ":") keys.push(objectLiteralSrc.slice(i, j));
      i = j - 1;
      continue;
    }
  }
  return keys;
}

export function findDuplicateKeys(objectLiteralSrc) {
  const counts = new Map();
  for (const k of topLevelKeys(objectLiteralSrc)) counts.set(k, (counts.get(k) ?? 0) + 1);
  return [...counts.entries()].filter(([, n]) => n > 1);
}

// Fails the build outright on a repeated app-id key in a system.html
// literal — the literal itself would silently keep only the last copy. This
// used to only warn (spec review, 11 Sep 2026) because turning up the check
// surfaced six apps (ladder, fiton, freeletics, liftoff, gymverse,
// clash-of-clans) already carrying two different, non-identical connection
// sets each — not a leftover accident like Cleo's, but two genuinely
// different authored sets where the second silently won and the first had
// been invisible on the live site all along. Resolving those meant deciding
// how to merge two real, differing accounts of the same app, an editorial
// call outside that fix's scope, so failing the build then would have
// blocked on content the check didn't itself know how to reconcile.
//
// All six are down to one copy each as of a sweep on 28 Sep 2026 (the last
// four — ladder, fiton, freeletics, liftoff — were already resolved by the
// time of that sweep, evidently during later v4.1 migrations, without this
// comment being updated to say so). With nothing pre-existing left to
// break, this promotes to a thrown error, so a *new* accidental duplicate,
// bareword or quoted, fails the build immediately instead of silently
// shipping — see system-html-keys.test.mjs for the regression test proving
// this actually fires.
export function assertNoDuplicateKeys(name, objectLiteralSrc) {
  const dupes = findDuplicateKeys(objectLiteralSrc);
  if (dupes.length) {
    const list = dupes.map(([k, n]) => `"${k}" (${n} times)`).join(", ");
    throw new Error(
      `DUPLICATE APP-ID KEY: system.html ${name}\n${list}\nOnly the last copy is used; the rest are silently dropped. Remove or merge the extras.`
    );
  }
}
