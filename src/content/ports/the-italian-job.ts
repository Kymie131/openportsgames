import type { Port } from "@/lib/ports/schema";

export const TheItalianJob: Port = {
  schema: "port",
  id: "the-italian-job",
  title: "The Italian Job",
  game: "The Italian Job",
  developers: ["dashr9230"],
  publisher: "Unknown",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dashr9230/Caper"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
