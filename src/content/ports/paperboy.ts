import type { Port } from "@/lib/ports/schema";

export const Paperboy: Port = {
  schema: "port",
  id: "paperboy",
  title: "Paperboy",
  game: "Paperboy",
  developers: ["marijnvdwerf"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/marijnvdwerf/paperboy-n64"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
};
