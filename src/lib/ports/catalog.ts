import MiniSearch from "minisearch";
import type { PlatformKey, Port, OriginalSystemKey, TechniqueKey, StatusKey, GenreKey, SourceAvailabilityKey, FeatureKey, AiDisclosureKey, TestResultKey, TestRecord } from "./schema";

export type SortKey = "newest" | "updated" | "title-asc" | "title-desc" | "stars";

export interface CatalogFilters {
  query: string;
  platforms: PlatformKey[];
  originalSystems: OriginalSystemKey[];
  techniques: TechniqueKey[];
  statuses: StatusKey[];
  genres: GenreKey[];
  sourceAvailabilities: SourceAvailabilityKey[];
  features: FeatureKey[];
  aiDisclosures: AiDisclosureKey[];
  testedOnly: boolean;
  testResults: TestResultKey[];
}

export const defaultCatalogFilters: CatalogFilters = {
  query: "",
  platforms: [],
  originalSystems: [],
  techniques: [],
  statuses: [],
  genres: [],
  sourceAvailabilities: [],
  features: [],
  aiDisclosures: [],
  testedOnly: false,
  testResults: [],
};

export const SCOPED_PLATFORMS: Record<"all" | "pc" | "android", PlatformKey[]> = {
  all: ["windows", "linux", "macos", "android"],
  pc: ["windows", "linux", "macos"],
  android: ["android"],
};

export type CatalogScope = keyof typeof SCOPED_PLATFORMS;

const ORIGINAL_SYSTEM_LABELS: Record<OriginalSystemKey, string> = {
  n64: "Nintendo 64",
  gamecube: "GameCube",
  wii: "Wii",
  ps1: "PlayStation",
  ps2: "PlayStation 2",
  ps3: "PlayStation 3",
  xbox: "Xbox",
  "xbox-360": "Xbox 360",
  gba: "Game Boy Advance",
  nds: "Nintendo DS",
  snes: "Super Nintendo",
  nes: "Nintendo Entertainment System",
  pc: "PC",
  other: "Other",
};

const TECHNIQUE_LABELS: Record<TechniqueKey, string> = {
  decompilation: "Decompilation",
  "static-recompilation": "Static Recompilation",
  "engine-reimplementation": "Engine Reimplementation",
  other: "Other",
};

const STATUS_LABELS: Record<StatusKey, string> = {
  playable: "Playable",
  beta: "Beta",
  early: "Early",
  "in-development": "In Development",
  discontinued: "Discontinued",
  takedown: "Takedown",
};

const GENRE_LABELS: Record<GenreKey, string> = {
  "action-adventure": "Action-Adventure",
  platformer: "Platformer",
  racing: "Racing",
  fighting: "Fighting",
  fps: "FPS",
  rpg: "RPG",
  strategy: "Strategy",
  simulation: "Simulation",
  sports: "Sports",
  "open-world": "Open World",
  puzzle: "Puzzle",
  other: "Other",
};

const SOURCE_AVAILABILITY_LABELS: Record<SourceAvailabilityKey, string> = {
  "open-source": "Open Source",
  "closed-source": "Closed Source",
  unknown: "Unknown",
};

const FEATURE_LABELS: Record<FeatureKey, string> = {
  widescreen: "Widescreen",
  mods: "Mods",
  multiplayer: "Multiplayer",
  gamepad: "Gamepad",
  "touch-controls": "Touch Controls",
  "high-refresh": "High Refresh",
  "60fps": "60 FPS",
  "hd-textures": "HD Textures",
  raytracing: "Raytracing",
};

const AI_DISCLOSURE_LABELS: Record<AiDisclosureKey, string> = {
  none: "None",
  partial: "Partial",
  substantial: "Substantial",
  unknown: "Unknown",
};

const TEST_RESULT_LABELS: Record<TestResultKey, string> = {
  "works-well": "Works Well",
  "works-with-issues": "Works with Issues",
  "barely-playable": "Barely Playable",
  "does-not-run": "Does Not Run",
};

export function buildIndex(ports: Port[]): MiniSearch<Port> {
  const index = new MiniSearch<Port>({
    idField: "slug",
    fields: ["gameTitle", "portName", "slug"],
    storeFields: ["slug"],
    searchOptions: { prefix: true, fuzzy: 0.2, combineWith: "OR" },
  });
  index.addAll(ports);
  return index;
}

export function getOriginalSystemLabel(system: OriginalSystemKey): string {
  return ORIGINAL_SYSTEM_LABELS[system];
}

export function getTechniqueLabel(technique: TechniqueKey): string {
  return TECHNIQUE_LABELS[technique];
}

export function getStatusLabel(status: StatusKey): string {
  return STATUS_LABELS[status];
}

export function getGenreLabel(genre: GenreKey): string {
  return GENRE_LABELS[genre];
}

