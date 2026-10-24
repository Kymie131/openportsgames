import { z } from "zod";

export const platformKeys = [
  "windows",
  "linux",
  "macos",
  "android",
  "web",
  "ios",
  "switch",
  "psp",
  "psvita",
  "ds",
  "3ds",
  "wii",
  "wiiu",
  "ps2",
  "ps3",
  "ps4",
  "ps5",
  "ps1",
  "xbox",
  "xbox360",
  "nes",
  "snes",
  "n64",
  "gb",
  "gbc",
  "gba",
  "genesis",
  "saturn",
  "dreamcast",
  "arcade",
] as const;
export type PlatformKey = (typeof platformKeys)[number];
export const portTypes = [
  "decompilation",
  "recompilation",
  "reimplementation",
  "source-port",
  "runtime-port",
] as const;
export const portStatuses = ["stable", "beta", "alpha", "takedown"] as const;
export const portKinds = ["game", "system", "tool"] as const;
export type PortKind = (typeof portKinds)[number];
/**
 * What the entry is, from the point of view of the console it belongs to:
 * a `port` (native port, recompilation or decompilation of an existing game,
 * the default), `homebrew` (a game written for the console) or `plugin`
 * (a utility or plugin that extends the console, e.g. a PSP PRX).
 */
export const portCategories = ["port", "homebrew", "plugin"] as const;
export type PortCategory = (typeof portCategories)[number];
export const genres = [
  "platformer",
  "action-adventure",
  "rpg",
  "racing",
  "strategy",
  "shooter",
  "fighting",
  "sports",
  "simulation",
  "open-world",
  "puzzle",
  "music",
] as const;
export type Genre = (typeof genres)[number];

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "expected an ISO date (YYYY-MM-DD)");

export const versionString = z
  .string()
  .regex(
    /^\d+\.\d+(\.\d+)?([.-][0-9A-Za-z]+)*$/,
    "expected a semantic version (X.Y or X.Y.Z with optional suffix)",
  );

const httpsUrl = z.string().url().startsWith("https:", "expected an https URL");

const LICENSE_SPDX = /^[A-Za-z0-9][A-Za-z0-9.+-]*$/;

const normalPort = z.object({
  schema: z.literal("port"),
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id must be a lowercase kebab slug"),
  kind: z.enum(portKinds).default("game"),
  category: z.enum(portCategories).optional(),
  title: z.string().min(3).max(80),
  game: z.string().min(2).max(80),
  developers: z.array(z.string().min(2).max(40)).min(1).max(6),
  publisher: z.string().min(2).max(80),
  originalYear: z.number().int().min(1970).max(2099),
  genre: z.enum(genres),
  openSource: z.boolean(),
  originalGameLicense: z.enum(["proprietary", "freeware", "open"]).optional(),
  portType: z.enum(portTypes),
  platforms: z.array(z.enum(platformKeys)).min(1),
  status: z.union([z.enum(["stable", "beta", "alpha"]), z.literal("takedown")]),
  release: z.object({
    version: versionString.nullable(),
    date: isoDate.nullable(),
  }),
  sources: z.array(httpsUrl),
  website: httpsUrl.optional(),
  docs: httpsUrl.optional(),
  discord: httpsUrl.optional(),
  license: z.object({
    spdx: z.string().regex(LICENSE_SPDX),
    note: z.string().max(120).optional(),
  }),
  verified: z.boolean(),
  verifiedAt: isoDate.optional(),
  /** Date the entry was added to this catalog (not the game's release date). */
  addedAt: isoDate.optional(),
  /** Work in progress: the project is still being decompiled/built and there is no playable release yet. */
  wip: z.boolean().optional(),
  noOriginalGameRequired: z.boolean().optional(),
  /** Bilingual synopsis of the original game (not the port), from Wikidata/Wikipedia. */
  summary: z.string().max(600).optional(),
  summaryEs: z.string().max(600).optional(),
  notes: z.string().max(1000).optional(),
  notesEs: z.string().max(1000).optional(),
  originalSystems: z.array(z.string().min(2).max(80)).optional(),
  /** Ids of related ports (variants of the same game, e.g. PC and Android builds). */
  related: z.array(z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/)).max(20).optional(),
  /** Region of the original release this port targets, when regional variants exist. */
  region: z.string().min(2).max(40).optional(),
  features: z.array(z.string().min(3).max(120)).max(20).optional(),
  featuresEs: z.array(z.string().min(3).max(120)).max(20).optional(),
  aiDisclosure: z
    .object({
      source: httpsUrl,
      quote: z.string().min(3).max(200),
    })
    .optional(),
  sourceVerified: z.boolean().optional(),
  sourceIsIndex: z.boolean().optional(),
  sourceDead: z.boolean().optional(),
  /** Excludes the detail page from search indexes. Easy to drop per entry. */
  noindex: z.boolean().optional(),
  warning: z.string().min(3).max(400).optional(),
  warningEs: z.string().min(3).max(400).optional(),
  installGuide: z
    .object({
      title: z.string().min(2).max(80).optional(),
      steps: z.array(z.string().min(3).max(300)).min(1).max(20),
      stepsEs: z.array(z.string().min(3).max(300)).min(1).max(20).optional(),
    })
    .optional(),
  requirements: z
    .object({
      minimum: z.string().min(2).max(200).optional(),
      recommended: z.string().min(2).max(200).optional(),
    })
    .optional(),
  screenshots: z
    .array(
      z.object({
        src: httpsUrl,
        alt: z.string().min(2).max(120),
        credit: z.string().min(2).max(80),
        width: z.number().int().positive().optional(),
        height: z.number().int().positive().optional(),
      }),
    )
    .max(12)
    .optional(),
  cover: z
    .object({
      src: httpsUrl,
      alt: z.string().min(2).max(120),
      credit: z.string().min(2).max(80),
    })
    .optional(),
});

