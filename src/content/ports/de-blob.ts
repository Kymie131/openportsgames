import type { Port } from "@/lib/ports/schema";

export const DeBlob: Port = {
  schema: "port",
  id: "de-blob",
  title: "De Blob",
  game: "de Blob",
  developers: ["AdventureT"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/AdventureT/OpenToshi"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
