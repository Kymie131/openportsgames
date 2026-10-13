import type { Port } from "@/lib/ports/schema";

export const BlastCorps: Port = {
  schema: "port",
  id: "blast-corps",
  title: "Blast Corps",
  game: "Blast Corps",
  developers: ["SlaveOfIDO"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SlaveOfIDO/blastcorps"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/83/Blast_Corps_Coverart.png",
    alt: "Blast Corps (cover)",
    credit: "Wikipedia",
  },
};