const takedownPort = z.object({
  schema: z.literal("port"),
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id must be a lowercase kebab slug"),
  title: z.string().min(3).max(80),
  status: z.literal("takedown"),
  rawUrl: httpsUrl,
});

export const portSchema = z.preprocess(
  (value) => {
    if (typeof value === "object" && value !== null && "status" in (value as object)) {
      const status = (value as { status: unknown }).status;
      if (status === "takedown") return { ...(value as object), status: "takedown" };
    }
    return value;
  },
  z.discriminatedUnion("status", [
    normalPort.extend({ status: z.literal("stable") }),
    normalPort.extend({ status: z.literal("beta") }),
    normalPort.extend({ status: z.literal("alpha") }),
    takedownPort,
  ]),
);

export const hardwareSchema = z.object({
  schema: z.literal("hardware"),
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id must be a lowercase kebab slug"),
  label: z.string().min(3).max(80),
  kind: z.enum(["pc", "android"]),
  specs: z.object({
    cpu: z.string().min(2).max(120),
    gpu: z.string().min(2).max(120),
    ram: z.string().min(2).max(40),
    storage: z.string().min(2).max(80).optional(),
    os: z.string().min(2).max(120),
    display: z.string().min(2).max(120).optional(),
  }),
  tester: z.string().regex(/^[a-zA-Z0-9-]+$/, "GitHub username"),
  updatedAt: isoDate,
});

export const testRecordSchema = z.object({
  schema: z.literal("test"),
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id must be a lowercase kebab slug"),
  portId: z.string(),
  testerId: z.string(),
  hardwareId: z.string(),
  date: isoDate,
  version: versionString,
  result: z.enum(["pass", "fail"]),
  notes: z.string().max(1000).optional(),
});

export type Port = {
  schema: "port";
  status: "stable" | "beta" | "alpha";
  id: string;
  /**
   * `game` (the default, omitted in most content files), `system` or `tool`.
   * The zod schema supplies the default, so a validated `Port` always has a
   * concrete value; use `portKind()` instead of reading it directly.
   */
  kind?: PortKind;
  /** `port` (default), `homebrew` or `plugin`; see `portCategory()`. */
  category?: PortCategory;
  title: string;
  game: string;
  developers: string[];
  publisher: string;
  originalYear: number;
  genre: Genre;
  openSource: boolean;
  originalGameLicense?: "proprietary" | "freeware" | "open";
  portType: (typeof portTypes)[number];
  platforms: (typeof platformKeys)[number][];
  release: { version: string | null; date: string | null };
  sources: string[];
  website?: string;
  docs?: string;
  discord?: string;
  license: { spdx: string; note?: string };
  verified: boolean;
  verifiedAt?: string;
  /** Date the entry was added to this catalog (not the game's release date). */
  addedAt?: string;
  /** Work in progress: still being decompiled/built, no playable download yet. */
  wip?: boolean;
  noOriginalGameRequired?: boolean;
  summary?: string;
  summaryEs?: string;
  notes?: string;
  notesEs?: string;
  originalSystems?: string[];
  /** Ids of related ports (variants of the same game). */
  related?: string[];
  /** Region of the original release this port targets, when regional variants exist. */
  region?: string;
  features?: string[];
  featuresEs?: string[];
  aiDisclosure?: { source: string; quote: string };
  sourceVerified?: boolean;
  sourceIsIndex?: boolean;
  sourceDead?: boolean;
  noindex?: boolean;
  warning?: string;
  warningEs?: string;
  installGuide?: {
    title?: string;
    steps: string[];
    stepsEs?: string[];
  };
  requirements?: { minimum?: string; recommended?: string };
  screenshots?: {
    src: string;
    alt: string;
    credit: string;
    width?: number;
    height?: number;
  }[];
  cover?: { src: string; alt: string; credit: string };
};

export type TakedownPort = {
  schema: "port";
  status: "takedown";
  id: string;
  title: string;
  rawUrl: string;
};

export type HardwareProfile = z.infer<typeof hardwareSchema>;
export type TestRecord = z.infer<typeof testRecordSchema>;

/** Resolves a port's kind, applying the schema's `game` default. */
export function portKind(port: Pick<Port, "kind">): PortKind {
  return port.kind ?? "game";
}

/** Resolves what the entry is for its console, applying the `port` default. */
export function portCategory(port: Pick<Port, "category">): PortCategory {
  return port.category ?? "port";
}