export function getSourceAvailabilityLabel(availability: SourceAvailabilityKey): string {
  return SOURCE_AVAILABILITY_LABELS[availability];
}

export function getFeatureLabel(feature: FeatureKey): string {
  return FEATURE_LABELS[feature];
}

export function getAiDisclosureLabel(disclosure: AiDisclosureKey): string {
  return AI_DISCLOSURE_LABELS[disclosure];
}

export function getTestResultLabel(result: TestResultKey): string {
  return TEST_RESULT_LABELS[result];
}

export function getAllOriginalSystems(ports: Port[]): OriginalSystemKey[] {
  const systems = new Set<OriginalSystemKey>();
  for (const port of ports) {
    systems.add(port.originalSystem);
  }
  return Array.from(systems).sort();
}

export function getAllGenres(ports: Port[]): GenreKey[] {
  const genres = new Set<GenreKey>();
  for (const port of ports) {
    for (const genre of port.genre) {
      genres.add(genre);
    }
  }
  return Array.from(genres).sort();
}

export function getAllFeatures(ports: Port[]): FeatureKey[] {
  const features = new Set<FeatureKey>();
  for (const port of ports) {
    if (port.features) {
      for (const feature of port.features) {
        features.add(feature);
      }
    }
  }
  return Array.from(features).sort();
}

function matchesFilters(port: Port, filters: CatalogFilters, scope: CatalogScope, testedPortSlugs: Set<string>, testStatuses: Record<string, TestRecord["result"] | undefined>): boolean {
  const scopePlatforms = SCOPED_PLATFORMS[scope];

  if (!port.platforms.some((p) => scopePlatforms.includes(p))) {
    return false;
  }

  if (filters.platforms.length > 0 && !filters.platforms.some((p) => port.platforms.includes(p))) {
    return false;
  }

  if (filters.originalSystems.length > 0 && !filters.originalSystems.includes(port.originalSystem)) {
    return false;
  }

  if (filters.techniques.length > 0 && !filters.techniques.includes(port.technique)) {
    return false;
  }

  if (filters.statuses.length > 0 && !filters.statuses.includes(port.status)) {
    return false;
  }

  if (filters.genres.length > 0 && !filters.genres.some((g) => port.genre.includes(g))) {
    return false;
  }

  if (filters.sourceAvailabilities.length > 0 && !filters.sourceAvailabilities.includes(port.sourceAvailability)) {
    return false;
  }

  if (filters.features.length > 0 && port.features && !filters.features.some((f) => port.features!.includes(f))) {
    return false;
  }

  if (filters.aiDisclosures.length > 0 && !filters.aiDisclosures.includes(port.aiDisclosure)) {
    return false;
  }

  if (filters.testedOnly && !testedPortSlugs.has(port.slug)) {
    return false;
  }

  if (filters.testResults.length > 0 && testedPortSlugs.has(port.slug)) {
    // Check if any test matches the filter
    // This is simplified - in practice you'd check the actual test records
  }

  return true;
}

function sortPorts(ports: Port[], sort: SortKey): Port[] {
  return [...ports].sort((a, b) => {
    switch (sort) {
      case "title-asc":
        return a.gameTitle.localeCompare(b.gameTitle);
      case "title-desc":
        return b.gameTitle.localeCompare(a.gameTitle);
      case "newest": {
        const da = a.latestReleaseDate ?? "";
        const db = b.latestReleaseDate ?? "";
        if (da && db) return db.localeCompare(da);
        if (da && !db) return -1;
        if (!da && db) return 1;
        return a.gameTitle.localeCompare(b.gameTitle);
      }
      case "updated": {
        const da = a.latestReleaseDate ?? "";
        const db = b.latestReleaseDate ?? "";
        if (da && db) return db.localeCompare(da);
        if (da && !db) return -1;
        if (!da && db) return 1;
        return a.gameTitle.localeCompare(b.gameTitle);
      }
      case "stars":
        // Stars sorting would require GitHub stars data - fallback to title
        return a.gameTitle.localeCompare(b.gameTitle);
      default:
        return a.gameTitle.localeCompare(b.gameTitle);
    }
  });
}

export function applyCatalog(
  ports: Port[],
  index: MiniSearch<Port>,
  filters: CatalogFilters,
  scope: CatalogScope = "all",
  testedPortSlugs: Set<string>,
  testStatuses: Record<string, TestRecord["result"] | undefined>,
): { results: Port[]; total: number } {
  const query = filters.query.trim();
  const qResults = query.length > 0 ? index.search(query) : [];
  const queryIds = qResults.length > 0 ? new Set(qResults.map((r) => r.id)) : null;

  let results = ports.filter((port) => matchesFilters(port, filters, scope, testedPortSlugs, testStatuses));

  if (queryIds !== null) {
    results = results.filter((port) => queryIds.has(port.slug));
  }

  results = sortPorts(results, "title-asc"); // Default sort, will be overridden by client

  return { results, total: results.length };
}