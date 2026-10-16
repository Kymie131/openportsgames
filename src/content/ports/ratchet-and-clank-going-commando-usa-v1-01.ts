import type { Port } from "@/lib/ports/schema";

export const RatchetAndClankGoingCommandoUsaV101: Port = {
  schema: "port",
  id: "ratchet-and-clank-going-commando-usa-v1-01",
  title: "Ratchet & Clank: Going Commando (USA v1.01)",
  game: "Ratchet & Clank: Going Commando (USA v1.01)",
  developers: ["OpenRAC"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenRAC/rac2-gc-decomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes:
    "Going Commando USA v1.01: byte-exact reconstruction tools and native-port research. No game assets.",
  notesEs:
    "Going Commando USA v1.01: herramientas de reconstrucción byte a byte e investigación de port nativo. Sin recursos del juego.",
};
