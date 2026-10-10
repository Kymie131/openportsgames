import type { Port } from "@/lib/ports/schema";

export const finalFantasyTacticsRecomp: Port = {
  schema: "port",
  id: "final-fantasy-tactics-recomp",
  title: "Final Fantasy Tactics Recompiled",
  game: "Final Fantasy Tactics",
  developers: ["NJH-1001"],
  publisher: "Square",
  originalYear: 1997,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/NJH-1001/FinFanTacRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Final Fantasy Tactics (PS1, USA SCUS-94221) with PSXRecomp. The releases are kits that generate and compile the game on your machine from your own disc, using OpenBIOS by default. First release 0.1.0, tested mostly on Windows.",
  notesEs:
    "Recompilación de Final Fantasy Tactics (PS1, USA SCUS-94221) con PSXRecomp. Las releases son kits que generan y compilan el juego en tu equipo a partir de tu propio disco, con OpenBIOS por defecto. Primera versión 0.1.0, probada sobre todo en Windows.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Final%20Fantasy%20Tactics%20(Japan)%20(Rev%201).png",
    alt: "Final Fantasy Tactics (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Final%20Fantasy%20Tactics%20(Japan)%20(Rev%201).png",
      alt: "Final Fantasy Tactics (screenshot)",
      credit: "Libretro",
    },
  ],
};
