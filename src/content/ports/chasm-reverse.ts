import type { Port } from "@/lib/ports/schema";

export const ChasmReverse: Port = {
  schema: "port",
  id: "chasm-reverse",
  title: "Chasm-Reverse",  game: "Chasm: The Rift",
  developers: ["Panzerschrek"],  publisher: "GT Interactive",  originalYear: 1997,
  portType: "reimplementation",  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.3", date: "2017-12-03" },
  sources: ["https://github.com/Panzerschrek/Chasm-Reverse"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS"],  summary: "Chasm: The Rift is a 1997 first-person shooter developed by Action Forms and published by GT Interactive. A marine fights through time rifts and mutated enemies after an alien invasion reaches Earth.",  summaryEs: "Chasm: The Rift es un shooter en primera persona de 1997 desarrollado por Action Forms y publicado por GT Interactive. Un marine lucha a través de grietas temporales y enemigos mutados tras una invasión alienígena en la Tierra.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/Panzerschrek/Chasm-Reverse/releases/download/0.3/PanzerChasm.zip",
      size: "1.1 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/20/Chasm_-_The_Rift_Coverart.png",
    alt: "Chasm: The Rift (box art)",
    credit: "Wikipedia",
  },
  notes: 'Tools for reverse-engineering of game "Chasm: The Rift".',
  notesEs: "Herramientas de ingeniería inversa del juego «Chasm: The Rift».",
};
