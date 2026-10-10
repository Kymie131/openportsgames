import type { Port } from "@/lib/ports/schema";

export const starfoxEnhanced: Port = {
  schema: "port",
  id: "starfox-enhanced",
  title: "Star Fox Enhanced",
  game: "Star Fox",
  developers: ["kandowontu"],
  publisher: "Nintendo",
  originalYear: 1993,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/kandowontu/starfox-enhanced"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Native C++/SDL3 port of the open-source UltraStarFox codebase, with high frame rates, widescreen and optional visual enhancements. It validates your own Star Fox ROM and runs on desktop and mobile.",
  notesEs:
    "Port nativo en C++/SDL3 del código abierto de UltraStarFox, con altas tasas de refresco, widescreen y mejoras visuales opcionales. Valida tu propia ROM de Star Fox y funciona en escritorio y móvil.",
};
