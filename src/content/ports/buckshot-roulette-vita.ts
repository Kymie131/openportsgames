import type { Port } from "@/lib/ports/schema";

export const buckshotRouletteVita: Port = {
  schema: "port",
  id: "buckshot-roulette-vita",
  title: "Buckshot Roulette (PS Vita)",
  game: "Buckshot Roulette",
  developers: ["voidchecksam"],
  publisher: "Mike Klubnika",
  originalYear: 2023,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita"],
  status: "beta",
  release: { version: "1.0.1", date: "2026-10-20" },
  sources: ["https://github.com/voidchecksam/BuckshotRoulettePortable-BSHT"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  related: ["buckshot-roulette-mobile"],
  notes:
    "Buckshot Roulette (Mike Klubnika, 2023) ported natively to PS Vita at 60 fps, with the full single-player campaign. You need your own Steam copy of the game.",
  notesEs:
    "Buckshot Roulette (Mike Klubnika, 2023) portado de forma nativa a PS Vita a 60 fps, con toda la campaña individual. Necesitas tu copia de Steam.",
};
