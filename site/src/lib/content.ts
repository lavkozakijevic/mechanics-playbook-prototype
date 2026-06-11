import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Report-only content must never appear in the built output (migration brief).
 * Every page queries through these helpers; nothing reads the raw collections.
 */
export async function publishedApps(): Promise<CollectionEntry<"apps">[]> {
  return (await getCollection("apps")).filter((a) => a.data.visibility !== "report-only");
}

export async function publishedMechanics(): Promise<CollectionEntry<"mechanics">[]> {
  const all = await getCollection("mechanics");
  return all
    .filter((m) => m.data.visibility !== "report-only")
    .sort((a, b) => a.data.n.localeCompare(b.data.n));
}

/** Apps that use a mechanic — computed, never stored twice. */
export async function appsUsingMechanic(mechanicId: string) {
  const apps = await publishedApps();
  return apps.filter((a) => a.data.mechanics.some((m) => m.id === mechanicId));
}

export const CAT_LABEL: Record<string, string> = {
  retention: "Retention",
  monetization: "Monetization",
  social: "Social",
};

const PLAYER_COLOR: Record<string, string> = {
  achiever: "var(--cat-retention)",
  explorer: "var(--cat-monetization)",
  socializer: "var(--cat-social)",
  competitor: "var(--red-600)",
};

export function playerChip(p: string) {
  return { label: p.charAt(0).toUpperCase() + p.slice(1), color: PLAYER_COLOR[p] ?? "var(--ink-500)" };
}

export function titleCase(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
export function numberWord(n: number): string {
  return WORDS[n] ?? String(n);
}

/** Latest content date across apps — powers "last updated" in chrome. */
export async function lastUpdated(): Promise<string | null> {
  const apps = await publishedApps();
  const dates = apps.map((a) => a.data.lastUpdated).filter(Boolean) as string[];
  return dates.sort().at(-1) ?? null;
}
