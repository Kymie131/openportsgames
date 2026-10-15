import type { Port } from "@/lib/ports/schema";

export const SuperMarioLand3WarioLand: Port = {
  schema: "port",
  id: "super-mario-land-3-wario-land",
  title: "Super Mario Land 3: Wario Land",
  game: "Super Mario Land 3: Wario Land",
  developers: ["omegakatana92"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/Super-Mario-Land-3-Wario-Land-Recomp-"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b8/Wario_Land_Super_Mario_Land_3_cover.png",
    alt: "Super Mario Land 3: Wario Land (box art)",
    credit: "Wikipedia",
  },
  notes:
    "A fan-made recompilation of Super Mario Land 3: Wario Land for modern systems. Requires the user to provide their own legally obtained ROM. No copyrighted ROM or Nintendo assets are included. Supports fullscreen with Alt+Enter. Nintendo retains all rights. Switch 2 support may be considered where possible.",
  notesEs:
    "Recompilación hecha por fans de Super Mario Land 3: Wario Land para sistemas modernos. Requiere que el usuario aporte su propia ROM obtenida legalmente. No incluye ROM ni recursos de Nintendo.",
};
