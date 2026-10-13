import type { Port } from "@/lib/ports/schema";

export const OpenAnnihilation: Port = {
  schema: "port",
  id: "open-annihilation",
  title: "Open Annihilation",
  game: "Open Annihilation",
  developers: ["open-annihilation"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/open-annihilation/open-annihilation"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
