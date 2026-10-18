import { consoleDefs, getConsoleDef, type ConsoleDef } from "@/content/consoles";
import { getPorts, originalSystemsOf } from "@/lib/ports";
import type { Port } from "@/lib/ports/schema";

/**
 * `originalSystem` labels that belong to each console. A port whose original
 * system is one of these is "a game from that console" even when the build runs
 * on PC or Android, which is how most community recomps and decomps work.
 */
export const SYSTEM_LABELS_BY_CONSOLE: Record<string, string[]> = {
  "playstation-2": ["PlayStation 2"],
  "playstation-portable": ["PlayStation Portable"],
  "nintendo-ds": ["Nintendo DS"],
  "playstation-3": ["PlayStation 3"],
  wii: ["Wii"],
  "nintendo-3ds": ["Nintendo 3DS"],
  "playstation-vita": ["PlayStation Vita"],
  "wii-u": ["Wii U"],
  "playstation-4": ["PlayStation 4"],
  switch: ["Nintendo Switch", "Switch"],
};

/** One host that publishes projects for a console, GitHub or not. */
export interface CommunitySource {
  host: string;
  /** Every URL seen on that host, in catalog order. */
  urls: string[];
  /** Ports that list that host among their sources. */
  portIds: string[];
  github: boolean;
}

export interface ConsoleHub {
  def: ConsoleDef;
  /** Builds whose target platform is this console. */
  running: Port[];
  /** Ports of games that originally shipped on this console. */
  games: Port[];
  /** Every publishing host behind those entries. */
  sources: CommunitySource[];
}

function byTitle(a: Port, b: Port): number {
  return a.title.localeCompare(b.title);
}

function collectSources(ports: Port[]): CommunitySource[] {
  const byHost = new Map<string, CommunitySource>();
  for (const port of ports) {
    for (const url of port.sources) {
      let host: string;
      try {
        host = new URL(url).host.replace(/^www\./, "");
      } catch {
        continue;
      }
      const entry = byHost.get(host) ?? {
        host,
        urls: [],
        portIds: [],
        github: host === "github.com",
      };
      if (!entry.urls.includes(url)) entry.urls.push(url);
      if (!entry.portIds.includes(port.id)) entry.portIds.push(port.id);
      byHost.set(host, entry);
    }
  }
  return [...byHost.values()].sort(
    (a, b) => b.portIds.length - a.portIds.length || a.host.localeCompare(b.host),
  );
}

export function getConsoleHub(slug: string): ConsoleHub | undefined {
  const def = getConsoleDef(slug);
  if (!def) return undefined;

  const ports = getPorts();
  const labels = new Set(SYSTEM_LABELS_BY_CONSOLE[def.slug] ?? []);

  const running = ports
    .filter((port) => port.platforms.includes(def.platform))
    .sort(byTitle);

  const runningIds = new Set(running.map((port) => port.id));
  const games = ports
    .filter((port) => !runningIds.has(port.id))
    .filter((port) => originalSystemsOf(port.id).some((system) => labels.has(system)))
    .sort(byTitle);

  return { def, running, games, sources: collectSources([...running, ...games]) };
}

export function getAllConsoleHubs(): ConsoleHub[] {
  return consoleDefs.flatMap((def) => {
    const hub = getConsoleHub(def.slug);
    return hub ? [hub] : [];
  });
}
