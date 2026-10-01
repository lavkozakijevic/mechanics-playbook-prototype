/**
 * What a visitor without access may be given about an app: the same fields the
 * old locked pages showed (the name, category, icon, as-observed month, version
 * and the public summary and teaser) and nothing else. The gate view is built
 * from THIS object, never from the full app, so nothing protected can reach a
 * template, an island prop or the HTML even by mistake: the protected fields
 * are not in the object.
 *
 * Protected: observations, systemView, mechanicWriteups (apart from the headline
 * the mechanic pages show), sectionLeadIns, sectionCards, proposedTags, system,
 * the hero image and every screenshot.
 */
export const PUBLIC_APP_FIELDS = Object.freeze([
  "id", "name", "category", "type", "visibility", "summary", "teaser", "icon", "asObserved", "appVersion", "contentFormat",
]);

export function publicAppFields(app) {
  const out = {};
  for (const key of PUBLIC_APP_FIELDS) if (key in app) out[key] = app[key];
  return out;
}

/** Fields of an app that are protected, for tests and the leak scan. */
export const PROTECTED_APP_FIELDS = Object.freeze([
  "observations", "systemView", "mechanicWriteups", "sectionLeadIns", "sectionCards", "proposedTags", "system", "heroImage", "mechanics",
]);

/** Free apps: declared public (strava and the rotating free slot). */
export const isFreeApp = (app) => app?.visibility === "public";

/**
 * Systems follow settings.freeSystemApps as well as the app's own visibility
 * (strava and the rotating app, the same two today).
 */
export function isFreeSystem(app, freeSystemIds) {
  return isFreeApp(app) || (Array.isArray(freeSystemIds) && freeSystemIds.includes(app?.id));
}

/** What the locked system page may show: names, never the system itself. */
export function systemGateFields({ appName, typeLabel, domain, tagline }) {
  return { appName, typeLabel, domain, tagline };
}
