import type { Port } from "@/lib/ports/schema";

export const klonoaDoorToPhantomileRecomp: Port = {
  schema: "port",
  id: "klonoa-door-to-phantomile-recomp",
  title: "Klonoa: Door to Phantomile Recompiled",
  game: "Klonoa: Door to Phantomile",
  developers: ["PortsDR"],
  publisher: "Namco",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.1.4", date: "2026-10-01" },
  sources: ["https://github.com/TechnicallyComputers/Klonoa-Door-to-Phantomile"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Klonoa: Door to Phantomile is a 1997 platform game developed and published by Namco for the PlayStation. It is the first game in the Klonoa series. The story follows Klonoa and his friend Huepow in their efforts to save the dream world of Phantomile from an evil spirit intent on turning it into a world of nightmares. The player controls Klonoa through a 2.5D perspective; the stages are rendered in three dimensions but the player moves along a 2D path. Klonoa can grab enemies and throw them as projectiles, or use them as a jump boost to navigate through the stages.",
  summaryEs: "Klonoa: Door to Phantomile es un videojuego de plataformas desarrollado y distribuido por Namco para PlayStation. Fue lanzado el 11 de diciembre de 1997 en Japón, el 10 de marzo de 1998 en Norteamérica y el 5 de junio de 1998 en Europa. La historia del juego se centra en una criatura antropomórfica y un \"espíritu\" encapsulado en un anillo. El juego cuenta con una versión para Wii conocida simplemente como Klonoa en Norteamérica y Europa. Fue desarrollada por Paon y lanzada el 4 de diciembre de 2008 en Japón, el 5 de mayo de 2009 en Norteamérica y el 22 de mayo de 2009 en Europa.",
  notes:
    "A PortsDR community listing; no repository or release is public. The original game is required.",
  notesEs:
    "Ficha comunitaria de PortsDR; no hay repositorio ni release públicos. Hace falta el juego original.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/TechnicallyComputers/Klonoa-Door-to-Phantomile/releases/download/v0.1.4/kdp-0.1.4-linux-x64.zip",
      size: "46.5 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/TechnicallyComputers/Klonoa-Door-to-Phantomile/releases/download/v0.1.4/kdp-0.1.4-macos-arm64.zip",
      size: "24.2 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/TechnicallyComputers/Klonoa-Door-to-Phantomile/releases/download/v0.1.4/kdp-0.1.4-macos-x64.zip",
      size: "24.8 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/TechnicallyComputers/Klonoa-Door-to-Phantomile/releases/download/v0.1.4/kdp-0.1.4-windows-x64.zip",
      size: "25.0 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Klonoa%20-%20Door%20to%20Phantomile%20(Europe).png",
    alt: "Klonoa: Door to Phantomile (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Klonoa%20-%20Door%20to%20Phantomile%20(Europe).png",
      alt: "Klonoa: Door to Phantomile (screenshot)",
      credit: "Libretro",
    },
  ],
};
