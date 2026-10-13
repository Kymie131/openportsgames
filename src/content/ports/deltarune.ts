import type { Port } from "@/lib/ports/schema";

export const Deltarune: Port = {
  schema: "port",
  id: "deltarune",
  title: "Deltarune",
  game: "Deltarune",
  developers: ["TeamBlossomDevs"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/TeamBlossomDevs/DeltaruneDecomp_beta"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
