import type { Port } from "@/lib/ports/schema";

export const NhlLegacyEdition: Port = {
  schema: "port",
  id: "nhl-legacy-edition",
  title: "NHL: Legacy Edition",
  game: "NHL: Legacy Edition",
  developers: ["puckhead73"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/puckhead73/nhl-legacy-recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
