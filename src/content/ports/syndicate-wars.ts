import type { Port } from "@/lib/ports/schema";

export const SyndicateWars: Port = {
  schema: "port",
  id: "syndicate-wars",
  title: "Syndicate Wars",
  game: "Syndicate Wars",
  developers: ["swfans"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/swfans/syndwarsfx"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
