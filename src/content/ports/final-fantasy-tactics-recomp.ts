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
  originalSystems: ["PlayStation"],
  summary: "Final Fantasy Tactics is a 1997 tactical role-playing game developed and published by Square for the PlayStation. It was released in Japan in June 1997 and in North America in January 1998 by Sony Computer Entertainment. It is the first game of the Tactics sub-series within the Final Fantasy franchise, and the first entry set in the fictional world later known as Ivalice. The story follows Ramza Beoulve, a highborn cadet placed in the middle of a military conflict known as The Lion War, where two opposing noble factions are coveting the throne of the kingdom.",
  summaryEs: "Final Fantasy Tactics , usualmente abreviado FFT, es un videojuego de rol táctico desarrollado y publicado por Square Co., Ltd. para la consola de videojuegos Sony PlayStation. El juego es una variación de la saga de Square Enix Final Fantasy, y está dirigido a un tipo especial de jugadores, los inclinados a la estrategia. El juego se desarrolla en el ficticio reino llamado Ivalice, durante un período de guerras en que el protagonista, un joven de sangre noble llamado Ramza Beoulve, se ve envuelto en un mundo de intrigas políticas, mentiras religiosas y traiciones.",
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
