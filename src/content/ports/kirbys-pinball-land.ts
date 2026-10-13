import type { Port } from "@/lib/ports/schema";

export const KirbysPinballLand: Port = {
  schema: "port",
  id: "kirbys-pinball-land",
  title: "Kirby's Pinball Land",
  game: "Kirby's Pinball Land",
  developers: ["omegakatana92"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/Kirby-Pinball-Land-Recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
