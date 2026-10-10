import type { Port } from "@/lib/ports/schema";

export const starWarsMastersOfTerasKasiRecomp: Port = {
  schema: "port",
  id: "star-wars-masters-of-teras-kasi-recomp",
  title: "Masters of Teras Kasi Recompiled",
  game: "Star Wars: Masters of Teras Kasi",
  developers: ["PortsDR"],
  publisher: "LucasArts",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
  notes: "PortsDR lists this recompilation without a public repository. Own the game to play it.",
  notesEs:
    "PortsDR lista esta recompilación sin repositorio público. Necesitas el juego para jugarla.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Star%20Wars%20-%20Masters%20of%20Teras%20Kasi%20(Europe).png",
    alt: "Star Wars: Masters of Teras Kasi (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Star%20Wars%20-%20Masters%20of%20Teras%20Kasi%20(Europe).png",
      alt: "Star Wars: Masters of Teras Kasi (screenshot)",
      credit: "Libretro",
    },
  ],
};
