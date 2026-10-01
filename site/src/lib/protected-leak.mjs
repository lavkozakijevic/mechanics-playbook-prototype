/**
 * The leak scan's logic, kept pure so node --test can seed a leak and watch it
 * be found. scripts/check-protected-leak.mjs does the file reading.
 *
 * What it proves: text that belongs to an app that is NOT free (declared
 * subscriber) appears in no file the public can fetch (dist/client: every
 * prerendered page, script, JSON, sitemap and stylesheet) and no page for such
 * an app was built at all. It looks for distinctive text, not field names, so it
 * catches a leak however it got there: a page body, an island's props, an inline
 * script or a data file.
 */

// Fields of an app that are protected. mechanicWriteups' summary (the headline)
// and title are public by decision (the mechanic pages show them), as are
// system.tagline (the systems index) and the app's own summary and teaser.
export const PROTECTED_FIELDS = ["observations", "systemView", "mechanicWriteups", "sectionLeadIns", "sectionCards", "proposedTags", "system"];

// Analysis-process fields that are kept in the content files but deliberately not
// deployed at all (not in the content schema, so not in the Worker bundle). They
// must still be absent from everything public; they are just not expected in the
// server bundle, so they do not count towards its coverage.
export const NOT_DEPLOYED = ["proposedTags", ".rationale", ".alternativeConsidered"];
const isDeployedPath = (path) => !NOT_DEPLOYED.some((k) => (k.startsWith(".") ? path.includes(k) : path.startsWith(k)));
const PUBLIC_KEYS = new Set(["summary", "title", "tagline", "name", "id", "kebabId"]);

// A run of characters that no HTML or JSON escaping changes, so it is found
// verbatim wherever the text was put.
const SAFE_RUN = /[A-Za-z0-9 ,.;:()\-]{40,}/;
const NEEDLE_MAX = 80;

function walk(value, path, out, underPublicKey = false) {
  if (typeof value === "string") {
    if (!underPublicKey) out.push({ path, text: value });
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, `${path}[${i}]`, out, underPublicKey));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      // a public key at the top of a write-up or system is exempt, but only for
      // plain strings directly under it
      const exempt = PUBLIC_KEYS.has(k) && typeof v === "string";
      walk(v, `${path}.${k}`, out, underPublicKey || exempt);
    }
  }
}

/** Distinctive text from every protected field of one app. */
export function protectedTexts(app) {
  const out = [];
  for (const field of PROTECTED_FIELDS) if (field in app) walk(app[field], field, out);
  return out;
}

export function needleFor(text) {
  const m = SAFE_RUN.exec(text);
  return m ? m[0].slice(0, NEEDLE_MAX).trim() : null;
}

/**
 * @param apps          the apps that are not free (parsed content JSON)
 * @param publicCorpus  one string holding all text that is public on purpose
 *                      (free apps, mechanics, glossary, public cheatsheets, ...)
 * @returns needles: [{ needle, appId, path }], unique, none of which is also public text
 */
export function collectNeedles(apps, publicCorpus) {
  const seen = new Set();
  const needles = [];
  for (const app of apps) {
    for (const { path, text } of protectedTexts(app)) {
      const needle = needleFor(text);
      if (!needle || seen.has(needle)) continue;
      seen.add(needle);
      // Boilerplate that is also public text (a sentence shared with a free app)
      // would be a false alarm.
      if (publicCorpus.includes(needle)) continue;
      needles.push({ needle, appId: app.id, path, deployed: isDeployedPath(path) });
    }
  }
  return needles;
}

/**
 * @param files    Map of file path -> text, for everything the public can fetch
 * @returns leaks: [{ file, needle, appId, path }]  (one per file and needle)
 */
export function findLeaks(files, needles) {
  const leaks = [];
  for (const [file, text] of files) {
    for (const n of needles) {
      if (text.includes(n.needle)) leaks.push({ file, ...n });
    }
  }
  return leaks;
}

/** Pages that must not exist as files: one per non-free app's case study, sections and system. */
export function forbiddenPaths(apps) {
  const out = [];
  for (const app of apps) {
    out.push(`case-studies/${app.id}`, `systems/${app.id}`);
  }
  return out;
}

/**
 * Of the needles, how many are found in the server bundle. A scan that finds
 * nothing in the client is only meaningful if the same strings really are in the
 * server, so the script requires most of them to be.
 */
export function coverage(serverText, needles) {
  const expected = needles.filter((n) => n.deployed !== false);
  if (expected.length === 0) return 0;
  return expected.filter((n) => serverText.includes(n.needle)).length / expected.length;
}
