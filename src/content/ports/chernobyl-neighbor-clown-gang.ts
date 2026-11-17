import type { Port } from "@/lib/ports/schema";

export const ChernobylNeighborClownGang: Port = {
  schema: "port",
  id: "chernobyl-neighbor-clown-gang",
  title: "Chernobyl Neighbor. Clown Gang",
  game: "Chernobyl Neighbor. Clown Gang",
  developers: ["smolkrieger"],
  publisher: "tinyTeamDev",
  originalYear: 2019,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/smolkrieger/nuclear-neighbor"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Other"],
  summary: "Chernobyl Neighbor. Clown Gang is a 2019 mobile horror adventure game developed and published by tinyTeamDev.",
  summaryEs: "Chernobyl Neighbor. Clown Gang es un juego de aventura y terror móvil de 2019 desarrollado y publicado por tinyTeamDev.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/smolkrieger/nuclear-neighbor/releases/download/AlternativeVersion/Chernobyl.Neighbor.Clown.Gang.AssetRipper.rar",
      size: "53.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/chernobyl-neighbor-clown-gang.svg",
    alt: "Chernobyl Neighbor. Clown Gang (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: 'Decompilation of the game "Chernobyl Neighbor. Clown Gang". This is not a port to PC.',
  notesEs: "Decompilación del juego «Chernobyl Neighbor. Clown Gang». No es un port a PC.",
};
