import type { Port } from "@/lib/ports/schema";

export const openreliant: Port = {
  schema: "port",
  id: "openreliant",
  title: "OpenReliant",
  game: "StarLancer",
  developers: ["OpenReliant"],
  publisher: "Microsoft",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.21.0", date: "2026-10-29" },
  sources: ["https://github.com/OpenReliant/openreliant"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "StarLancer is a space combat simulation developed by Digital Anvil and published by Microsoft in 2000. It follows a volunteer squadron fighting a war against the Coalition.",
  summaryEs:
    "StarLancer es una simulación de combate espacial desarrollada por Digital Anvil y publicada por Microsoft en 2000. Sigue a un escuadrón de voluntarios que lucha contra la Coalición.",
  cover: {
    src: "https://openportsgames.com/covers/generated/openreliant.svg",
    alt: "OpenReliant (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "An open-source reimplementation of StarLancer's engine, written in Zig on SDL3. It needs your own copy of the game.",
  notesEs:
    "Reimplementación de código abierto del motor de StarLancer, escrita en Zig sobre SDL3. Necesitas tu propia copia del juego.",
};
