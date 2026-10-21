import type { Port } from "@/lib/ports/schema";

export const sonicCdDecompilation: Port = {
  schema: "port",
  id: "sonic-cd-decompilation",
  title: "Sonic CD (2011) Decompilation",
  game: "Sonic CD",
  developers: ["Rubberduckycooly"],
  publisher: "Sega",
  originalYear: 1993,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.3.3", date: "2025-11-02" },
  sources: ["https://github.com/Rubberduckycooly/Sonic-CD-11-Decompilation"],
  license: { spdx: "NOASSERTION", note: "community Retro Engine license, not an SPDX identifier" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-21",
  originalSystems: ["Sega CD / Mega-CD"],
  notes: "Complete decompilation of the 2011 Sonic CD remaster (Retro Engine v3), playable on Windows, Linux and macOS with both soundtracks and Tails. Requires the 2011 game data.",
  notesEs: "DescompilaciÃ³n completa del remaster de Sonic CD de 2011 (Retro Engine v3), jugable en Windows, Linux y macOS con ambas bandas sonoras y Tails. Requiere los datos del juego de 2011.",
};

