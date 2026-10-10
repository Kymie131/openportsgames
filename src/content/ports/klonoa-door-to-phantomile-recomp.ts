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
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "A PortsDR community listing; no repository or release is public. The original game is required.",
  notesEs:
    "Ficha comunitaria de PortsDR; no hay repositorio ni release públicos. Hace falta el juego original.",
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
