import type { Port } from "@/lib/ports/schema";

export const rottexpr: Port = {
  schema: "port",
  id: "rottexpr",
  title: "rottexpr",
  game: "Rise of the Triad",
  developers: ["LTCHIPS"],
  publisher: "Apogee Software",
  originalYear: 1994,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.01", date: "2021-01-19" },
  sources: ["https://github.com/LTCHIPS/rottexpr"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  notes: "Experimental Rise of the Triad engine rewrite.",
};
