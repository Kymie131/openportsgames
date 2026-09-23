import { z } from "zod";

export const platformKeys = ["windows", "linux", "macos", "android"] as const;
export type PlatformKey = (typeof platformKeys)[number];
export const portTypes = [
  "decompilation",
  "recompilation",
  "reimplementation",
  "source-port",
] as const;
export const portStatuses = ["stable", "beta", "alpha", "takedown"] as const;
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
] as const;
export type Genre = (typeof genres)[number];

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "expected an ISO date (YYYY-MM-DD)");

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
  title: z.string().min(3).max(80),
  game: z.string().min(2).max(80),
  developers: z.array(z.string().min(2).max(40)).min(1).max(6),
  publisher: z.string().min(2).max(80),
  originalYear: z.number().int().min(1970).max(2099),
  genre: z.enum(genres),
  openSource: z.boolean(),
  portType: z.enum(portTypes),
  platforms: z.array(z.enum(platformKeys)).min(1),
  status: z.union([z.enum(["stable", "beta", "alpha"]), z.literal("takedown")]),
  release: z.object({
    version: versionString.nullable(),
    date: isoDate.nullable(),
  }),
  sources: z.array(httpsUrl).min(1),
  website: httpsUrl.optional(),
  docs: httpsUrl.optional(),
  discord: httpsUrl.optional(),
  license: z.object({
    spdx: z.string().regex(LICENSE_SPDX),
    note: z.string().max(120).optional(),
  }),
  aiDisclosure: z.boolean(),
  verified: z.boolean(),
  verifiedAt: isoDate.optional(),
  notes: z.string().max(1000).optional(),
  originalSystem: z.string().min(2).max(80).optional(),
  features: z.array(z.string().min(3).max(120)).max(20).optional(),
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
      }),
    )
    .max(12)
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
  title: string;
  game: string;
  developers: string[];
  publisher: string;
  originalYear: number;
  genre: Genre;
  openSource: boolean;
  portType: (typeof portTypes)[number];
  platforms: (typeof platformKeys)[number][];
  release: { version: string | null; date: string | null };
  sources: string[];
  website?: string;
  docs?: string;
  discord?: string;
  license: { spdx: string; note?: string };
  aiDisclosure: boolean;
  verified: boolean;
  verifiedAt?: string;
  notes?: string;
  originalSystem?: string;
  features?: string[];
  requirements?: { minimum?: string; recommended?: string };
  screenshots?: { src: string; alt: string; credit: string }[];
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